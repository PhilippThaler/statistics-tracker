import React from 'react';
import styled from 'styled-components';
import InputComponent from './InputComponent';
import Row from './Row';
import Column from './Column';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 3em;
  border 2px solid grey;
  border-radius: 50px;
`;

const Title = styled.h2`
  color: #808080;
`;

const InputContainer: React.FC = () => {
    return (
        <Container>
            <Title>Rowing Tracker</Title>
            <Row>
                <Column>
                    <InputComponent label="Time" inputType="time" />
                </Column>
                <Column>
                    <InputComponent label="Distance" />
                </Column>
            </Row>
            <Row>
                <Column>
                    <InputComponent label="Count" />
                </Column>
                <Column>
                    <InputComponent label="Calories" />
                </Column>
            </Row>
        </Container>
    );
};

export default InputContainer;
