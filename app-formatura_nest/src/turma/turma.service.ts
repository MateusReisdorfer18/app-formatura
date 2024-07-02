import { Injectable } from '@nestjs/common';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TurmaService {
  constructor(private prismaService: PrismaService) {}

  async create(createTurmaDto: CreateTurmaDto) {
    const estado = await this.prismaService.estado.findUnique({
      where: {
        id: createTurmaDto.estado_id
      }
    })

    if(!estado)
      return null;

    return this.prismaService.turma.create({
      data: createTurmaDto
    })
  }

  async addAluno(turma_id: string, aluno_id: string) {
    const aluno = await this.prismaService.usuario.findUnique({
      where: {id: aluno_id}
    })
    const turma = await this.findOne(turma_id);
    if(!aluno || !turma)
      return null;

    return await this.prismaService.usuario.update({
      where: {id: aluno_id},
      data: {turmaId: turma_id}
    });
  }

  findAll() {
    return this.prismaService.turma.findMany();
  }

  findAllAlunos(turma_id: string) {
    return this.prismaService.usuario.findMany({
      where: {turmaId: turma_id}
    })
  }

  findOne(id: string) {
    return this.prismaService.turma.findUnique({
      where: {id}
    });
  }

  async update(id: string, updateTurmaDto: UpdateTurmaDto) {
    const turma = this.findOne(id);
    if(!turma)
      return null;
   
    return this.prismaService.turma.update({
      where: {id},
      data: updateTurmaDto
    });
  }

  async addComissao(comissao_id: string, turma_id: string) {
    const aluno = await this.prismaService.usuario.findUnique({
      where: {id: comissao_id, turmaId: turma_id}
    })
    const turma = await this.findOne(turma_id);

    if(!aluno || !turma)
      return null;

    await this.prismaService.usuario.update({
      where: {id: comissao_id},
      data: {
        isComissao: true
      }
    })

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

  async remove(id: string) {
    const turma = await this.findOne(id);
    if(!turma)
      return null;

    return this.prismaService.turma.delete({
      where: {id}
    });
  }
}
