import React, { Component } from "react";
import { QRCode } from 'react-qr-svg';

//https://www.npmjs.com/package/react-qr-svg
// https://github.com/zpao/qrcode.react
// value: '', The value to encode in the code
// level: 'L',  QR Error correction level
// bgColor: '#FFFFFF',  Color of the bright squares
// fgColor: '#000000',  Color of the dark squares

class QRMaker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code_value: "1a2a3a4a"
        };

    }
    render() {
        return (<QRCode
            bgColor="#FFFFFF"
            fgColor="#000000"
            level="Q"
            style={{ width: 200 }}
            value={this.state.code_value}
        />);
    }
}
export default QRMaker;
