import { Module } from '@nestjs/common';
import { NumeroDeParcelasService } from './numero-de-parcelas.service';
import { NumeroDeParcelasController } from './numero-de-parcelas.controller';

@Module({
  controllers: [NumeroDeParcelasController],
  providers: [NumeroDeParcelasService],
})
export class NumeroDeParcelasModule {}
