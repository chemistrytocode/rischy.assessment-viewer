import React from 'react';
import { Divider, Container, Segment } from 'semantic-ui-react'

import HazardTable from '../../Components/HazardTable/HazardTable';
import PrinterAndStartAgain from '../../Components/PrinterAndStartAgain/PrinterAndStartAgain';
import DisposalRecommendationsTable from '../../Components/DisposalRecommendationsTable/DisposalRecommendationsTable';
import ControlMeasuresTable from '../../Components/ControlMeasuresTable/ControlMeasuresTable';
import EmergencyActionsTable from '../../Components/EmergencyActionsTable/EmergencyActionsTable';
import { riskAssessmentPropTypes } from '../../Constants/proptypes';

const RiskAssessmentPage = ({ riskAssessment }) => {
    const { hazardTableChemicals, controlMeasures, emergencyActions, disposalRecommendations } = riskAssessment;

    return (
        <Segment>
            <Container textAlign='center'>
                <HazardTable hazardChemicals={hazardTableChemicals} />
                <ControlMeasuresTable controlMeasures={controlMeasures} />
                <EmergencyActionsTable emergencyActions={emergencyActions} />
                <DisposalRecommendationsTable disposalRecommendations={disposalRecommendations} />
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