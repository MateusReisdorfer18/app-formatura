import { Injectable } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServicoDto } from './dto/servico.dto';
import { evento_servico, servico } from '@prisma/client';

@Injectable()
export class EventoService {
  constructor(private prismaService: PrismaService) {}

  create(createEventoDto: CreateEventoDto) {
    return this.prismaService.evento.create({
      data: {
        ...createEventoDto,
        data: new Date(createEventoDto.data)
      }
    });
  }

  async addServico(servico_id: string, evento_id: string) {
    const evento = await this.findOne(evento_id);

    const servico = await this.prismaService.servico.findUnique({
      where: {
        id: servico_id
      }
    })

    if(!evento || !servico)
      return null;

    return this.prismaService.evento_servico.create({
      data: {
        servico_id,
        evento_id
      }
    })
  }

  findAll() {
    return this.prismaService.evento.findMany();
  }

  async findAllServicos(evento_id: string) {
    const evento = await this.findOne(evento_id);

    if(!evento)
      return null;

    return this.prismaService.evento_servico.findMany({
      where: {
        evento_id
      }
    });
  }

  async findServicoByNome(evento_id: string, servico: ServicoDto) {
    const eventoServico = await this.prismaService.evento_servico.findUnique({
      where: {
        evento_id_servico_id: {
          evento_id,
          servico_id: servico.servico_id
        }
      }
    })

    if(!eventoServico)
      return null;

    return this.prismaService.servico.findUnique({
      where: {
        id: servico.servico_id,
        empresa: servico.nome_servico
      }
    });
  }

  async findServico(evento_id: string, servico_id: string) {
    const eventoServico = await this.prismaService.evento_servico.findUnique({
      where: {
        evento_id_servico_id: {
          evento_id,
          servico_id
        }
      }
    });

    if(!eventoServico)
      return null;

    return this.prismaService.servico.findUnique({
      where: {
        id: servico_id
      }
    });
  }

  findOne(id: string) {
    return this.prismaService.evento.findUnique({
      where: {id}
    });
  }

  async update(id: string, updateEventoDto: UpdateEventoDto) {
    const evento = await this.findOne(id);
    if(!evento)
      return null;
    
    return this.prismaService.evento.update({
      where: {id},
      data: updateEventoDto
    });
  }

  async remove(id: string) {
    const evento = await this.findOne(id);
    if(!evento)
      return null;
    
    return this.prismaService.evento.delete({
      where: {id}
    });
  }

  removeServico(evento_id: string, servico_id: string) {
    return this.prismaService.evento_servico.delete({
      where: {
        evento_id_servico_id: {
          evento_id,
          servico_id
        }
      }
    })
  }
}
