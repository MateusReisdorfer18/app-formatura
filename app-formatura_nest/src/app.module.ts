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
import { NumeroDeParcelasModule } from './numero-de-parcelas/numero-de-parcelas.module';
import { ParcelaModule } from './parcela/parcela.module';
import { ReciboModule } from './recibo/recibo.module';

@Module({
  imports: [PrismaModule, EstadoModule, TipoServicoModule, UsuarioModule, TurmaModule, ServicoModule, EventoModule, NumeroDeParcelasModule, ParcelaModule, ReciboModule],
  controllers: [AppController, EstadoController],
  providers: [AppService, EstadoService],
})
export class AppModule {}
