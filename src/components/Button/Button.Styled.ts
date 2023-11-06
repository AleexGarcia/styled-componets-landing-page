import styled from "styled-components";

export const Button = styled.button`
  padding: 12px 24px;
  color: ${(props) => props.theme.colors.white};
  border: none;
  font-weight: bold;
  border-radius: 2.5rem;
  position: relative;
  background: linear-gradient(
      to left,
      ${(props) => props.theme.colors.brightCyan},
      ${(props) => props.theme.colors.limeGreen}
    ),
    white;
  transition: ease 0.2s;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;
