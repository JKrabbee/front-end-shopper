import { styled } from 'styled-components';

interface ButtonStyledProps {
  disabledstyled?: boolean;
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  padding: 9px;
  color: #fff;
  font-weight: 700;
  width: 200px;
  border: ${(props) => (props.disabledstyled ? '1px solid #b4b4b4' : '1px solid #0dab77')};
  border-radius: 6px;
  background: ${(props) => (props.disabledstyled ? '#b4b4b4' : '#0dab77')};
  cursor: ${(props) => (props.disabledstyled ? 'not-allowed' : 'pointer')};
  transition: all 0.5s;

  &:hover {
    font-weight: 900;
    transform: scale(1.05);
  }
`;

export default ButtonStyled;
