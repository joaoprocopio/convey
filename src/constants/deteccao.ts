import { CircleCheckBig, CircleDashed, RefreshCw } from "lucide-vue-next";

import type { UIEnum } from "~/lib/enums/types";

export type TDeteccaoStatus = "pendente" | "processando" | "concluido";

export type TDeteccao = {
  id: number;
  thumbnail_url: string;
  periodo_start_thumbnail_url: string;
  periodo_end_thumbnail_url: string;
  periodo_start_at: string;
  periodo_end_at: string;
  created_at: string;
  updated_at: string;
  status: TDeteccaoStatus;
};

export const DeteccaoStatus = {
  concluido: {
    icon: CircleCheckBig,
    title: "Concluído",
    value: "concluido",
  },
  processando: {
    icon: RefreshCw,
    title: "Processando",
    value: "processando",
  },
  pendente: {
    icon: CircleDashed,
    title: "Pendente",
    value: "pendente",
  },
} as const satisfies UIEnum<TDeteccaoStatus>;
