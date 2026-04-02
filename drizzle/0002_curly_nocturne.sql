CREATE TABLE `conversations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`sessionId` varchar(64) NOT NULL,
	`channel` varchar(64) NOT NULL DEFAULT 'website',
	`leadId` int,
	`messages` json NOT NULL,
	`summary` text,
	`sentiment` varchar(32),
	`escalatedToAgent` boolean DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `conversations_id` PRIMARY KEY(`id`)
);
