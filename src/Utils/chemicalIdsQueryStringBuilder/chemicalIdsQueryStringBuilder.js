const chemicalIdsQueryStringBuilder = (selectedChemicals) => {
    const hazardIds = extractHazardIdsFromSelectedChemicals(selectedChemicals);
    const hazardString = covertHazardArrayToHazardString(hazardIds);
    return encryptHazardStringWithBase64(hazardString);
}

const extractHazardIdsFromSelectedChemicals = (selectedChemicals) => selectedChemicals.map(chemical => chemical.hazardId);

const covertHazardArrayToHazardString = (hazardArray) => hazardArray.join(',');

const encryptHazardStringWithBase64 = (hazardString) => btoa(hazardString); 

export default chemicalIdsQueryStringBuilder;
