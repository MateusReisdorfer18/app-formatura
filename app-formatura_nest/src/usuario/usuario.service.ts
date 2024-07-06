import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioLoginDto } from './dto/usuario-login.dto';

@Injectable()
export class UsuarioService {
  constructor(private prismaService: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuarioExist = await this.prismaService.usuario.findFirst({
      where: {
        login: createUsuarioDto.login
      }
    })

    if(usuarioExist)
      return;
    
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

  async findByLoginAndSenha(usuarioLogin: UsuarioLoginDto) {
    return this.prismaService.usuario.findFirst({
      where: {
        login: usuarioLogin.login,
        senha: usuarioLogin.senha
      }
    })
  }

  findAllRecibos(usuario_id: string) {
    return this.prismaService.recibo.findMany({
      where: {
        formando_id: usuario_id
      }
    })
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
      return false;

    await this.prismaService.usuario.delete({
      where: {id}
    });
    
    return true;
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
