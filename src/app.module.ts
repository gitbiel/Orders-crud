import { Module } from '@nestjs/common';
import { PedidoModule } from './modules/pedidos.module';

@Module({
  imports: [PedidoModule],
})
export class AppModule {}
