import urlBuilder from '../urlBuilder/urlBuilder';

const fetchRiskAssessment = async (chemicalIdsQueryString) => {
    const url = urlBuilder.assessmentGenerator.riskAssessment(chemicalIdsQueryString);

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = response.json();
            return data;
        }
        return Promise.resolve({
            response
        });
    } catch (e) {
        console.error(`An Error occured: ${e.name} :  ${e.message}`);
        return Promise.reject(e);
    }
}

export default fetchRiskAssessment;