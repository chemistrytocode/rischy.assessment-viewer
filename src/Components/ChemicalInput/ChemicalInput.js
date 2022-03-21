import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Form, Dropdown } from 'semantic-ui-react';

import { addChemicalToSelection } from '../../Redux/Actions/chemicalActions';

import { buildChemicalStockOptions } from '../../Utils/stockOptionsBuilder/stockOptionsBuilder';

const ChemicalInput = () => {
  const dispatch = useDispatch();
  const stockData = useSelector(state => state.stock);
  const chemicalStockOptions = buildChemicalStockOptions(stockData);

  const handleChange = (e, { value }) => addChemicalToSelection(dispatch, { value });

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
          onChange={handleChange}
          options={chemicalStockOptions}
        />
      </Form.Field>
    </Form>
  )
}

export default ChemicalInput;
