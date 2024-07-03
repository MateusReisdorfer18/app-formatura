import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParcelaService } from './parcela.service';
import { CreateParcelaDto } from './dto/create-parcela.dto';
import { UpdateParcelaDto } from './dto/update-parcela.dto';
import { CreateReciboDto } from './dto/create-recibo.dto';

@Controller('parcela')
export class ParcelaController {
  constructor(private readonly parcelaService: ParcelaService) {}

  @Post()
  create(@Body() createParcelaDto: CreateParcelaDto) {
    return this.parcelaService.create(createParcelaDto);
  }

  @Post(':parcela_id/recibo')
  payParcela(@Param('parcela_id') parcela_id: string, @Body() createReciboDto: CreateReciboDto) {
    return this.parcelaService.createRecibo(parcela_id, createReciboDto);
  }

  @Get()
  findAll() {
    return this.parcelaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parcelaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParcelaDto: UpdateParcelaDto) {
    return this.parcelaService.update(id, updateParcelaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parcelaService.remove(id);
  }
}
