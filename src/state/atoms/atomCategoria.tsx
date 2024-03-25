import { atom } from "recoil";
import { ICategoria } from "../../interfaces/ICategoria";

export const listaCategoria = atom<ICategoria[]>({
  key: "listaCategoriaState",
  default: [
    {
      key: "1",
      tab: "Lendo",
      ativo: false,
    },
    {
      key: "2",
      tab: "Quero Ler",
      ativo: false,
    },
    {
      key: "3",
      tab: "Lido",
      ativo: false,
    },
    {
      key: "4",
      tab: "Parei de Ler",
      ativo: false,
    },
  ],
});
