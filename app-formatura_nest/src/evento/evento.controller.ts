import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventoService } from './evento.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';

@Controller('evento')
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}

  @Post()
  create(@Body() createEventoDto: CreateEventoDto) {
    return this.eventoService.create(createEventoDto);
  }

  @Post(':evento_id')
  addServico(@Param('evento_id') evento_id: string, @Body('servico_id') servico_id: string) {
    return this.eventoService.addServico(servico_id, evento_id);
  }

  @Get()
  findAll() {
    return this.eventoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventoService.findOne(id);
  }

  @Get('servico/:evento_id')
  findAllServicos(@Param('evento_id') evento_id: string) {
    return this.eventoService.findAllServicos(evento_id);
  }

  @Get('servico/:evento_id/:servico_id')
  findServico(@Param('servico_id') servico_id: string, @Param('evento_id') evento_id: string) {
    return this.eventoService.findServico(evento_id, servico_id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventoDto: UpdateEventoDto) {
    return this.eventoService.update(id, updateEventoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventoService.remove(id);
  }
}
