import React from 'react';
import { Header, Divider, Container, Segment } from 'semantic-ui-react'

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
                <Header as='h1' className="Title">Risk Assessment</Header>
                <HazardTable hazardChemicals={hazardTableChemicals} />
                <Divider className="pagebreak" />
                <ControlMeasuresTable controlMeasures={controlMeasures} />
                <Divider className="pagebreak" />
                <EmergencyActionsTable emergencyActions={emergencyActions} />
                <Divider className="pagebreak" />
                <DisposalRecommendationsTable disposalRecommendations={disposalRecommendations} />
                <Divider className="pagebreak" />
                <PrinterAndStartAgain />
            </Container>
        </Segment>
    )
}

RiskAssessmentPage.propTypes = {
    riskAssessment: riskAssessmentPropTypes.isRequired,
};

export default RiskAssessmentPage;