import React from 'react';
import { Message, Button } from 'semantic-ui-react'

const StartAgain = () => (
    <>
        <Message
            attached
            icon="arrow alternate circle left outline"
            header='Want to create another risk assessment?'
            content='Click on the Start again button below'
        />
        <Button color='grey' content="Start again" icon='arrow alternate circle left outline' size="massive" fluid />
    </>
);

export default StartAgain;