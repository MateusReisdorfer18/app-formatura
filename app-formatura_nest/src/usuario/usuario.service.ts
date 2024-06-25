import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuarioService {
  constructor(private prismaService: PrismaService) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    return this.prismaService.usuario.create({
      data: createUsuarioDto
    });
  }

  findAll() {
    return this.prismaService.usuario.findMany();
  }

  findOne(id: string) {
    return this.prismaService.usuario.findUnique({
      where: {id}
    });
  }

  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return this.prismaService.usuario.update({
      where: {id},
      data: updateUsuarioDto
    });
  }

  remove(id: string) {
    return this.prismaService.usuario.delete({
      where: {id}
    });
  }
}