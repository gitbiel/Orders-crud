import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class EdificioService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.edificio.findMany();
  }

  async findById(id: string) {
    const edificio = this.prisma.edificio.findUnique({
      where: { id },
    });
    if (!edificio) {
      throw new NotFoundException(`Prédio com ${id} não encontrado`);
    }
    return edificio;
  }
}
