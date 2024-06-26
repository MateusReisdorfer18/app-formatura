import { Controller, Get, Param } from '@nestjs/common';
import { ReciboService } from './recibo.service';

@Controller('recibo')
export class ReciboController {
  constructor(private readonly reciboService: ReciboService) {}

  @Get()
  findAll() {
    return this.reciboService.findAll();
  }

  @Get(':recibo_id/formando/:formando_id')
  findOne(@Param('formando_id') formando_id: string, @Param('recibo_id') recibo_id: string) {
    return this.reciboService.findOne(recibo_id, formando_id);
  }
}
