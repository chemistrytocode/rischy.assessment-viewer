import React from 'react';
import { Header, Label, Table, Button, Icon } from 'semantic-ui-react';
import { emergencyActionsPropTypes } from '../../Constants/proptypes';

const EmergencyActionsTable = ({ emergencyActions }) => {
    const { defaultEmergencyActions, chemicalEmergencyActions = [], escalationStatement } = emergencyActions;

    const generateDefaultTableRow = (emergencyAction) => {
        const { emergency, action, actionSubText, actionNotes } = emergencyAction;

        return (
            <Table.Row>
                <Table.Cell><Header as="h3">{emergency}</Header></Table.Cell>
                <Table.Cell textAlign='center'>
                    <Header as='h4'>{action}</Header>
                    {actionSubText}
                </Table.Cell>
                <Table.Cell>{actionNotes}</Table.Cell>
            </Table.Row>
        )
    };

    const generateChemicalTableRow = (emergencyAction) => {
        const { chemical, chemicalEmergencyActions } = emergencyAction

        return (
            <>
                <Table.Row>
                    <Table.Cell rowSpan="3"><Header as="h3">{chemical}</Header></Table.Cell>
                    <Table.Cell>{chemicalEmergencyActions[0].emergency}</Table.Cell>
                    <Table.Cell>{chemicalEmergencyActions[0].action}</Table.Cell>
                </Table.Row>
                {chemicalEmergencyActions.length > 1 && (
                    chemicalEmergencyActions.shift().map(chemicalEmergencyAction => (
                        <Table.Row>
                            <Table.Cell>{chemicalEmergencyAction.emergency}</Table.Cell>
                            <Table.Cell>{chemicalEmergencyAction.action}</Table.Cell>
                        </Table.Row>
                    ))
                )}
            </>
        )
    }

    const generateDefaultEmergencyActions = (defaultEmergencyActions) => defaultEmergencyActions.map(emergencyAction => generateDefaultTableRow(emergencyAction));

    const generateChemicalEmergencyActions = (chemicalEmergencyActions) => chemicalEmergencyActions.map(emergencyAction => generateChemicalTableRow(emergencyAction));

    const generateEscalationStatement = (escalationStatement) => (
        <Table.Row>
            <Table.HeaderCell colSpan='4' textAlign='center'>
                <Header as="h3">{escalationStatement}</Header>
            </Table.HeaderCell>
        </Table.Row>
    );

    console.log('chemicalEmergencyActions', chemicalEmergencyActions);

    return (
        <>d
            <Header as='h1'>Emergency Actions</Header>
            <Label color='red' pointing="below" size="large">If the worst occurs follow these directions:</Label>
            <Table celled selectable striped color="red">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Emergency</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                        <Table.HeaderCell>Action Notes</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {generateDefaultEmergencyActions(defaultEmergencyActions)}
                </Table.Body>

                <Table.Footer>
                </Table.Footer>
            </Table>

            {chemicalEmergencyActions.length > 1 && (
                <Table celled selectable striped color="red">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Chemical</Table.HeaderCell>
                            <Table.HeaderCell>Emergency</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {generateChemicalEmergencyActions(chemicalEmergencyActions)}
                </Table>
            )}

            <Table celled selectable striped color="red">
                {generateEscalationStatement(escalationStatement)}
            </Table>
        </>
    )
}

EmergencyActionsTable.defaultProps = {
    emergencyActions: {
        chemicalEmergencyActions: []
    }
};

EmergencyActionsTable.propTypes = {
    emergencyActions: emergencyActionsPropTypes.isRequired,
};

export default EmergencyActionsTable;
