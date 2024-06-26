import { Injectable } from '@nestjs/common';
import { CreateNumeroDeParcelaDto } from './dto/create-numero-de-parcela.dto';
import { UpdateNumeroDeParcelaDto } from './dto/update-numero-de-parcela.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NumeroDeParcelasService {
  constructor(private prismaService: PrismaService) {}

  create(createNumeroDeParcelaDto: CreateNumeroDeParcelaDto) {
    return this.prismaService.numero_de_parcelas.create({
      data: createNumeroDeParcelaDto
    });
  }

  findAll() {
    return this.prismaService.numero_de_parcelas.findMany();
  }

  findOne(id: string) {
    return this.prismaService.numero_de_parcelas.findUnique({
      where: {id}
    });
  }

  update(id: string, updateNumeroDeParcelaDto: UpdateNumeroDeParcelaDto) {
    return this.prismaService.numero_de_parcelas.update({
      where: {id},
      data: updateNumeroDeParcelaDto
    });
  }

  remove(id: string) {
    return this.prismaService.numero_de_parcelas.delete({
      where: {id}
    });
  }
}
