import React from 'react'
import { Header, Label, Table } from 'semantic-ui-react'

import SvgImage from '../SvgImage/SvgImage';

const HazardTable = ({ hazardChemicals }) => {
  const generateTableRows = (chemical) => {
    const { name, state, concentration, hazard, comment } = chemical;
    const chemicalNote = state ? state : concentration;

    return (
      <Table.Row>
        <Table.Cell>{name} ({chemicalNote})</Table.Cell>
        <Table.Cell textAlign='center'>{generateHazardCell(hazard)}</Table.Cell>
        <Table.Cell>{comment}</Table.Cell>
      </Table.Row>
    )
  }

  const generateHazardCell = (hazards) => hazards.map(eachHazard => (<><SvgImage svgName={eachHazard} /><p>{eachHazard}</p></>));

  return (
    <>
      <Header as='h1'>Risk Assessment</Header>
      <Label color='orange' pointing="below" size="large">The following risk assessment was generated from your provided chemicals:</Label>
      <Table celled selectable striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Chemical</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Hazard</Table.HeaderCell>
            <Table.HeaderCell>Comments</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {hazardChemicals.map(eachHazardChemical => generateTableRows(eachHazardChemical))}
        </Table.Body>
      </Table>
    </>
  )
}

export default HazardTable
