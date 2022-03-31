export const isChemicalAreadyInState = (state, payload) => {
    const idsInState = state.map(eachChemical => eachChemical.id);
    return idsInState.includes(payload.id);
}

export const sortChemicalsByName = (state) => state.sort((a, b) => a.value.localeCompare(b.value));