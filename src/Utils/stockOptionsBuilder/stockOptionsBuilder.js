const stateIcons = {
    "Solid": "cube",
    "Liquid": 'tint',
    "Gas": 'cloud'
}

export const buildChemicalStockOptions = (stockData) => (
    stockData.map((stock, index) => {
        return {
            id: stock.id,
            key: index,
            value: stock.name,
            icon: stateIcons[stock.state],
            text: stock.name
        }
    })
);