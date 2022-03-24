import React from 'react';
import { Grid } from 'semantic-ui-react'

import ControlMeasuresTable from '../ControlMeasuresTable/ControlMeasuresTable';
import EmergencyActionsTable from '../EmergencyActionsTable/EmergencyActionsTable';

const ControlMeasuresAndEmergyActions = ({ controlMeasures, emergencyActions}) => (
    <Grid columns={2} stackable textAlign='center'>
        <Grid.Row verticalAlign='middle'>
            <Grid.Column>
                <ControlMeasuresTable controlMeasures={controlMeasures} />
            </Grid.Column>

            <Grid.Column>
                <EmergencyActionsTable emergencyActions={emergencyActions} />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default ControlMeasuresAndEmergyActions;