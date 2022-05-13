import styled from 'styled-components';

export const Button = styled.button`
  color: palevioletred;
  height: 100%;
  width: 4em;
  background-color: black;
  border: 1px;
  border-radius: 0 13px 13px 0;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.colors.main};
  }
`;

export const Form = styled.form`
  display: flex;
  width: 87%;
  max-width: 600px;
`;

export const SearchBar = styled.input`
  box-sizing: border-box;
  font-size: 15px;
  width: 100%;
  height: 4em;
  padding-left: 1em;
  border: 1px solid;
  border-radius: 13px 0 0 13px;
  :required {
    border-color: ${(props) => props.theme.colors.secondary};
  }
  :required:valid {
    border: 2px solid green;
  }
  :focus {
    outline: none;
  }
  :focus:invalid {
    border: 3px solid;
    border-color: red;
  }
`;
