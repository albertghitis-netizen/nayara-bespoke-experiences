import { mysqlTable, mysqlSchema, AnyMySqlColumn, int, text, varchar, timestamp, index, mysqlEnum } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const leads = mysqlTable("leads", {
	id: int().autoincrement().notNull(),
	name: text(),
	email: varchar({ length: 320 }).notNull(),
	source: varchar({ length: 64 }).default('chatbot').notNull(),
	channel: varchar({ length: 64 }).default('website').notNull(),
	propertyInterest: text(),
	notes: text(),
	createdAt: timestamp({ mode: 'date' }).defaultNow().notNull(),
});

export const users = mysqlTable("users", {
	id: int().autoincrement().notNull(),
	openId: varchar({ length: 64 }).notNull(),
	name: text(),
	email: varchar({ length: 320 }),
	loginMethod: varchar({ length: 64 }),
	role: mysqlEnum(['user','admin']).default('user').notNull(),
	createdAt: timestamp({ mode: 'date' }).defaultNow().notNull(),
	updatedAt: timestamp({ mode: 'date' }).defaultNow().onUpdateNow().notNull(),
	lastSignedIn: timestamp({ mode: 'date' }).defaultNow().notNull(),
},
(table) => [
	index("users_openId_unique").on(table.openId),
]);


export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const sofiaWaitlist = mysqlTable("sofia_waitlist", {
	id: int().autoincrement().notNull(),
	email: varchar({ length: 320 }).notNull(),
	createdAt: timestamp({ mode: 'date' }).defaultNow().notNull(),
});

/* ═══ Push Notification Subscriptions ═══ */
export const pushSubscriptions = mysqlTable("push_subscriptions", {
	id: int().autoincrement().notNull(),
	userOpenId: varchar("user_open_id", { length: 64 }).notNull(),
	endpoint: text().notNull(),
	p256dh: text().notNull(),
	auth: text().notNull(),
	createdAt: timestamp({ mode: 'date' }).defaultNow().notNull(),
},
(table) => [
	index("push_sub_user_idx").on(table.userOpenId),
]);

/* ═══ Sofía Reminders ═══ */
export const sofiaReminders = mysqlTable("sofia_reminders", {
	id: int().autoincrement().notNull(),
	userOpenId: varchar("user_open_id", { length: 64 }).notNull(),
	category: varchar({ length: 32 }).notNull(), // sleep, nutrition, therapy, exercise, meds, social
	label: varchar({ length: 128 }).notNull(), // e.g. "Take morning meds"
	timeUtc: varchar("time_utc", { length: 5 }).notNull(), // HH:MM in UTC
	days: varchar({ length: 32 }).default('0123456').notNull(), // 0=Sun..6=Sat, e.g. "12345" = Mon-Fri
	enabled: int().default(1).notNull(), // 1=active, 0=paused
	scheduleCronTaskUid: varchar("schedule_cron_task_uid", { length: 65 }),
	createdAt: timestamp({ mode: 'date' }).defaultNow().notNull(),
	updatedAt: timestamp({ mode: 'date' }).defaultNow().onUpdateNow().notNull(),
},
(table) => [
	index("reminder_user_idx").on(table.userOpenId),
	index("reminder_task_uid_idx").on(table.scheduleCronTaskUid),
]);

export type Lead = typeof leads.$inferSelect;
export type InsertLead = typeof leads.$inferInsert;
export type SofiaWaitlist = typeof sofiaWaitlist.$inferSelect;
export type PushSubscription = typeof pushSubscriptions.$inferSelect;
export type SofiaReminder = typeof sofiaReminders.$inferSelect;
