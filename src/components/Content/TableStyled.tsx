import { styled } from 'styled-components';

interface TrStyledProps {
  errorRow?: boolean;
}

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 75%;

  th {
    background-color: #1e2044;
    color: #fff;
    padding: 10px;
    text-align: left;
  }

  td {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
`;

const TrStyled = styled.tr<TrStyledProps>`
  color: ${(props) => (props.errorRow ? '#ff0000' : 'black')};
`;

export { StyledTable, TrStyled };
