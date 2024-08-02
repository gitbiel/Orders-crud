import { Controller, Get, Post, Delete, Body, Param } from "@nestjs/common";
import { PedidoService } from "src/service/pedido.service";
import { CreatePedidoDtoType } from "../dto/create-pedido.dto";

@Controller("pedidos")
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Get()
  async findAll() {
    return this.pedidoService.findAll();
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    return this.pedidoService.findById(id);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.pedidoService.delete(id);
  }

  @Post()
  async create(@Body() createPedidoDto: CreatePedidoDtoType) {
    
    return this.pedidoService.create(createPedidoDto);
  }
}