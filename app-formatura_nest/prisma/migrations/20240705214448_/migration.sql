/*
  Warnings:

  - You are about to drop the `_eventoToturma` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_eventoToturma" DROP CONSTRAINT "_eventoToturma_A_fkey";

-- DropForeignKey
ALTER TABLE "_eventoToturma" DROP CONSTRAINT "_eventoToturma_B_fkey";

-- DropTable
DROP TABLE "_eventoToturma";

-- CreateTable
CREATE TABLE "turma_eventos" (
    "turma_id" TEXT NOT NULL,
    "evento_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "turma_eventos_turma_id_evento_id_key" ON "turma_eventos"("turma_id", "evento_id");

-- AddForeignKey
ALTER TABLE "turma_eventos" ADD CONSTRAINT "turma_eventos_turma_id_fkey" FOREIGN KEY ("turma_id") REFERENCES "turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turma_eventos" ADD CONSTRAINT "turma_eventos_evento_id_fkey" FOREIGN KEY ("evento_id") REFERENCES "evento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
