import styled from "styled-components"

const Button = styled.button`
  font-weight: 400;
  font-size: 14px;
  width: 100%;
  display: block;
  text-align: center;
  height: 100%;
  padding: 8px 16px;
  background-color: #292929;
  border: none;
  cursor: pointer;
  color: #fff;
  box-sizing: border-box;
  justify-content: center;
  margin: 0 auto;
  max-width: 180px;
  &:visited, :active, :focus, :hover{
    background-color: #464545;
    text-decoration: none;
  }
  &:disabled{
    background-color: #d5d5d5;
    color: #292929;
  }
`

export default Button