import React from 'react';
import { Header, Label, Table } from 'semantic-ui-react';
import { controlMeasuresPropTypes } from '../../Constants/proptypes';


const ControlMeasuresTable = ({ controlMeasures }) => {
    const generateTableRows = (controlMeasure) => {
        const { control = '', chemicals = '' } = controlMeasure;

        return (
            <Table.Row>
                <Table.Cell><Header as="h3">{control}</Header></Table.Cell>
                <Table.Cell>{chemicals.map(chemical => <p>{chemical}</p>)}</Table.Cell>
            </Table.Row>
        )
    }

    return (
        <>
            <Header as='h1'>Control Measures</Header>
            <Label color='blue' pointing="below" size="large">Take note of the following precautionary measures:</Label>
            <p></p>
            <Table celled selectable striped color="blue">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell><Header as="h2">Control&nbsp;Measures</Header></Table.HeaderCell>
                        <Table.HeaderCell><Header as="h2">Affected&nbsp;Chemicals</Header></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {controlMeasures.map((eachControlMeasure => generateTableRows(eachControlMeasure)))}
                </Table.Body>
            </Table>
        </>
    )
};

ControlMeasuresTable.propTypes = {
    controlMeasures: controlMeasuresPropTypes.isRequired,
};

export default ControlMeasuresTable;
