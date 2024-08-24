-- CreateTable
CREATE TABLE "edificios" (
    "id" SERIAL NOT NULL,
    "nomeEdificio" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "edificios_pkey" PRIMARY KEY ("id")
);
