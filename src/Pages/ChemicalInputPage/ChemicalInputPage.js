import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

    const selectedChemicals = useSelector(state => state.selectedChemicals);
  
    return (
        <Segment>
            <Container>
                <ChemicalInputQuestion />
                <ChemicalTable selectedChemicals={selectedChemicals}/>
                <SubmitButton selectedChemicals={selectedChemicals}/>
            </Container>
        </Segment>
    );
}

export default ChemicalInput;