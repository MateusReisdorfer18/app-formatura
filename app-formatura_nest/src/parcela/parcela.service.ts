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
    const parcela = await this.findOne(parcela_id);
    const turma = await this.prismaService.turma.findUnique({
      where: {id: createReciboDto.turma_id}
    });

    if(!parcela || !turma)
      return null;

    const recibo = await this.prismaService.recibo.create({
      data: {
        ...createReciboDto,
        comissao_id: turma.comissao_id,
        formando_id: parcela.formando_id
      }
    });

    return this.prismaService.parcela.update({
      where: {id: parcela_id},
      data: {
        recibo_id: recibo.id,
        situacao: true
      }
    }).recibo();
  }

  findAll() {
    return this.prismaService.parcela.findMany();
  }

  findOne(id: string) {
    return this.prismaService.parcela.findUnique({
      where: {id}
    });
  }

  async update(id: string, updateParcelaDto: UpdateParcelaDto) {
    const parcela = this.findOne(id);
    if(!parcela)
      return null;
    
    return this.prismaService.parcela.update({
      where: {id},
      data: updateParcelaDto
    });
  }

  async remove(id: string) {
    const parcela = await this.findOne(id);
    if(!parcela)
      return null;
    
    return this.prismaService.parcela.delete({
      where: {id}
    });
  }
}
