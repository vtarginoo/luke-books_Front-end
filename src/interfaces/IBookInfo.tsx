export interface IIndustryIdentifier {
  type: string;
  identifier: string;
}

export interface IImageLinks {
  smallThumbnail?: string | undefined;
  thumbnail?: string | undefined;
}

export interface IBookInfo {
  id?: number;
  IdGoogle: string;
  title: string;
  subtitle?: string;
  autores: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  industryIdentifiers?: IIndustryIdentifier[];
  pageCount?: number;
  printType?: string;
  categories?: string[];
  averageRating?: number;
  ratingsCount?: number;
  imageLinks?: IImageLinks;
  language?: string;
  status?: string | undefined;
}
