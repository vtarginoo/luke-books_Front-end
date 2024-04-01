import { atom } from "recoil";
import { INavItem } from "../../interfaces/INavItem";

export const listaNavItens = atom<INavItem[]>({
  key: "listaNavItensState",
  default: [
    {
      key: 1,
      label: "Reader Hub",
      path: "/hub",
    },
    {
      key: 2,
      label: "Pesquisar Livros",
      path: "/pesquisa",
    },
  ],
});
