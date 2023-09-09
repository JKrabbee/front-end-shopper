import { Data } from '../../types/Data';
import { StyledTable, TrStyled } from './TableStyled';

interface TableProps {
  data: Data[];
}

function Table(props: TableProps) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>ID</th>
          <th>Produto</th>
          <th>Novo Preço</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {props.data.length === 0 ? (
          <tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
        ) : (
          props.data.map((row) => (
            <TrStyled key={row.product_code} errorRow={row.status !== 'OK' ? true : false}>
              <td>{row.product_code}</td>
              <td>{row.product_name}</td>
              <td>R${row.new_price}</td>
              <td>{row.status}</td>
            </TrStyled>
          ))
        )}
      </tbody>
    </StyledTable>
  );
}

export default Table;
