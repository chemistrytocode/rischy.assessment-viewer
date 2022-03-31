import React from 'react'
import { Header, Label, Table } from 'semantic-ui-react'
import { hazardChemicalsPropTypes } from '../../Constants/proptypes';


import SvgImage from '../SvgImage/SvgImage';

const HazardTable = ({ hazardChemicals }) => {
  const generateTableRows = (chemical) => {
    const { name, state, hazard, comment } = chemical;

    const nonBreakingName = name.replace(/ /g, '\u00a0')

    return (
      <Table.Row>
        <Table.Cell textAlign='center'><Header as="h3">{nonBreakingName}</Header>({state})</Table.Cell>
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
      <Table celled selectable striped color="orange">
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell textAlign='center'><Header as="h2">Chemical</Header></Table.HeaderCell>
            <Table.HeaderCell textAlign='center'><Header as="h2">Hazard</Header></Table.HeaderCell>
            <Table.HeaderCell><Header as="h2">Comments</Header></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {hazardChemicals.map(eachHazardChemical => generateTableRows(eachHazardChemical))}
        </Table.Body>
      </Table>
    </>
  )
}


HazardTable.propTypes = {
  hazardChemicals: hazardChemicalsPropTypes.isRequired,
};

export default HazardTable
