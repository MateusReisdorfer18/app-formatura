import { Controller, Get, Param } from '@nestjs/common';
import { ReciboService } from './recibo.service';

@Controller('recibo')
export class ReciboController {
  constructor(private readonly reciboService: ReciboService) {}

  @Get()
  findAll() {
    return this.reciboService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reciboService.findOne(id);
  }
}
