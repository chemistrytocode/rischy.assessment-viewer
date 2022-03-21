import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Segment } from 'semantic-ui-react'

import ChemicalInputQuestion from '../../Components/ChemicalInput/ChemicalInput';
import ChemicalTable from '../../Components/ChemicalTable/ChemicalTable';
import SubmitButton from '../../Components/SubmitButton/SubmitButton';
import getStockData from '../../Redux/Actions/stockActions';

const ChemicalInput = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getStockData(dispatch)
    }, [dispatch])

    return (
        <Segment>
            <Container>
                <ChemicalInputQuestion />
                <ChemicalTable />
                <SubmitButton />
            </Container>
        </Segment>
    );
}

export default ChemicalInput;