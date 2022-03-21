import React from 'react'
import { Header, Label, Table } from 'semantic-ui-react'

import SvgImage from '../SvgImage/SvgImage';

const HazardTable = () => (
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
        <Table.Row>
          <Table.Cell>Hydrochloric Acid (2 mol dm-3)</Table.Cell>
          <Table.Cell textAlign='center'>Low Hazard</Table.Cell>
          <Table.Cell>Dilute acid may cause harm in the eyes or in a cut</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Sulphuric Acid Acid (1 mol dm-3)</Table.Cell>
          <Table.Cell textAlign='center'>
            <SvgImage svgName="Corrosive" />
            <p>Corrosive</p>
          </Table.Cell>
          <Table.Cell>DANGER: Causes severe skin burns and eye damage</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Limewater</Table.Cell>
          <Table.Cell textAlign='center'>
            <SvgImage svgName="Moderate" />
            <p>Irritant</p>
          </Table.Cell>
          <Table.Cell>WARNING: Undissolved solid may be irritaiting to eyes and skin</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Calcium Carbonate</Table.Cell>
          <Table.Cell textAlign='center'>
            <p>Low Hazard</p>
          </Table.Cell>
          <Table.Cell>N/A</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </>
)

export default HazardTable
