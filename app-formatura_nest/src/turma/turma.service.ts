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

    const turma = await this.prismaService.turma.create({
      data: createTurmaDto
    })

    await this.prismaService.usuario.update({
      where: {id: createTurmaDto.comissao_id},
      data: {
        is_comissao: true,
        turma_id: turma.id
      }
    })

    return turma;
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
      data: {turma_id: turma_id}
    });
  }

  findAll() {
    return this.prismaService.turma.findMany();
  }

  findAllAlunos(turma_id: string) {
    return this.prismaService.usuario.findMany({
      where: {turma_id: turma_id}
    })
  }

  findEvento(evento_id: string) {
    return this.prismaService.turma.findFirst({
      where: {
        evento_id
      }
    }).evento();
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
    await this.prismaService.usuario.update({
      where: {id: comissao_id},
      data: {
        is_comissao: true
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
      return false;

    await this.prismaService.turma.update({
      where: {id: turma_id},
      data: {
        status: !turma.status
      }
    })

    return true;
  }

  async remove(id: string) {
    const turmaRemoved = await this.prismaService.turma.delete({
      where: {id}
    });

    return turmaRemoved !== null;
  }

  async removeAluno(turma_id: string, aluno_id: string) {
    const returnRemoveAluno = await this.prismaService.usuario.update({
      where: {id: aluno_id, turma_id: turma_id},
      data: {
        turma_id: null
      }
    })

    return returnRemoveAluno !== null;
  }

  async removeComissao(turma_id: string) {
    const returnRemoveComissao = await this.prismaService.turma.update({
      where: {id: turma_id},
      data: {
        comissao_id: null
      }
    })

    return returnRemoveComissao !== null;
  }
}
