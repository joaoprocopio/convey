import type { LucideIcon } from "lucide-vue-next";
import { CircleCheckBig, CircleDashed, RefreshCw } from "lucide-vue-next";

import type { TEnum } from "~/lib/enums/types";

export type TShowStatus = "pendente" | "processando" | "concluido";

export type TShow = {
  id: number;
  thumbnail_url: string;
  periodo_start_thumbnail_url: string;
  periodo_end_thumbnail_url: string;
  periodo_start_at: string;
  periodo_end_at: string;
  created_at: string;
  updated_at: string;
  status: TShowStatus;
};

export const ShowStatus = {
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
} as const satisfies TEnum<TShowStatus, { icon: LucideIcon; title: string }>;
