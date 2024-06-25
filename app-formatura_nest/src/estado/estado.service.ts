import { Injectable } from '@nestjs/common';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EstadoService {
  constructor(private prismaService: PrismaService) {}

  create(createEstadoDto: CreateEstadoDto) {
    return this.prismaService.estado.create({
      data: createEstadoDto
    });
  }

  findAll() {
    return this.prismaService.estado.findMany();
  }

  findOne(id: string) {
    return this.prismaService.estado.findUnique({
      where: {id}
    });
  }

  update(id: string, updateEstTadoDto: UpdateEstadoDto) {
    return this.prismaService.estado.update({
      where: {id},
      data: updateEstTadoDto
    });
  }

  remove(id: string) {
    return this.prismaService.estado.delete({
      where: {id}
    });
  }
}
