-- DropForeignKey
ALTER TABLE "turma" DROP CONSTRAINT "turma_comissao_id_fkey";

-- AlterTable
ALTER TABLE "turma" ALTER COLUMN "comissao_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "turma" ADD CONSTRAINT "turma_comissao_id_fkey" FOREIGN KEY ("comissao_id") REFERENCES "usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
