import React from 'react'
import { useDispatch } from 'react-redux';
import { Container, Button } from 'semantic-ui-react';

import { generateRiskAssessment } from '../../Redux/Actions/riskAsessmentActions';
import { selectedChemicalsPropTypes } from '../../Constants/proptypes';

const SubmitButton = ({ selectedChemicals }) => {
    const dispatch = useDispatch();

    if (selectedChemicals.length < 1) return null;

    const onClick = () => {
        generateRiskAssessment(selectedChemicals, dispatch);
    }

    return (
        <Container textAlign='right'>
            <Button positive align="right" size="huge" onClick={onClick}>Submit</Button>
        </Container>
    )
}

SubmitButton.propTypes = {
    selectedChemicals: selectedChemicalsPropTypes.isRequired,
};

export default SubmitButton;