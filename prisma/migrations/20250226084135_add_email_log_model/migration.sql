/*
  Warnings:

  - Made the column `courseName` on table `referral` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `referral` MODIFY `courseName` VARCHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE `EmailLog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `toEmail` VARCHAR(191) NOT NULL,
    `subject` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `sentAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
