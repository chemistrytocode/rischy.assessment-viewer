class ChemicalHandler {
    static get baseUrl() {
        return 'https://localhost:3002'
    };

    static stock() {
        return `${this.baseUrl}/stock`;
    }

    static hazards(chemicalIds) {
        return `${this.baseUrl}/hazards?ids=${chemicalIds}`;
    }
}

var urlBuilder = {
    chemicalHandler: ChemicalHandler,
}

export default urlBuilder;