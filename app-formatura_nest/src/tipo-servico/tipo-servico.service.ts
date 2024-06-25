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

  update(id: string, updateTipoServicoDto: UpdateTipoServicoDto) {
    return this.prismaService.tipo_servico.update({
      where: {id},
      data: updateTipoServicoDto
    });
  }

  remove(id: string) {
    return this.prismaService.tipo_servico.delete({
      where: {id}
    });
  }
}
