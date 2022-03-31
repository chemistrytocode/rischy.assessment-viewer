import React from 'react';
import { Header, Segment, Grid } from 'semantic-ui-react';

import StartAgain from '../StartAgain/StartAgain';
import Printer from '../Printer/Printer';

import './PrinterAndStartAgain.css';

const PrinterAndStartAgain = () => (
    <Segment className="PASA_Segment" >
        <Header as="h1">Finally...</Header>
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