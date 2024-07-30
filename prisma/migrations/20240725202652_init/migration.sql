-- CreateTable
CREATE TABLE "pedidos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "razaoSocial" TEXT NOT NULL,
    "cpfCnpj" TEXT NOT NULL,
    "pj" BOOLEAN,
    "quantidadeDiarias" INTEGER NOT NULL,
    "nomeEdificio" TEXT NOT NULL,
    "moradorDoEdificio" BOOLEAN NOT NULL,
    "pedidoId" TEXT NOT NULL,
    "dataPedido" TIMESTAMP(3) NOT NULL,
    "dataPublicacao" TIMESTAMP(3) NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pedidos_pkey" PRIMARY KEY ("id")
);
