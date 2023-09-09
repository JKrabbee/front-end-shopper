import { useEffect, useState } from 'react';
import apiConfig from '../../config/apiConfig';
import { Data } from '../../types/Data';
import ButtonStyled from '../shared/ButtonStyled';
import FlexContainerStyled from '../shared/FlexContainerStyled';
import Table from './Table';

interface ContentProps {
  dataBase: Data[];
}

function Content(props: ContentProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    props.dataBase.forEach((item) => {
      if (item.status !== 'OK') {
        setIsError(true);
      } else {
        setIsError(false);
      }
    });
  }, [props.dataBase]);

  useEffect(() => {
    async function postList() {
      try {
        const response = apiConfig.post('/atualizar-precos');
        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (isLoading) {
      postList();
    }
  }, [isLoading]);

  function handleButtonClick() {
    setIsLoading(true);
  }

  return (
    <FlexContainerStyled modo="content">
      <Table data={props.dataBase} />
      <ButtonStyled
        disabled={!props.dataBase.length || isError}
        disabledstyled={!props.dataBase.length || isError}
        onClick={() => handleButtonClick}
      >
        Enviar
      </ButtonStyled>
    </FlexContainerStyled>
  );
}

export default Content;
