import React from 'react'
import { Header, Label, Table } from 'semantic-ui-react'

const ControlMeasuresTable = ({ controlMeasures }) => {

    const generateTableRows = (controlMeasure) => (
        <Table.Row>
            <Table.Cell>{controlMeasure}</Table.Cell>
        </Table.Row>
    );
    
    return (
        <>
            <Header as='h1'>Control Measures</Header>
            <Label color='blue' pointing="below" size="large">Take note of the following precautionary measures:</Label>
            <p></p>
            <Table celled selectable striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Control Measures</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {controlMeasures.map((eachControlMeasure => generateTableRows(eachControlMeasure)))}
                </Table.Body>
            </Table>
        </>
    )
}

export default ControlMeasuresTable;
