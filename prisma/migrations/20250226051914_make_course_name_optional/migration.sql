/*
  Warnings:

  - You are about to drop the column `email` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `referral` table. All the data in the column will be lost.
  - Added the required column `refereeEmail` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refereeName` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referrerEmail` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referrerName` to the `Referral` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Referral_email_key` ON `referral`;

-- AlterTable
ALTER TABLE `referral` DROP COLUMN `email`,
    DROP COLUMN `name`,
    ADD COLUMN `courseName` VARCHAR(191) NULL,
    ADD COLUMN `refereeEmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `refereeName` VARCHAR(191) NOT NULL,
    ADD COLUMN `referrerEmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `referrerName` VARCHAR(191) NOT NULL;
