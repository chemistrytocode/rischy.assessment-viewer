import urlBuilder from '../urlBuilder/urlBuilder';

const fetchRiskAssessment = async (chemicalIdsQueryString) => {
    // TODO: Next iteration 
    // Static call to is made here (/risk-assessment) need to send selected chemicals in next iteration
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