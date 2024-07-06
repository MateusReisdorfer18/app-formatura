/*
  Warnings:

  - You are about to drop the `turma_eventos` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `evento_id` to the `turma` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "turma_eventos" DROP CONSTRAINT "turma_eventos_evento_id_fkey";

-- DropForeignKey
ALTER TABLE "turma_eventos" DROP CONSTRAINT "turma_eventos_turma_id_fkey";

-- AlterTable
ALTER TABLE "turma" ADD COLUMN     "evento_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "turma_eventos";

-- AddForeignKey
ALTER TABLE "turma" ADD CONSTRAINT "turma_evento_id_fkey" FOREIGN KEY ("evento_id") REFERENCES "evento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
