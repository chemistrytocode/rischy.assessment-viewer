const stateIcons = {
    "Solid": "cube",
    "Liquid": 'tint',
    "Gas": 'cloud'
}

export const buildChemicalStockOptions = (stockData) => (
    stockData.map((stock, index) => {
        return {
            key: index,
            value: { id: stock.id, state: stock.state, value: stock.name, hazardId: stock.hazard_Id},
            icon: stateIcons[stock.state],
            text: stock.name
        }
    })
);