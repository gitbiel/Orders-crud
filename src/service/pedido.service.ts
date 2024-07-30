import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePedidoDto, CreatePedidoDtoType } from 'src/dto/create-pedido.dto';

@Injectable()
export class PedidoService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.pedido.findMany();
  }

  async findById(id: string) {
    const pedido = await this.prisma.pedido.findUnique({
      where: { id },
    });
    if (!pedido) {
      throw new NotFoundException(`Pedido com id ${id} não encontrado.`);
    }
    return pedido;
  }

  async delete(id: string) {
    const pedido = await this.prisma.pedido.findUnique({
      where: { id },
    });
    if (!pedido) {
      throw new NotFoundException(`Pedido com id ${id} não encontrado.`);
    }
    await this.prisma.pedido.delete({
      where: { id },
    });
    return { message: 'Pedido deletado com sucesso.' };
  }

  async create(createPedidoDto: CreatePedidoDtoType) {
    try {
      CreatePedidoDto.parse(createPedidoDto);
    } catch (error) {
      throw new BadRequestException(error.errors);
    }

    return this.prisma.pedido.create({
      data: {
        nome: createPedidoDto.nome,
        razaoSocial: createPedidoDto.razaoSocial,
        cpfCnpj: createPedidoDto.cpfCnpj,
        pj: createPedidoDto.pj,
        quantidadeDiarias: createPedidoDto.quantidadeDiarias,
        nomeEdificio: createPedidoDto.nomeEdificio,
        moradorDoEdificio: createPedidoDto.moradorDoEdificio,
        pedidoId: createPedidoDto.pedidoId,
        dataPedido: createPedidoDto.dataPedido,
        dataPublicacao: createPedidoDto.dataPublicacao,
        criadoEm: new Date(),
      },
    });
  }


}