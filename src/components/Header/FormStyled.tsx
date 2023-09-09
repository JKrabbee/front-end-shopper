import styled from 'styled-components';

const FormStyled = styled.form`
  display: flex;
  align-items: center;
  label {
    display: flex;
    justify-content: center;
    padding: 9px;
    color: #fff;
    font-weight: 700;
    width: 200px;
    border: 1px solid #0dab77;
    border-radius: 6px;
    background: transparent;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      font-weight: 900;
      transform: scale(1.05);
    }
  }
  span {
    display: flex;
    justify-content: start;

    max-width: 200px;
    width: 200px;

    padding: 7px;
    color: #fff;
    font-weight: 700;

    overflow-x: scroll;
    margin: 0 20px;

    /* Estilizando a barra de rolagem */
    &::-webkit-scrollbar {
      height: 5px;
    }

    /* Estilizando o polegar da barra de rolagem */
    &::-webkit-scrollbar-thumb {
      background-color: #0dab77;
      border-radius: 4px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    justify-content: space-between;
    gap: 20px;
  }
`;

export default FormStyled;
