import React from 'react'
import { Container, List, Item, Segment, Divider, Icon } from 'semantic-ui-react'

import './Footer.css';

const Footer = () => (
    <Segment inverted vertical className="Footer">
        <Container textAlign='center'>
            <Icon name='lab' size='large' />
            <p>Rischy</p>
            <p>Developed by Paul Ayling</p>
            <Divider inverted />
            <List horizontal inverted link size='small'>
                <Item as='a' href='mailto:chemistrytocode@gmail.com'>
                    <Icon name='mail' />
                    Contact
                </Item>
                <Item as='a' target="_blank" href='https://www.linkedin.com/in/paul-ayling-ba1913170'>
                    <Icon name='linkedin' />
                    LinkedIn
                </Item>
                <Item as='a' target="_blank" href='https://github.com/chemistrytocode'>
                    <Icon name='github' />
                    GitHub
                </Item>
            </List>
        </Container>
    </Segment>
);

export default Footer;

