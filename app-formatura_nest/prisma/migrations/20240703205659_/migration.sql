/*
  Warnings:

  - You are about to drop the column `formandoId` on the `recibo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "recibo" DROP CONSTRAINT "recibo_formandoId_fkey";

-- AlterTable
ALTER TABLE "recibo" DROP COLUMN "formandoId",
ADD COLUMN     "formando_id" TEXT;

-- AddForeignKey
ALTER TABLE "recibo" ADD CONSTRAINT "recibo_formando_id_fkey" FOREIGN KEY ("formando_id") REFERENCES "usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
