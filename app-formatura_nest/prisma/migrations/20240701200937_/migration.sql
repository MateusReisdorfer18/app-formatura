/*
  Warnings:

  - You are about to drop the `alunos_turma` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recibo_formando` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "alunos_turma" DROP CONSTRAINT "alunos_turma_aluno_id_fkey";

-- DropForeignKey
ALTER TABLE "alunos_turma" DROP CONSTRAINT "alunos_turma_turma_id_fkey";

-- DropForeignKey
ALTER TABLE "recibo_formando" DROP CONSTRAINT "recibo_formando_formando_id_fkey";

-- DropForeignKey
ALTER TABLE "recibo_formando" DROP CONSTRAINT "recibo_formando_recibo_id_fkey";

-- AlterTable
ALTER TABLE "recibo" ADD COLUMN     "formandoId" TEXT;

-- AlterTable
ALTER TABLE "usuario" ADD COLUMN     "turmaId" TEXT;

-- DropTable
DROP TABLE "alunos_turma";

-- DropTable
DROP TABLE "recibo_formando";

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "turma"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recibo" ADD CONSTRAINT "recibo_formandoId_fkey" FOREIGN KEY ("formandoId") REFERENCES "usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
