import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReciboDto } from './dto/recibo.dto';
import { CreateReciboDto } from './dto/create-recibo.dto';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class ReciboService {
  constructor(private prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.recibo.findMany();  
  }

  findOne(id: string, formando_id: string) {
    return this.prismaService.recibo.findUnique({
      where: {id, formandoId: formando_id}
    });
  }

  create(createReciboDto: CreateReciboDto) {
    return this.prismaService.recibo.create({
      data: createReciboDto
    })
  }
}
