-- DropForeignKey
ALTER TABLE "parcela" DROP CONSTRAINT "parcela_recibo_id_fkey";

-- AlterTable
ALTER TABLE "parcela" ALTER COLUMN "recibo_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "parcela" ADD CONSTRAINT "parcela_recibo_id_fkey" FOREIGN KEY ("recibo_id") REFERENCES "recibo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
