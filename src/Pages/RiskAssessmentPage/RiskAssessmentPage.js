import React from 'react';
import { useSelector } from 'react-redux';
import { Divider, Container, Segment } from 'semantic-ui-react'

import HazardTable from '../../Components/HazardTable/HazardTable';
import ControlMeasuresAndEmergencyActions from '../../Components/ControlMeasuresAndEmergencyActions/ControlMeasuresAndEmergencyActions';
import PrinterAndStartAgain from '../../Components/PrinterAndStartAgain/PrinterAndStartAgain';

const RiskAssessmentPage = () => {

    const riskAssessment = useSelector(state => state.riskAssessment);

    if(Object.keys(riskAssessment) < 1) return null;

    const { hazardTableChemicals, controlMeasures, emergencyActions } = riskAssessment;

    return (
        <Segment>
            <Container textAlign='center'>
                <HazardTable hazardChemicals={hazardTableChemicals} />
                <ControlMeasuresAndEmergencyActions controlMeasures={controlMeasures} emergencyActions={emergencyActions}  />
                <Divider inverted />
                <PrinterAndStartAgain />
            </Container>
        </Segment>
    )
}

export default RiskAssessmentPage;