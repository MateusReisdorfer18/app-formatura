-- DropForeignKey
ALTER TABLE "turma" DROP CONSTRAINT "turma_evento_id_fkey";

-- AlterTable
ALTER TABLE "turma" ALTER COLUMN "evento_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "turma" ADD CONSTRAINT "turma_evento_id_fkey" FOREIGN KEY ("evento_id") REFERENCES "evento"("id") ON DELETE SET NULL ON UPDATE CASCADE;
