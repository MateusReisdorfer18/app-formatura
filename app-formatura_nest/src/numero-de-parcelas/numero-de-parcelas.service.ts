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

  async update(id: string, updateNumeroDeParcelaDto: UpdateNumeroDeParcelaDto) {
    const numeroDeParcelas = await this.findOne(id);
    if(!numeroDeParcelas)
      return null;
    
    return this.prismaService.numero_de_parcelas.update({
      where: {id},
      data: updateNumeroDeParcelaDto
    });
  }

  async remove(id: string) {
    const numeroDeParcelas = await this.findOne(id);
    if(!numeroDeParcelas)
      return null;
    
    return this.prismaService.numero_de_parcelas.delete({
      where: {id}
    });
  }
}
