import { z } from 'zod';

export const CreatePedidoDto = z.object({
  nome: z.string().min(1, { message: 'O nome deve ter pelo menos 1 caractere.' }).max(255, { message: 'O nome deve ter no máximo 255 caracteres.' }),
  razaoSocial: z.string().min(1, { message: 'A razão social deve ter pelo menos 1 caractere.' }).max(255, { message: 'A razão social deve ter no máximo 255 caracteres.' }),
  cpfCnpj: z.string().min(11, { message: 'O CPF/CNPJ deve ter pelo menos 11 caracteres.' }).max(14, { message: 'O CPF/CNPJ deve ter no máximo 14 caracteres.' }),
  pj: z.boolean().nullable(),
  quantidadeDiarias: z.number().min(1, { message: 'A quantidade de diárias deve ser pelo menos 1.' }).max(30, { message: 'A quantidade de diárias deve ser no máximo 30.' }),
  nomeEdificio: z.string().optional(),
  moradorDoEdificio: z.boolean(),
  pedidoId: z.string().uuid().optional(),
  dataPedido: z.coerce.date(),
  dataPublicacao: z.coerce.date(),
});

export type CreatePedidoDtoType = z.infer<typeof CreatePedidoDto>;

