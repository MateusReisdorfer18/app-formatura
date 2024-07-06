-- AlterTable
ALTER TABLE "evento" ADD COLUMN     "turmaId" TEXT;

-- AddForeignKey
ALTER TABLE "evento" ADD CONSTRAINT "evento_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "turma"("id") ON DELETE SET NULL ON UPDATE CASCADE;
