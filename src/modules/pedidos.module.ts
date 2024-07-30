// src/modules/pedido.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PedidoController } from 'src/controllers/pedidos.controller';
import { PedidoService } from 'src/service/pedido.service';

@Module({
  controllers: [PedidoController],
  providers: [PedidoService, PrismaService],
})
export class PedidoModule {}
