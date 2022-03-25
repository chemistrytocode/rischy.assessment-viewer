import React from 'react';
import { useDispatch } from 'react-redux';
import { Message, Button } from 'semantic-ui-react';

import { clearRiskAssessment } from '../../Redux/Actions/riskAsessmentActions';
import { clearChemicalsFromSelection } from '../../Redux/Actions/chemicalActions';

const StartAgain = () => {
    const dispatch = useDispatch();
    
    const handleOnClick = () => {
        clearRiskAssessment(dispatch);
        clearChemicalsFromSelection(dispatch);
    };

    return (
        <>
            <Message
                attached
                icon="arrow alternate circle left outline"
                header='Want to create another risk assessment?'
                content='Click on the Start again button below'
            />
            <Button
                color='grey'
                content="Start again"
                icon='arrow alternate circle left outline'
                size="massive"
                fluid
                onClick={handleOnClick}
            />
        </>
    )
}

export default StartAgain;