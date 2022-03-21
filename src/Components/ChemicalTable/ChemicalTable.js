import React from 'react'
import { Button, Table } from 'semantic-ui-react'

const ChemicalTable = () => (
  <Table celled selectable striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Chemical</Table.HeaderCell>
        <Table.HeaderCell width={3} textAlign='center'>State/Concentration</Table.HeaderCell>
        <Table.HeaderCell width={3}></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Barium Chloride</Table.Cell>
        <Table.Cell textAlign='center'>Solid</Table.Cell>
        <Table.Cell><Button negative fluid>Remove</Button></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Barium Nitrate</Table.Cell>
        <Table.Cell textAlign='center'>Solid</Table.Cell>
        <Table.Cell><Button negative fluid>Remove</Button></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Hydrochloric Acid</Table.Cell>
        <Table.Cell textAlign='center'>2 mol dm-3</Table.Cell>
        <Table.Cell><Button negative fluid>Remove</Button></Table.Cell>
      </Table.Row>
      <Table.Row negative>
        <Table.Cell>White Phosphorus <p>(Dangerous)</p></Table.Cell>
        <Table.Cell textAlign='center'>Solid</Table.Cell>
        <Table.Cell><Button negative fluid>Remove</Button></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default ChemicalTable
