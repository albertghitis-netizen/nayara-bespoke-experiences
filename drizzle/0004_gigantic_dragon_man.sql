CREATE TABLE `sofia_waitlist` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(320) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now())
);
