import React from 'react';
import { Container, Segment } from 'semantic-ui-react'

import HazardTable from '../../Components/HazardTable/HazardTable';
import ControlMeasuresAndEmergencyActions from '../../Components/ControlMeasuresAndEmergencyActions/ControlMeasuresAndEmergencyActions';
import PrinterAndStartAgain from '../../Components/PrinterAndStartAgain/PrinterAndStartAgain';


const RiskAssessmentPage = () => (
    <Segment>
        <Container textAlign='center'>
            <HazardTable />
            <ControlMeasuresAndEmergencyActions />
            <PrinterAndStartAgain />
        </Container>
    </Segment>
);

export default RiskAssessmentPage;