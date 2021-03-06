import React from 'react'
import { Container, Segment } from 'semantic-ui-react'

import ChemicalInput from '../../Components/ChemicalInput/ChemicalInput';
import ChemicalTable from '../../Components/ChemicalTable/ChemicalTable';
import SubmitButton from '../../Components/SubmitButton/SubmitButton';
import { selectedChemicalsPropTypes } from '../../Constants/proptypes';

const ChemicalInputPage = ({ selectedChemicals }) => {

    return (
        <Segment>
            <Container>
                <ChemicalInput />
                <ChemicalTable selectedChemicals={selectedChemicals} />
                <SubmitButton selectedChemicals={selectedChemicals} />
            </Container>
        </Segment>
    );
}

ChemicalInputPage.propTypes = {
    selectedChemicals: selectedChemicalsPropTypes.isRequired,
};

export default ChemicalInputPage;