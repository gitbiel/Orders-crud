import { Module } from '@nestjs/common';
import { PedidoModule } from './modules/pedidos.module';
import { EdificioModule } from './modules/edificio.module';

@Module({
  imports: [PedidoModule, EdificioModule],
})
export class AppModule {}
