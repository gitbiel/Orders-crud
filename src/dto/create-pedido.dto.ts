import { z } from "zod";

export const CreatePedidoDto = z.object({
  nome: z
    .string({
      required_error: "Campo nome é obrigatório",
    })
    .min(1, { message: "O nome deve ter pelo menos 1 caractere." })
    .max(50, { message: "O nome deve ter no máximo 50 caracteres." }),
  razaoSocial: z
    .string({
      required_error: "Campo razaoSocial é obrigatório",
    })
    .min(1, { message: "A razão social deve ter pelo menos 1 caractere." })
    .max(50, {
      message: "A razão social deve ter no máximo 50 caracteres.",
    }),
  cpfCnpj: z
    .string({
      required_error: "Campo cpfCnpj é obrigatório",
    })
    .regex(/^\d{11}$|^\d{14}$/, {
      message: "O CPF/CNPJ deve ter 11 ou 14 caracteres numéricos.",
    }),
  pj: z
    .boolean({
      required_error: "Campo pj é obrigatório",
    })
    .nullable(),
  quantidadeDiarias: z
    .number({
      required_error: "Campo quantidadeDiarias é obrigatório",
    })
    .min(1, { message: "A quantidade de diárias deve ser pelo menos 1." })
    .max(30, { message: "A quantidade de diárias deve ser no máximo 30." }),
  nomeEdificio: z
    .string({
      required_error: "O campo nomeEdificio é obrigatório",
    })
    .optional(),
  moradorDoEdificio: z.boolean({
    required_error: "O Campo moradorDoEdificio é obrigatório",
  }),
});

export type CreatePedidoDtoType = z.infer<typeof CreatePedidoDto>;
