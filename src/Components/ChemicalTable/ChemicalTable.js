import React from 'react'
import { useDispatch } from 'react-redux';
import { Button, Table } from 'semantic-ui-react';

import { removeChemicalFromSelection } from '../../Redux/Actions/chemicalActions'

const ChemicalTable = ({ selectedChemicals }) => {
  const dispatch = useDispatch();

  const onClick = (chemical) => removeChemicalFromSelection(dispatch, chemical);

  const generateTableRow = (chemical) => (
    <Table.Row>
      <Table.Cell>{chemical.value}</Table.Cell>
      <Table.Cell textAlign='center'>{chemical.state}</Table.Cell>
      <Table.Cell>
        <Button negative fluid onClick={() => onClick(chemical)}>
          Remove
        </Button>
      </Table.Cell>
    </Table.Row>
  );

  if (selectedChemicals.length < 1) return null;

  return (
    <Table celled selectable striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Chemical</Table.HeaderCell>
          <Table.HeaderCell width={3} textAlign='center'>State/Concentration</Table.HeaderCell>
          <Table.HeaderCell width={3}></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {selectedChemicals.map((chemical) => generateTableRow(chemical))}
      </Table.Body>
    </Table>
  )
}

export default ChemicalTable;
