import { Injectable } from '@nestjs/common';
import { CreateTipoServicoDto } from './dto/create-tipo-servico.dto';
import { UpdateTipoServicoDto } from './dto/update-tipo-servico.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TipoServicoService {
  constructor(private prismaService: PrismaService) {}

  create(createTipoServicoDto: CreateTipoServicoDto) {
    return this.prismaService.tipo_servico.create({
      data: createTipoServicoDto
    });
  }

  findAll() {
    return this.prismaService.tipo_servico.findMany();
  }

  findOne(id: string) {
    return this.prismaService.tipo_servico.findUnique({
      where: {id}
    });
  }

  async update(id: string, updateTipoServicoDto: UpdateTipoServicoDto) {
    const tipoServico = await this.findOne(id);
    if(!tipoServico)
      return null;

    return this.prismaService.tipo_servico.update({
      where: {id},
      data: updateTipoServicoDto
    });
  }

  async remove(id: string) {
    const tipoServico = await this.findOne(id);
    if(!tipoServico)
      return null;
    
    return this.prismaService.tipo_servico.delete({
      where: {id}
    });
  }
}
