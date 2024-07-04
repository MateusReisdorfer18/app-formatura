import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TurmaService } from './turma.service';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';

@Controller('turma')
export class TurmaController {
  constructor(private readonly turmaService: TurmaService) {}

  @Post()
  create(@Body() createTurmaDto: CreateTurmaDto) {
    return this.turmaService.create(createTurmaDto);
  }

  @Patch(':turma_id/alunos')
  addAluno(@Body('aluno_id') aluno_id: string, @Param('turma_id') turma_id: string) {
    return this.turmaService.addAluno(turma_id, aluno_id)
  }

  @Get()
  findAll() {
    return this.turmaService.findAll();
  }

  @Get(':turma_id/alunos')
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

  @Patch(':turma_id/comissao')
  addComissao(@Param('turma_id') turma_id: string, @Body('comissao_id') comissao_id: string) {
    return this.turmaService.addComissao(comissao_id, turma_id);
  }

  @Patch(":turma_id/alunos/:aluno_id")
  removeAluno(@Param("turma_id") turma_id: string, @Param("aluno_id") aluno_id: string) {
    return this.turmaService.removeAluno(turma_id, aluno_id);
  }

  @Patch(':turma_id/status')
  alterStatus(@Param('turma_id') turma_id: string) {
    return this.turmaService.alterStatus(turma_id);
  }

  @Patch(":turma_id/comissao/remove")
  removeComissao(@Param("turma_id") turma_id: string) {
    return this.turmaService.removeComissao(turma_id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.turmaService.remove(id);
  }
}
