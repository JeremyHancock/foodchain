import React, { Component } from 'react'
import QrReader from 'react-qr-reader'



class ConsumerPage extends Component {
    state = {
        result: 'Please scan a product',
        scannerOn: true,
    }

    handleScan = data => {
        if (data) {
            const cutUrl = data.split("consumer");
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
            <div className="main">
                <div className="scanner">
                    <QrReader
                        delay={300}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{ width: '100%' }}
                    />
                </div>
                <p>{this.state.result}</p>
            </div>
        )
    }
}
export default ConsumerPage;