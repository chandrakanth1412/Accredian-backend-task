/*
  Warnings:

  - You are about to drop the column `courseName` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `refereeEmail` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `refereeName` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `referrerEmail` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `referrerName` on the `referral` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Referral` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referralCode` to the `Referral` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Referral_refereeEmail_key` ON `referral`;

-- DropIndex
DROP INDEX `Referral_referrerEmail_key` ON `referral`;

-- AlterTable
ALTER TABLE `referral` DROP COLUMN `courseName`,
    DROP COLUMN `refereeEmail`,
    DROP COLUMN `refereeName`,
    DROP COLUMN `referrerEmail`,
    DROP COLUMN `referrerName`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `referralCode` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Referral_email_key` ON `Referral`(`email`);
