/*
  Warnings:

  - You are about to drop the column `turmaId` on the `evento` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "evento" DROP CONSTRAINT "evento_turmaId_fkey";

-- AlterTable
ALTER TABLE "evento" DROP COLUMN "turmaId";

-- CreateTable
CREATE TABLE "_eventoToturma" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_eventoToturma_AB_unique" ON "_eventoToturma"("A", "B");

-- CreateIndex
CREATE INDEX "_eventoToturma_B_index" ON "_eventoToturma"("B");

-- AddForeignKey
ALTER TABLE "_eventoToturma" ADD CONSTRAINT "_eventoToturma_A_fkey" FOREIGN KEY ("A") REFERENCES "evento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_eventoToturma" ADD CONSTRAINT "_eventoToturma_B_fkey" FOREIGN KEY ("B") REFERENCES "turma"("id") ON DELETE CASCADE ON UPDATE CASCADE;
