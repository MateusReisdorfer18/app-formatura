/*
  Warnings:

  - The primary key for the `alunos_turma` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[turma_id,aluno_id]` on the table `alunos_turma` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "alunos_turma" DROP CONSTRAINT "alunos_turma_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "alunos_turma_turma_id_aluno_id_key" ON "alunos_turma"("turma_id", "aluno_id");
