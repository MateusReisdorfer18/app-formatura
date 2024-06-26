import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReciboDto } from './dto/recibo.dto';

@Injectable()
export class ReciboService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    const recibos = [];
    const recibo = await this.prismaService.recibo.findMany();
    const recibo_formando = await this.prismaService.recibo_formando.findMany();
    
    recibo.forEach((recibo) => {
      const reciboDto = new ReciboDto();
      reciboDto.id = recibo.id;
      reciboDto.comissao_id = recibo.comissao_id;
      reciboDto.turma_id = recibo.turma_id;

      recibo_formando.forEach((recibo) => {
        if(recibo.recibo_id === reciboDto.id)
          reciboDto.formando_id = recibo.formando_id;
      })

      recibos.push(reciboDto);
    })

    return recibos
  }

  findOne(id: string) {
    return this.prismaService.recibo.findUnique({
      where: {id}
    });
  }
}
