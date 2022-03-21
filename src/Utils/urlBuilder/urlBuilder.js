class AssessmentGenerator {
    static get baseUrl() {
        return 'https://localhost:3001'
    };

    static riskAssessment() {
        return `${this.baseUrl}/risk-assessment`;
    }
}

class ChemicalHandler {
    static get baseUrl() {
        return 'https://localhost:3002'
    };

    static stock() {
        return `${this.baseUrl}/stock`;
    }
}

var urlBuilder = {
    assessmentGenerator: AssessmentGenerator,
    chemicalHandler: ChemicalHandler
}

export default urlBuilder;