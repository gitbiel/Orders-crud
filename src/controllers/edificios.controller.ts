import { Controller, Get, Param } from "@nestjs/common";
import { EdificioService } from "src/service/edificio.service";

@Controller("edificios")
export class EdificioController {
  constructor(private readonly edificioService: EdificioService) {}

  @Get()
  async findAll() {
    return this.edificioService.findAll();
  }

  @Get(":id")
  async findById(@Param(":id") id: string) {
    return this.edificioService.findById(id)
  }
}
