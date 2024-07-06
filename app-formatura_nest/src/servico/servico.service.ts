import { Injectable } from '@nestjs/common';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServicoService {
  constructor(private prismaService: PrismaService) { }

  create(createServicoDto: CreateServicoDto) {
    return this.prismaService.servico.create({
      data: createServicoDto
    });
  }

  findAll() {
    return this.prismaService.servico.findMany();
  }

  findOne(id: string) {
    return this.prismaService.servico.findUnique({
      where: { id }
    });
  }

  async update(id: string, updateServicoDto: UpdateServicoDto) {
    const servico = await this.findOne(id);
    if (!servico)
      return null;

    return this.prismaService.servico.update({
      where: { id },
      data: updateServicoDto
    });
  }

  async updateSituacao(id: string) {
    const servico = await this.findOne(id);
    if (!servico)
      return null;

    const returnUpdate = await this.prismaService.servico.update({
      where: { id },
      data: {
        situacao: !servico.situacao
      }
    })

    return returnUpdate !== null;
  }

  async remove(id: string) {
    const servico = await this.findOne(id);
    if (!servico)
      return null;

    return this.prismaService.servico.delete({
      where: { id }
    });
  }
}
