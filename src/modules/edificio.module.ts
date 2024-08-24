import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { EdificioController } from "src/controllers/edificios.controller";
import { EdificioService } from "src/service/edificio.service";

@Module({
  controllers: [EdificioController],
  providers: [EdificioService, PrismaService],
})
export class EdificioModule {}
