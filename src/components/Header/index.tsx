import { useEffect, useState } from 'react';
import apiConfig from '../../config/apiConfig';
import { Data } from '../../types/Data';
import ButtonStyled from '../shared/ButtonStyled';
import FlexContainerStyled from '../shared/FlexContainerStyled';
import FormStyled from './FormStyled';

interface HeaderProps {
  atualizarDataBase: (paramet: Data[]) => void;
}

function Header({ atualizarDataBase }: HeaderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    async function postList() {
      if (!file) {
        console.log('Nenhum arquivo selecionado');
        return;
      }

      try {
        const formData = new FormData();
        formData.append('arquivo', file, file.name); // Passar o arquivo e o nome do arquivo

        const response = await apiConfig.post('/validar', formData);
        console.log(response);

        atualizarDataBase(response.data.data);
      } catch (error) {
        console.error('Erro ao enviar o arquivo:', error);
      } finally {
        setIsLoading(false);
      }
    }

    if (isLoading) {
      postList();
    }
  }, [isLoading, file, atualizarDataBase]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  }

  function handleButtonClick() {
    if (file) {
      setIsLoading(true);
    } else {
      console.log('Selecione um arquivo antes de enviar.');
    }
  }

  return (
    <FlexContainerStyled modo="header">
      <FormStyled>
        <label htmlFor="fileInput" className="custom-file-upload">
          Escolha um arquivo
        </label>

        <input
          type="file"
          id="fileInput"
          name="arquivo"
          style={{ display: 'none' }}
          onChange={handleFileChange}
          accept=".csv"
        />

        <span>{file ? file.name : '...'}</span>

        <ButtonStyled type="button" disabled={!file} disabledstyled={!file} onClick={handleButtonClick}>
          Verificar
        </ButtonStyled>
      </FormStyled>
    </FlexContainerStyled>
  );
}

export default Header;
