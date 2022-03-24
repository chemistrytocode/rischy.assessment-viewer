import React from 'react'
import { useDispatch } from 'react-redux';
import { Container, Button } from 'semantic-ui-react';

import { submitChemicalsToAssessmentGenerator } from '../../Redux/Actions/chemicalActions';

const SubmitButton = ({ selectedChemicals }) => {
    const dispatch = useDispatch();

    if (selectedChemicals.length < 1) return null;

    const onClick = () => {
        submitChemicalsToAssessmentGenerator(selectedChemicals, dispatch);
    }

    return (
        <Container textAlign='right'>
            <Button positive align="right" size="huge" onClick={onClick}>Submit</Button>
        </Container>
    )
}

export default SubmitButton;