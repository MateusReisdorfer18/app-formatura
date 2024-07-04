/*
  Warnings:

  - You are about to drop the column `telefoneCelular` on the `servico` table. All the data in the column will be lost.
  - You are about to drop the column `telefoneFixo` on the `servico` table. All the data in the column will be lost.
  - You are about to drop the column `isComissao` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `turmaId` on the `usuario` table. All the data in the column will be lost.
  - Added the required column `telefone_celular` to the `servico` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "usuario" DROP CONSTRAINT "usuario_turmaId_fkey";

-- AlterTable
ALTER TABLE "servico" DROP COLUMN "telefoneCelular",
DROP COLUMN "telefoneFixo",
ADD COLUMN     "telefone_celular" TEXT NOT NULL,
ADD COLUMN     "telefone_fixo" TEXT;

-- AlterTable
ALTER TABLE "usuario" DROP COLUMN "isComissao",
DROP COLUMN "turmaId",
ADD COLUMN     "is_comissao" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "turma_id" TEXT;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_turma_id_fkey" FOREIGN KEY ("turma_id") REFERENCES "turma"("id") ON DELETE SET NULL ON UPDATE CASCADE;
