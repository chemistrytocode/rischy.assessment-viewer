import React from 'react';
import { Message, Button } from 'semantic-ui-react'

const Printer = () => {
    const handleOnClick = () => window.print();

    return (
        <>
            <Message
                attached
                icon="print"
                header='Want to print off this risk assessment?'
                content='Click on Print button below'
            />
            <Button color='orange' content="Print" icon='print' size="massive" fluid onClick={handleOnClick} />
        </>
    );
}

export default Printer;