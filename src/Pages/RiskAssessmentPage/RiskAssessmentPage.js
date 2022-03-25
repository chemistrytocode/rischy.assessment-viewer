import React from 'react';
import { Divider, Container, Segment } from 'semantic-ui-react'

import HazardTable from '../../Components/HazardTable/HazardTable';
import ControlMeasuresAndEmergencyActions from '../../Components/ControlMeasuresAndEmergencyActions/ControlMeasuresAndEmergencyActions';
import PrinterAndStartAgain from '../../Components/PrinterAndStartAgain/PrinterAndStartAgain';
import { riskAssessmentPropTypes } from '../../Constants/proptypes';

const RiskAssessmentPage = ({ riskAssessment }) => {
    const { hazardTableChemicals, controlMeasures, emergencyActions } = riskAssessment;

    return (
        <Segment>
            <Container textAlign='center'>
                <HazardTable hazardChemicals={hazardTableChemicals} />
                <ControlMeasuresAndEmergencyActions controlMeasures={controlMeasures} emergencyActions={emergencyActions} />
                <Divider inverted />
                <PrinterAndStartAgain />
            </Container>
        </Segment>
    )
}

RiskAssessmentPage.propTypes = {
    riskAssessment: riskAssessmentPropTypes.isRequired,
  };

export default RiskAssessmentPage;