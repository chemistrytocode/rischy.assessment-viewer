import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ChemicalInputPage from '../ChemicalInputPage/ChemicalInputPage';
import RiskAssessmentPage from '../RiskAssessmentPage/RiskAssessmentPage';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import getStockData from '../../Redux/Actions/stockActions';
import { objectHasValues } from '../../Utils/objectHasValues/objectHasValues';


const RischyPageHandler = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => getStockData(dispatch);
        getData();
    }, [dispatch])

    const selectedChemicals = useSelector(state => state.selectedChemicals);
    const riskAssessment = useSelector(state => state.riskAssessment);
    const riskAssessmentHasBeenGenerated = objectHasValues(riskAssessment);

    return (
        <>
            <Header />
            {!riskAssessmentHasBeenGenerated && (<ChemicalInputPage selectedChemicals={selectedChemicals} />)}
            {riskAssessmentHasBeenGenerated && (<RiskAssessmentPage riskAssessment={riskAssessment} />)}
            <Footer />
        </>
    )
}

export default RischyPageHandler;