import { Module } from '@nestjs/common';
import { ParcelaService } from './parcela.service';
import { ParcelaController } from './parcela.controller';

@Module({
  controllers: [ParcelaController],
  providers: [ParcelaService],
})
export class ParcelaModule {}
