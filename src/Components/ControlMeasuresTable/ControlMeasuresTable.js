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
            <Table celled selectable striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Control Measures</Table.HeaderCell>
                        <Table.HeaderCell>Affected Chemicals</Table.HeaderCell>
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
