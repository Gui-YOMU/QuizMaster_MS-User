-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lastName` VARCHAR(100) NOT NULL,
    `firstName` VARCHAR(100) NOT NULL,
    `surname` VARCHAR(50) NULL,
    `mail` VARCHAR(150) NOT NULL,
    `password` TEXT NOT NULL,
    `role` ENUM('player', 'creator', 'admin') NOT NULL DEFAULT 'player',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `User_surname_key`(`surname`),
    UNIQUE INDEX `User_mail_key`(`mail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
