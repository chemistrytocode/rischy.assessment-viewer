import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Container, Button } from 'semantic-ui-react';

import { generateRiskAssessment } from '../../Redux/Actions/riskAsessmentActions';
import { selectedChemicalsPropTypes } from '../../Constants/proptypes';

const SubmitButton = ({ selectedChemicals }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    if (selectedChemicals.length < 1) return null;

    const onClick = async () => {
        setLoading(true);
        await generateRiskAssessment(selectedChemicals, dispatch);
    }

    return (
        <Container textAlign='right'>
            <Button
                positive
                align="right"
                size="huge"
                loading={loading}
                onClick={onClick}>
                Submit
            </Button>
        </Container>
    )
}

SubmitButton.propTypes = {
    selectedChemicals: selectedChemicalsPropTypes.isRequired,
};

export default SubmitButton;