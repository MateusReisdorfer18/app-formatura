import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { EstadoService } from './estado/estado.service';
import { EstadoController } from './estado/estado.controller';
import { EstadoModule } from './estado/estado.module';
import { TipoServicoModule } from './tipo-servico/tipo-servico.module';
import { UsuarioModule } from './usuario/usuario.module';
import { TurmaModule } from './turma/turma.module';
import { ServicoModule } from './servico/servico.module';
import { EventoModule } from './evento/evento.module';

@Module({
  imports: [PrismaModule, EstadoModule, TipoServicoModule, UsuarioModule, TurmaModule, ServicoModule, EventoModule],
  controllers: [AppController, EstadoController],
  providers: [AppService, EstadoService],
})
export class AppModule {}
