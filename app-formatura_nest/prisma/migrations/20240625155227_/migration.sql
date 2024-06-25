/*
  Warnings:

  - Added the required column `comissao_id` to the `recibo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "recibo" ADD COLUMN     "comissao_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "recibo_formando" (
    "formando_id" TEXT NOT NULL,
    "recibo_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "recibo_formando_formando_id_recibo_id_key" ON "recibo_formando"("formando_id", "recibo_id");

-- AddForeignKey
ALTER TABLE "recibo" ADD CONSTRAINT "recibo_comissao_id_fkey" FOREIGN KEY ("comissao_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recibo_formando" ADD CONSTRAINT "recibo_formando_formando_id_fkey" FOREIGN KEY ("formando_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recibo_formando" ADD CONSTRAINT "recibo_formando_recibo_id_fkey" FOREIGN KEY ("recibo_id") REFERENCES "recibo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
