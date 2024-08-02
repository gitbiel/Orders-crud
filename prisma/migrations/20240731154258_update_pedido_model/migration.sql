/*
  Warnings:

  - You are about to drop the column `criadoEm` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `pedidoId` on the `pedidos` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cpfCnpj]` on the table `pedidos` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "pedidos" DROP COLUMN "criadoEm",
DROP COLUMN "pedidoId",
ALTER COLUMN "dataPedido" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "dataPublicacao" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "pedidos_cpfCnpj_key" ON "pedidos"("cpfCnpj");
