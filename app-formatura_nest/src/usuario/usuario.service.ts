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

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const aluno = await this.findOne(id);
    if(!aluno)
      return null;

    return this.prismaService.usuario.update({
      where: {id},
      data: updateUsuarioDto
    });
  }

  async updateSenha(id: string, senha: string) {
    const aluno = await this.findOne(id);

    if(!aluno)
      return null;

    return this.prismaService.usuario.update({
      where: {id},
      data: {
        senha: senha
      }
    })
  }

  async remove(id: string) {
    const aluno = await this.findOne(id);
    if(!aluno)
      return null;

    return this.prismaService.usuario.delete({
      where: {id}
    });
  }

  async closeConta(id: string) {
    const aluno = this.findOne(id);
    if(!aluno)
      return false;

    await this.prismaService.usuario.update({
      where: {id},
      data: {
        status: false
      }
    })

    return true
  }
}
