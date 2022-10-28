/*
  Warnings:

  - You are about to drop the column `CryptocurrencyAddress` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the `Cryptocurrency` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_CryptocurrencyAddress_fkey";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "CryptocurrencyAddress",
ADD COLUMN     "contractAddress" TEXT;

-- DropTable
DROP TABLE "Cryptocurrency";
