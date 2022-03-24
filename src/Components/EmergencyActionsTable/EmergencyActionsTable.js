import React from 'react'
import { Header, Label, Table } from 'semantic-ui-react'

const EmergencyActionsTable = ({ emergencyActions }) => {
    const generateTableRows = (emergencyAction) => {
        const { emergency, action } = emergencyAction

        return (
            <Table.Row>
                <Table.Cell><Header as="h4">{emergency}</Header></Table.Cell>
                <Table.Cell>{action}</Table.Cell>
            </Table.Row>
        )
    };

    return (
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
                    {emergencyActions.map(eachEmergencyAction => generateTableRows(eachEmergencyAction))}
                </Table.Body>
            </Table>
        </>
    )
}

export default EmergencyActionsTable;
