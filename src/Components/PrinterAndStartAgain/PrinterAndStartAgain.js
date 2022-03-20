import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';

import StartAgain from '../StartAgain/StartAgain';
import Printer from '../Printer/Printer';

const PrinterAndStartAgain = () => (
    <Segment>
        <Grid columns={2} stackable textAlign='center'>
            <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                    <StartAgain />
                </Grid.Column>

                <Grid.Column>
                    <Printer />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment >
);

export default PrinterAndStartAgain;