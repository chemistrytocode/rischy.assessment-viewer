import React from 'react'
import { Header, Label, Table } from 'semantic-ui-react'

const ControlMeasuresTable = () => (
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
                <Table.Row>
                    <Table.Cell>Wear goggles when handling corrosives and irritants</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Wear gloves when handling corrosives</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    </>

)

export default ControlMeasuresTable;
