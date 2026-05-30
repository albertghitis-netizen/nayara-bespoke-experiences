CREATE TABLE `push_subscriptions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_open_id` varchar(64) NOT NULL,
	`endpoint` text NOT NULL,
	`p256dh` text NOT NULL,
	`auth` text NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now())
);
--> statement-breakpoint
CREATE TABLE `sofia_reminders` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_open_id` varchar(64) NOT NULL,
	`category` varchar(32) NOT NULL,
	`label` varchar(128) NOT NULL,
	`time_utc` varchar(5) NOT NULL,
	`days` varchar(32) NOT NULL DEFAULT '0123456',
	`enabled` int NOT NULL DEFAULT 1,
	`schedule_cron_task_uid` varchar(65),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE INDEX `push_sub_user_idx` ON `push_subscriptions` (`user_open_id`);--> statement-breakpoint
CREATE INDEX `reminder_user_idx` ON `sofia_reminders` (`user_open_id`);--> statement-breakpoint
CREATE INDEX `reminder_task_uid_idx` ON `sofia_reminders` (`schedule_cron_task_uid`);