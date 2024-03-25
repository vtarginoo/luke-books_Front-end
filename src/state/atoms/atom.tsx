import { atom } from "recoil";
import { IBookInfo } from "../../interfaces/IBookInfo.tsx";

export const bookListState = atom<IBookInfo[]>({
  key: "BookListState",
  default: [],
});
