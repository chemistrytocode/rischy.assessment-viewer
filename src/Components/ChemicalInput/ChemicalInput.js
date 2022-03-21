import React from 'react'
import { useSelector } from 'react-redux';
import { Form, Dropdown } from 'semantic-ui-react';

import { buildChemicalStockOptions } from '../../Utils/stockOptionsBuilder/stockOptionsBuilder';

const ChemicalInput = () => {
  const stockData = useSelector(state => state.stock);
  const chemicalStockOptions = buildChemicalStockOptions(stockData);

  return (
    <Form>
      <Form.Field>
        <h1>Chemical Input</h1>
        <label>Enter a chemical name in the search below:</label>
        <Dropdown
          placeholder='Enter a chemical...'
          fluid
          search
          selection
          options={chemicalStockOptions}
        />
      </Form.Field>
    </Form>
  )
}

export default ChemicalInput;
