import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
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
  
    const CpfJaExiste = await this.prisma.pedido.findFirst({
      where: { cpfCnpj: createPedidoDto.cpfCnpj },
    });
  
    if (CpfJaExiste) {
      throw new ConflictException('CPF/CNPJ já cadastrado.');
    }
  
    const dataPedido = new Date();
  
    const doisDiasEmMilissegundos = 3600000 * 24 * 2;
    const dataPublicacao = new Date(dataPedido.getTime() + doisDiasEmMilissegundos);
  
    return this.prisma.pedido.create({
      data: {
        nome: createPedidoDto.nome,
        razaoSocial: createPedidoDto.razaoSocial,
        cpfCnpj: createPedidoDto.cpfCnpj,
        pj: createPedidoDto.pj,
        quantidadeDiarias: createPedidoDto.quantidadeDiarias,
        nomeEdificio: createPedidoDto.nomeEdificio,
        moradorDoEdificio: createPedidoDto.moradorDoEdificio,
        dataPedido,
        dataPublicacao,
      },
    });
  }
}