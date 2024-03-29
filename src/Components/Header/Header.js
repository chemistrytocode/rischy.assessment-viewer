import React from 'react';
import { Menu, Container, Segment, Item, Icon } from 'semantic-ui-react';

import './Header.css';

const Header = () => (
    <Segment className="Header">
        <Menu fixed='top' inverted>
            <Container>
                <Item as='a'>
                    <Icon name='lab' size='large' />
                    Welcome to Rischy, the Chemical Risk Assessment Generator
                </Item>
                <Item as='a'>
                    <Icon name='home' size='large' />
                    Home
                </Item>
                <Item as='a'>
                    <Icon name='upload' size='large' />
                    Upload Stock
                </Item>
                <Item as='a' href='mailto:chemistrytocode@gmail.com'>
                    <Icon name='mail' size='large' />
                    Contact
                </Item>
            </Container>
        </Menu>
    </Segment>

)

export default Header;