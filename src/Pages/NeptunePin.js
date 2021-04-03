import { Component } from 'react';
import '../CSS/Neptune.css';
import LogoPng from '../design/Logo.png';

import { Link } from "react-router-dom";

function Logo() {
    return (
        <div>
            <img src={LogoPng} alt='No Img' />
        </div>
    );
}

function PinButton(props) {
    return (
        <button
            onClick={props.onClick}
            className='pinButton'>
            {props.value}
        </button>
    );
}

function PinDisplay(props) {
    return (
        <button
            className='pinDisplay'>
            {props.value}
        </button>
    );
}


class SecurityPad extends Component {
    renderPin(i) {
        return (
            <PinButton
                onClick={() => { this.props.onClick(i) }}
                value={i} />
        );
    }

    render() {
        return (
            <div className='pinPad' >
                < div >
                    {this.renderPin(1)}
                    {this.renderPin(2)}
                    {this.renderPin(3)}
                </div >
                <div>
                    {this.renderPin(4)}
                    {this.renderPin(5)}
                    {this.renderPin(6)}
                </div>
                <div>
                    {this.renderPin(7)}
                    {this.renderPin(8)}
                    {this.renderPin(9)}
                </div>
                <div>
                    <Link to={this.props.onFingerScan}>
                        <button
                            className='pinButton'>◍</button>
                    </Link>

                    {this.renderPin(0)}
                    <button
                        onClick={() => this.props.onReset()}
                        className='pinButton'>◀</button>
                </div>
            </div >

        );
    }
}

class NeptunePin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: Array(4).fill('-'),
            pinIndex: 0
        };

        this.handleClick = this.handleClick.bind(this);
        this.resetPin = this.resetPin.bind(this);
    }

    resetPin() {
        //Reset Pin
        this.setState({
            pin: Array(4).fill('-'),
            pinIndex: 0
        });
    }


    handleClick(i) {
        const newPin = this.state.pin.slice();
        newPin[this.state.pinIndex] = i;

        let newIndex = this.state.pinIndex + 1;
        if (newIndex > this.state.pin.length) {
            return;
        }

        this.setState({
            pin: newPin,
            pinIndex: newIndex,
        });

    }

    render() {
        const pin = this.state.pin;
        const pinDisplay = pin.map((p, id) => {
            return (
                <PinDisplay value={p} />
            );
        });

        return (
            <div className='loginForm'>
                <Logo />
                <div>
                    {pinDisplay}
                </div>
                <div >
                    <SecurityPad
                        onReset={this.resetPin}
                        onFingerScan='/home'
                        onClick={this.handleClick} />
                </div>
            </div>
        );
    }
}

export default NeptunePin;