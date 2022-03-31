import React from 'react';
import { Header, Label, Table } from 'semantic-ui-react';

import { disposalRecommendationsPropTypes } from '../../Constants/proptypes';

const DisosalRecommendationsTable = ({ disposalRecommendations }) => {

    const generateDisposalRecommendationRow = (disposalRecommendation) => {
        const { key, chemicals, instructions } = disposalRecommendation;

        return (
            <Table.Row>
                <Table.Cell>
                    <Header as="h3">{key}</Header>
                    {instructions}
                </Table.Cell>
                <Table.Cell>{chemicals.map(chemical => <p>{chemical}</p>)}</Table.Cell>
            </Table.Row>
        )
    };

    return (
        <>
            <Header as='h1' className="DisposalRecommendationsTitle">Disposal Recommendations</Header>
            <Label color='violet' pointing="below" size="large">Take note of the following precautionary measures:</Label>
            <p></p>
            <Table celled selectable striped color="violet"> 
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell><Header as="h2">Control&nbsp;Measures</Header></Table.HeaderCell>
                        <Table.HeaderCell><Header as="h2">Affected&nbsp;Chemicals</Header></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {disposalRecommendations.map((eachDisposalMeasure => generateDisposalRecommendationRow(eachDisposalMeasure)))}
                </Table.Body>
            </Table>

        </>
    )
};

DisosalRecommendationsTable.propTypes = {
    disposalRecommendations: disposalRecommendationsPropTypes.isRequired,
  };


export default DisosalRecommendationsTable;