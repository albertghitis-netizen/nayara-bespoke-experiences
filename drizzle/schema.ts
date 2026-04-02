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

export type Lead = typeof leads.$inferSelect;
export type InsertLead = typeof leads.$inferInsert;
