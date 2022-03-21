import React from 'react'
import { Header, Label, Table } from 'semantic-ui-react'

const EmergencyActionsTable = () => (
    <>
        <Header as='h1'>Emergency Actions</Header>
        <Label color='red' pointing="below" size="large">If the worst occurs follow these directions:</Label>
        <Table celled selectable striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Emergency</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell>In the eye</Table.Cell>
                    <Table.Cell>Flood the eye for 10 minutes with water</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Swallowed</Table.Cell>
                    <Table.Cell>Wash out mouth, do not induce vomitting</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    </>
)

export default EmergencyActionsTable;
