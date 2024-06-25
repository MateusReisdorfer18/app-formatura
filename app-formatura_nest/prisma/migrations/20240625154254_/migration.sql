/*
  Warnings:

  - The primary key for the `alunos_turma` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `evento_servico` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[evento_id,servico_id]` on the table `evento_servico` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "alunos_turma" DROP CONSTRAINT "alunos_turma_pkey",
ADD CONSTRAINT "alunos_turma_pkey" PRIMARY KEY ("turma_id", "aluno_id");

-- AlterTable
ALTER TABLE "evento_servico" DROP CONSTRAINT "evento_servico_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "evento_servico_evento_id_servico_id_key" ON "evento_servico"("evento_id", "servico_id");
