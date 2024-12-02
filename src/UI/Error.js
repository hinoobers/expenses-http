import React, {Fragment} from 'react';
import './Error.css'
import Card from './Card';
import Button from './Button';
import ReactDOM from 'react-dom';

const BackDrop = (props) => {
    return (
        <div className='backdrop'></div>
    )
}

const ModalOverlay = (props) => {
    return (
        <Card className='modal'>
            <header className='header'>
                <h2>{props.title}</h2>
            </header>
            <div className='content'>
                <p>{props.message}</p>
            </div>
            <footer className='actions'>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    )
}

const Error = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <BackDrop onConfirm={props.onConfirm}/>,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,
                document.getElementById('overlay-root')
            )}
        </Fragment>
    )
}

export default Error;