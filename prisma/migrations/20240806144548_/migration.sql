/*
  Warnings:

  - The primary key for the `edificios` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "edificios" DROP CONSTRAINT "edificios_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "edificios_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "edificios_id_seq";
