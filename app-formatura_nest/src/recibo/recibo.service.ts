import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReciboService {
  constructor(private prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.recibo.findMany();  
  }

  findOne(id: string, formando_id: string) {
    return this.prismaService.recibo.findUnique({
      where: {id, formando_id: formando_id}
    });
  }

  delete(id: string) {
    return this.prismaService.recibo.delete({
      where: {id}
    })
  }
}
