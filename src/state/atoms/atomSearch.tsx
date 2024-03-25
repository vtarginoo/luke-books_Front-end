import { atom } from "recoil";
import { IBookInfo } from "../../interfaces/IBookInfo"; // Importe a interface IBookInfo, se necessário

export const ListaPesquisaState = atom<IBookInfo[]>({
  key: "ListaPesquisaState",
  default: [],
});

export const SelectedBookState = atom<IBookInfo | null>({
  key: "selectedBook",
  default: null,
});
