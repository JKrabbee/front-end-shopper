import styled, { css } from 'styled-components';

interface FlexContainerStyledProps {
  modo: 'header' | 'content';
  rowReverse?: boolean;
}

const FlexContainerStyled = styled.div<FlexContainerStyledProps>`
  display: flex;
  margin: auto;

  flex-wrap: wrap;
  gap: 10px;
  width: 100%;

  ${(props) => {
    switch (props.modo) {
      case 'header':
        return css`
          justify-content: center;
          height: 100px;
          background-color: #1e2044;

          @media (max-width: 768px) {
            flex-direction: column;

            height: 200px;
          }
        `;

      case 'content':
        return css`
          height: calc(100vh - 190px);
          align-items: center;
          justify-content: center;
          flex-direction: column;

          @media (max-width: 1024px) {
            height: auto;
            margin: 45px auto;

            flex-direction: column;

            text-align: center;
          }
        `;
      default:
    }
  }}
`;

export default FlexContainerStyled;
