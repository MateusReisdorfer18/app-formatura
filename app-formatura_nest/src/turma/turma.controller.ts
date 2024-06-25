import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode } from '@nestjs/common';
import { TurmaService } from './turma.service';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { usuario } from '@prisma/client';

@Controller('turma')
export class TurmaController {
  constructor(private readonly turmaService: TurmaService) {}

  @Post()
  create(@Body() createTurmaDto: CreateTurmaDto) {
    return this.turmaService.create(createTurmaDto);
  }

  @Post(':turma_id')
  addAluno(@Body('aluno_id') aluno_id: string, @Param('turma_id') turma_id: string) {
    return this.turmaService.addAluno(turma_id, aluno_id)
  }

  @Get()
  findAll() {
    return this.turmaService.findAll();
  }

  @Get(':turma_id')
  findAllAlunos(@Param('turma_id') turma_id: string) {
    return this.turmaService.findAllAlunos(turma_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.turmaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTurmaDto: UpdateTurmaDto) {
    return this.turmaService.update(id, updateTurmaDto);
  }

  @Patch('comissao/:turma_id')
  addComissao(@Param('turma_id') turma_id: string, @Body('comissao_id') comissao_id: string) {
    return this.turmaService.addComissao(comissao_id, turma_id);
  }

  @Patch('alterar/status/:turma_id')
  alterStatus(@Param('turma_id') turma_id: string) {
    return this.turmaService.alterStatus(turma_id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.turmaService.remove(id);
  }
}
