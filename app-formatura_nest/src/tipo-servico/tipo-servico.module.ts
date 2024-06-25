import { Module } from '@nestjs/common';
import { TipoServicoService } from './tipo-servico.service';
import { TipoServicoController } from './tipo-servico.controller';

@Module({
  controllers: [TipoServicoController],
  providers: [TipoServicoService],
})
export class TipoServicoModule {}
