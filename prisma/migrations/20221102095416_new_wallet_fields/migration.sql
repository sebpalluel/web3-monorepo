/*
  Warnings:

  - Added the required column `network` to the `Wallet` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Wallet_address_key";

-- AlterTable
ALTER TABLE "Wallet" ADD COLUMN     "network" TEXT NOT NULL,
ALTER COLUMN "name" DROP NOT NULL;
