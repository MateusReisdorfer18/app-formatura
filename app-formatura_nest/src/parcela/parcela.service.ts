import { Injectable } from '@nestjs/common';
import { CreateParcelaDto } from './dto/create-parcela.dto';
import { UpdateParcelaDto } from './dto/update-parcela.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReciboDto } from './dto/create-recibo.dto';

@Injectable()
export class ParcelaService {
  constructor(private prismaService: PrismaService) {}

  create(createParcelaDto: CreateParcelaDto) {
    return this.prismaService.parcela.create({
      data: createParcelaDto
    })
  }

  async createRecibo(parcela_id: string, createReciboDto: CreateReciboDto) {
    const parcela = await this.prismaService.parcela.findUnique({
      where: {id: parcela_id}
    })

    const turma = await this.prismaService.turma.findUnique({
      where: {
        id: createReciboDto.turma_id,
        comissao_id: createReciboDto.comissao_id
      }
    })

    if(!parcela || !turma)
      return null;

    const recibo = await this.prismaService.recibo.create({
      data: {
        turma_id: turma.id,
        comissao_id: turma.comissao_id
      }
    })

    await this.prismaService.recibo_formando.create({
      data: {
        formando_id: parcela.formando_id,
        recibo_id: recibo.id
      }
    })

    await this.prismaService.parcela.update({
      where: {id: parcela_id},
      data: {
        recibo_id: recibo.id,
        situacao: true
      }
    })

    return recibo;
  }

  findAll() {
    return this.prismaService.parcela.findMany();
  }

  findOne(id: string) {
    return this.prismaService.parcela.findUnique({
      where: {id}
    });
  }

  update(id: string, updateParcelaDto: UpdateParcelaDto) {
    return this.prismaService.parcela.update({
      where: {id},
      data: updateParcelaDto
    });
  }

  remove(id: string) {
    return this.prismaService.parcela.delete({
      where: {id}
    });
  }
}
