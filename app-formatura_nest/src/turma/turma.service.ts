import { Injectable } from '@nestjs/common';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { usuario } from '@prisma/client';

@Injectable()
export class TurmaService {
  constructor(private prismaService: PrismaService) {}

  create(createTurmaDto: CreateTurmaDto) {
    return this.prismaService.turma.create({
      data: createTurmaDto
    })
  }

  addAluno(turma_id: string, aluno_id: string) {
    return this.prismaService.alunos_turma.create({
      data: {
        turma_id,
        aluno_id
      }
    })
  }

  findAll() {
    return this.prismaService.turma.findMany();
  }

  findAllAlunos(turma_id: string) {
    return this.prismaService.alunos_turma.findMany({
      where: {turma_id}
    })
  }

  findOne(id: string) {
    return this.prismaService.turma.findUnique({
      where: {id}
    });
  }

  update(id: string, updateTurmaDto: UpdateTurmaDto) {
    return this.prismaService.turma.update({
      where: {id},
      data: updateTurmaDto
    });
  }

  async addComissao(comissao_id: string, turma_id: string) {
    const alunoTurma = await this.prismaService.alunos_turma.findUnique({
      where: {
        turma_id_aluno_id: {
          turma_id: turma_id, 
          aluno_id: comissao_id
        }}
    })

    if(!alunoTurma)
      return;

    return this.prismaService.turma.update({
      where: {id: turma_id},
      data: {
        comissao_id
      }
    })
  }

  async alterStatus(turma_id: string) {
    const turma = await this.prismaService.turma.findUnique({
      where: {id: turma_id}
    })

    if(!turma)
      return;

    return this.prismaService.turma.update({
      where: {id: turma_id},
      data: {
        status: !turma.status
      }
    })
  }

  remove(id: string) {
    return this.prismaService.turma.delete({
      where: {id}
    });
  }
}
