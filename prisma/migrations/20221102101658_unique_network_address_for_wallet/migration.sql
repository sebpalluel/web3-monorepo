/*
  Warnings:

  - A unique constraint covering the columns `[network,address]` on the table `Wallet` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Wallet_network_address_key" ON "Wallet"("network", "address");
