import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import DisplayCodeData from '../components/DisplayCodeData'

const url = window.location.href;
const urlChunks = url.split("/");
console.log(urlChunks);
const urlPieces = urlChunks[4] ? urlChunks.split("sirlinksalot") : "";
console.log(urlPieces)

//urlPieces[0] === code_data
//urlPieces[1] === product_id
//urlPieces[2] === first link_id
//urlPieces[3] === second link_id ...

class ConsumerPage extends Component {
    state = {
        result: 'Please scan a product',
        scannerOn: true,
        code_data: urlPieces[0],
        product_id: urlPieces[1],
        link_id: urlPieces.slice(2)
    }

    handleScan = data => {
        if (data) {
            this.setState({ result: data })
        }
    }
    handleError = err => { console.error(err) }

    render() {
        return (
            <div className="main">
                <div className="scanner">
                    {this.state.scannerOn ?
                        <QrReader
                            delay={300}
                            onError={this.handleError}
                            onScan={this.handleScan}
                            style={{ width: '100%' }}
                        />
                        : null
                    }
                </div>
                <p>{this.state.result}</p>
                {this.state.scannerOn ? null :
                    <DisplayCodeData
                        {...this.state}
                    />
                }
            </div>
        )
    }
}
export default ConsumerPage;