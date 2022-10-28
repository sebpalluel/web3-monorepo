-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "fromAddress" TEXT NOT NULL,
    "toAddress" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "gasLimit" DOUBLE PRECISION NOT NULL,
    "gasPrice" DOUBLE PRECISION NOT NULL,
    "gasUsed" DOUBLE PRECISION NOT NULL,
    "gasFee" DOUBLE PRECISION NOT NULL,
    "gasFeeUsd" DOUBLE PRECISION NOT NULL,
    "nonce" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "data" TEXT NOT NULL,
    "input" TEXT NOT NULL,
    "blockNumber" DOUBLE PRECISION NOT NULL,
    "blockHash" TEXT NOT NULL,
    "transaction" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "CryptocurrencyAddress" TEXT,
    "walletId" TEXT,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wallet" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "balanceUsd" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wallet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_address_key" ON "Wallet"("address");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_CryptocurrencyAddress_fkey" FOREIGN KEY ("CryptocurrencyAddress") REFERENCES "Cryptocurrency"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "Wallet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
