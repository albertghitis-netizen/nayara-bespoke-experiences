DROP TABLE `conversations`;--> statement-breakpoint
ALTER TABLE `users` DROP INDEX `users_openId_unique`;--> statement-breakpoint
ALTER TABLE `leads` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `users` DROP PRIMARY KEY;--> statement-breakpoint
CREATE INDEX `users_openId_unique` ON `users` (`openId`);