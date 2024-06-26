import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NumeroDeParcelasService } from './numero-de-parcelas.service';
import { CreateNumeroDeParcelaDto } from './dto/create-numero-de-parcela.dto';
import { UpdateNumeroDeParcelaDto } from './dto/update-numero-de-parcela.dto';

@Controller('numero-de-parcelas')
export class NumeroDeParcelasController {
  constructor(private readonly numeroDeParcelasService: NumeroDeParcelasService) {}

  @Post()
  create(@Body() createNumeroDeParcelaDto: CreateNumeroDeParcelaDto) {
    return this.numeroDeParcelasService.create(createNumeroDeParcelaDto);
  }

  @Get()
  findAll() {
    return this.numeroDeParcelasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.numeroDeParcelasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNumeroDeParcelaDto: UpdateNumeroDeParcelaDto) {
    return this.numeroDeParcelasService.update(id, updateNumeroDeParcelaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.numeroDeParcelasService.remove(id);
  }
}
