import {
  IBookInfo,
  IImageLinks,
  IIndustryIdentifier,
} from "../../../interfaces/IBookInfo";

/// Funções de Ajuste (Auxiliares) para imageLinks e industryIdentifiers

export const adjustImageLinks = (imageLinks: IImageLinks | undefined) => {
  // Verifica se o objeto imageLinks existe e contém os campos necessários
  if (imageLinks && imageLinks.smallThumbnail && imageLinks.thumbnail) {
    return {
      smallThumbnail: imageLinks.smallThumbnail,
      thumbnail: imageLinks.thumbnail,
    };
  } else {
    // Se algum dos campos estiver ausente, retorna null ou um objeto vazio, conforme necessário
    return null;
  }
};

export const adjustIndustryIdentifiers = (
  industryIdentifiers: IIndustryIdentifier[] | undefined
) => {
  // Verifica se a lista de industryIdentifiers existe
  if (industryIdentifiers) {
    // Mapeia os identificadores de indústria para retornar um novo objeto contendo apenas os campos necessários
    return industryIdentifiers.map(
      ({ type, identifier }: IIndustryIdentifier) => ({ type, identifier })
    );
  } else {
    // Se a lista de industryIdentifiers estiver ausente, retorna null ou um array vazio, conforme necessário
    return null;
  }
};

/// Função serializer

const formDataSerializer = (selectedBook: IBookInfo, tab: string) => {
  if (selectedBook) {
    const formData = new FormData();

    // Adicione os campos do livro ao FormData

    selectedBook.autores.forEach((author) => {
      formData.append("autores", author);
    });

    selectedBook.categories?.forEach((category) => {
      formData.append("categories", category);
    });

    if (typeof selectedBook.averageRating === "number") {
      formData.append("averageRating", selectedBook.averageRating.toString());
    }

    formData.append(
      "description",
      selectedBook.description ? selectedBook.description.toString() : ""
    );

    formData.append("idGoogle", selectedBook.IdGoogle);

    if (typeof selectedBook.language === "string") {
      formData.append("language", selectedBook.language);
    }

    if (typeof selectedBook.pageCount === "number") {
      formData.append("pageCount", selectedBook.pageCount.toString());
    }

    if (typeof selectedBook.printType === "string") {
      formData.append("printType", selectedBook.printType);
    }

    if (typeof selectedBook.publishedDate === "string") {
      formData.append("publishedDate", selectedBook.publishedDate);
    }

    if (typeof selectedBook.publisher === "string") {
      formData.append("publisher", selectedBook.publisher);
    }

    if (typeof selectedBook.ratingsCount === "number") {
      formData.append("ratingsCount", selectedBook.ratingsCount.toString());
    }

    if (typeof selectedBook.subtitle === "string") {
      formData.append("subtitle", selectedBook.subtitle);

      formData.append("title", selectedBook.title);
      formData.append("status", tab);
      formData.append("dataInsercao", "");

      const adjustedImageLinks = adjustImageLinks(selectedBook.imageLinks);
      // Adicione os links de imagem ao FormData, se estiverem disponíveis
      if (adjustedImageLinks) {
        const imageLinksString = JSON.stringify(adjustedImageLinks);
        formData.append("imageLinks", imageLinksString);
      }

      if (selectedBook.industryIdentifiers) {
        // Ajuste os identificadores de indústria antes de adicioná-los ao FormData
        const adjustedIdentifiers = adjustIndustryIdentifiers(
          selectedBook.industryIdentifiers
        );

        // Verifica se houve algum ajuste nos identificadores
        if (adjustedIdentifiers) {
          // Adicione os identificadores de indústria ajustados ao FormData
          adjustedIdentifiers.forEach((identifier: unknown) => {
            formData.append("industryIdentifiers", JSON.stringify(identifier));
          });
        }
      }
    }

    return formData;
  }

  return null;
};

export default formDataSerializer;
