-- AlterTable
ALTER TABLE "usuario" ADD COLUMN     "numero_de_parcelas_id" TEXT;

-- CreateTable
CREATE TABLE "numero_de_parcelas" (
    "id" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,

    CONSTRAINT "numero_de_parcelas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_numero_de_parcelas_id_fkey" FOREIGN KEY ("numero_de_parcelas_id") REFERENCES "numero_de_parcelas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
