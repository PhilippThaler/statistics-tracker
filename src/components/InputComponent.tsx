import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1em;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #808080;
  background: #282c34;
  border: 2px solid #808080;
  border-radius: 5px;
`;

interface Props {
  label?: string | '';
  inputType?: string | '';
}

const InputComponent: React.FC<Props> = ({ label, inputType }) => (
  <Container>
    <Input placeholder={label} type={inputType} />
  </Container>
);

export default InputComponent;
