import React from 'react'
import { Container, Segment } from 'semantic-ui-react'

import ChemicalInputQuestion from '../../Components/ChemicalInput/ChemicalInput';
import ChemicalTable from '../../Components/ChemicalTable/ChemicalTable';
import SubmitButton from '../../Components/SubmitButton/SubmitButton';

const ChemicalInput = () => (
    <Segment>
        <Container>
            <ChemicalInputQuestion />
            <ChemicalTable />
            <SubmitButton />
        </Container>
    </Segment>
);

export default ChemicalInput;