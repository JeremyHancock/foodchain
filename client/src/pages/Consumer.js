import React, { Component } from 'react'
import QrReader from 'react-qr-reader'



class ConsumerPage extends Component {
    state = {
        result: "",
        scannerOn: true,
    }

    handleScan = data => {
        if (data) {
            const cutUrl = data.split("scan");
            console.log(cutUrl);
            this.setState({
                result: data,
                scannerOn: false
            })
            window.location.pathname = `scan${cutUrl[1]}`;
        }
    }
    handleError = err => { console.error(err) }

    render() {
        return (
            <div>
                <p>Scan a Foodchain code to see the links between you and your food's source</p>
                <div className="scanner">
                    <QrReader
                        delay={300}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{ width: '100%' }}
                    />
                </div>
            </div>
        )
    }
}
export default ConsumerPage;