import React from "react";
import { QRCode } from 'react-qr-svg';

//https://www.npmjs.com/package/react-qr-svg
// https://github.com/zpao/qrcode.react
// value: '', The value to encode in the code
// level: 'L',  QR Error correction level
// bgColor: '#FFFFFF',  Color of the bright squares
// fgColor: '#000000',  Color of the dark squares

function saveImage() {
    const saveSvg = require('save-svg-as-png');
    saveSvg.saveSvgAsPng(document.getElementById("qr"), "foodchain.png", {scale: 10});
}

function QRMaker(props) {
    return (
        <div className="qr-holder">
            <QRCode
                onClick={saveImage}
                id="qr"
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="Q"
                style={{ width: 200 }}
                value={props.codedUrl}
            />
            <button className="btn btn-success" onClick={saveImage}>Save</button>
        </div>
    );
}
export default QRMaker;
