import { Button, Input, Select, Space } from "antd";

import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

const options = [
  {
    value: "Autor",
    label: "Autor",
  },
  {
    value: "Título",
    label: "Título",
  },
  {
    value: "ISBN",
    label: "ISBN",
  },
];

interface BarraPesquisaProps {
  onSearch: (type: string, value: string) => void;
}

const BarraPesquisa: React.FC<BarraPesquisaProps> = ({ onSearch }) => {
  const [searchType, setSearchType] = useState("Autor");
  const [searchValue, setSearchValue] = useState("");

  // Função para lidar com a pesquisa quando o botão é clicado
  const handleSearch = () => {
    // Chama a função de retorno de chamada passando o tipo e valor de pesquisa
    onSearch(searchType, searchValue);
  };

  return (
    <>
      <Space.Compact>
        <Select
          defaultValue="Autor"
          options={options}
          style={{ width: 80 }}
          // Atualiza o estado local com o tipo de pesquisa selecionado
          onChange={(value) => setSearchType(value)}
        />
        <Input
          placeholder="Pesquise por Autor, Título ou ISBN"
          style={{ width: 280 }}
          // Atualiza o estado local com o valor de pesquisa inserido pelo usuário
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button
          type="primary"
          icon={<SearchOutlined />}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Space.Compact>
    </>
  );
};

export default BarraPesquisa;
