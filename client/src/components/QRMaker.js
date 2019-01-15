import React, {Component} from "react";
import { QRCode } from 'react-qr-svg';

//https://www.npmjs.com/package/react-qr-svg
// https://github.com/zpao/qrcode.react
// value: '', The value to encode in the code
// level: 'L',  QR Error correction level
// bgColor: '#FFFFFF',  Color of the bright squares
// fgColor: '#000000',  Color of the dark squares

class QRMaker extends Component {
    render() {
        return (<QRCode
                    bgColor="#FFFFFF"
                    fgColor="#000000"
                    level="Q"
                    style={{ width: 200 }}
                    value="a lot more text than before should change the code!"
                />);
    }
}
export default QRMaker;
