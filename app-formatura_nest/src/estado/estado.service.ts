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

  async update(id: string, updateEstTadoDto: UpdateEstadoDto) {
    const estado = await this.findOne(id);
    if(!estado)
      return null;
    
    return this.prismaService.estado.update({
      where: {id},
      data: updateEstTadoDto
    });
  }

  async remove(id: string) {
    const estado = await this.findOne(id);
    if(!estado)
      return null;
    
    return this.prismaService.estado.delete({
      where: {id}
    });
  }
}
