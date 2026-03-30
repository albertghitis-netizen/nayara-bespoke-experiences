CREATE TABLE `leads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` text,
	`email` varchar(320) NOT NULL,
	`source` varchar(64) NOT NULL DEFAULT 'chatbot',
	`channel` varchar(64) NOT NULL DEFAULT 'website',
	`propertyInterest` text,
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `leads_id` PRIMARY KEY(`id`)
);
