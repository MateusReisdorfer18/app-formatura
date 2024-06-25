-- CreateTable
CREATE TABLE "estado" (
    "id" TEXT NOT NULL,
    "sigla" TEXT NOT NULL,

    CONSTRAINT "estado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_servico" (
    "id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "tipo_servico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "isComissao" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "turma" (
    "id" TEXT NOT NULL,
    "comissao_id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "universidade" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado_id" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "turma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alunos_turma" (
    "turma_id" TEXT NOT NULL,
    "aluno_id" TEXT NOT NULL,

    CONSTRAINT "alunos_turma_pkey" PRIMARY KEY ("turma_id")
);

-- CreateTable
CREATE TABLE "servico" (
    "id" TEXT NOT NULL,
    "tipo_id" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "observacao" TEXT,
    "cidade" TEXT NOT NULL,
    "estado_id" TEXT NOT NULL,
    "telefoneCelular" TEXT NOT NULL,
    "telefoneFixo" TEXT,
    "valor" DOUBLE PRECISION NOT NULL,
    "situacao" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "servico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evento" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "convidados" INTEGER NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evento_servico" (
    "evento_id" TEXT NOT NULL,
    "servico_id" TEXT NOT NULL,

    CONSTRAINT "evento_servico_pkey" PRIMARY KEY ("evento_id","servico_id")
);

-- CreateTable
CREATE TABLE "recibo" (
    "id" TEXT NOT NULL,
    "turma_id" TEXT NOT NULL,

    CONSTRAINT "recibo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parcela" (
    "id" TEXT NOT NULL,
    "formando_id" TEXT NOT NULL,
    "numero" DOUBLE PRECISION NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "situacao" BOOLEAN NOT NULL DEFAULT false,
    "recibo_id" TEXT NOT NULL,

    CONSTRAINT "parcela_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "parcela_recibo_id_key" ON "parcela"("recibo_id");

-- AddForeignKey
ALTER TABLE "turma" ADD CONSTRAINT "turma_comissao_id_fkey" FOREIGN KEY ("comissao_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turma" ADD CONSTRAINT "turma_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alunos_turma" ADD CONSTRAINT "alunos_turma_turma_id_fkey" FOREIGN KEY ("turma_id") REFERENCES "turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alunos_turma" ADD CONSTRAINT "alunos_turma_aluno_id_fkey" FOREIGN KEY ("aluno_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servico" ADD CONSTRAINT "servico_tipo_id_fkey" FOREIGN KEY ("tipo_id") REFERENCES "tipo_servico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servico" ADD CONSTRAINT "servico_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evento_servico" ADD CONSTRAINT "evento_servico_evento_id_fkey" FOREIGN KEY ("evento_id") REFERENCES "evento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evento_servico" ADD CONSTRAINT "evento_servico_servico_id_fkey" FOREIGN KEY ("servico_id") REFERENCES "servico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recibo" ADD CONSTRAINT "recibo_turma_id_fkey" FOREIGN KEY ("turma_id") REFERENCES "turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parcela" ADD CONSTRAINT "parcela_formando_id_fkey" FOREIGN KEY ("formando_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parcela" ADD CONSTRAINT "parcela_recibo_id_fkey" FOREIGN KEY ("recibo_id") REFERENCES "recibo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
