import React from 'react'
import { Container, List, Segment, Divider, Icon } from 'semantic-ui-react'

const Footer = () => (
    <Segment inverted vertical style={{ margin: '50px 0', padding: '15px 0', background: 'black' }}>
        <Container textAlign='center'>
            <Icon name='lab' size='large' />
            <p>Rischy</p>
            <p>Developed by Paul Ayling</p>
            <Divider inverted />
            <List horizontal inverted link size='small'>
                <List.Item as='a' href='#'>
                    <List.Icon name='mail' />
                    Contact
                </List.Item>
                <List.Item as='a' href='#'>
                    <List.Icon name='linkedin' />
                    LinkedIn
                </List.Item>
                <List.Item as='a' href='#'>
                    <List.Icon name='github' />
                    GitHub
                </List.Item>
            </List>
        </Container>
    </Segment>
);

export default Footer;

