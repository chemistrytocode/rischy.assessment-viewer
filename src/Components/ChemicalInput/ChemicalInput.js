import React from 'react'
import { Form, Dropdown } from 'semantic-ui-react'

// Hardcoded for Prototype
const chemicalStockOptions = [
  { key: '0', value: 'Calcium (Metal)', icon: 'cube', text: 'Calcium (Metal)' },
  { key: '1', value: 'Calcium Carbide', icon: 'cube', text: 'Calcium Carbide' },
  { key: '2', value: 'Calcium Carbonate', icon: 'cube', text: 'Calcium Carbonate' },
  { key: '3', value: 'Calcium Oxide', icon: 'cube', text: 'Calcium Oxide' },
  { key: '4', value: 'Calcium Sulphate', icon: 'cube', text: 'Calcium Sulphate' },
  { key: '5', value: 'Hydrochloric Acid (0.1 mol dm-3)', icon: 'tint', text: 'Hydrochloric Acid (0.1 mol dm-3)' },
  { key: '6', value: 'Hydrochloric Acid (0.2 mol dm-3)', icon: 'tint', text: 'Hydrochloric Acid (0.2 mol dm-3)' },
  { key: '7', value: 'Hydrochloric Acid (0.5 mol dm-3)', icon: 'tint', text: 'Hydrochloric Acid (0.5 mol dm-3)' },
  { key: '8', value: 'Hydrochloric Acid (1 mol dm-3)', icon: 'tint', text: 'Hydrochloric Acid (1 mol dm-3)' },
  { key: '9', value: 'Hydrochloric Acid (2 mol dm-3)', icon: 'tint', text: 'Hydrochloric Acid (2 mol dm-3)' },
  { key: '10', value: 'Hydrogen', icon: 'cloud', text: 'Hydrogen' },
]

const ChemicalInput = () => (
  <Form>
    <Form.Field>
      <h1>Chemical Input:</h1>
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

export default ChemicalInput;
