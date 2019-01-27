import React, { Component } from 'react'
import CreateCode from '../components/CreateCode';
class Dev extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div>
                <p>For development: http://localhost:3000/scan/cvllki7lki18lki19lki20</p>
                <p>For deployment: https://foodchains.herokuapp.com/scan/cvllki7lki18lki19lki20</p>
                <p> cvllki, followed by the product_id, lki, followed by the first link_id, lki, followed by the second link_id, etc.</p>

                <div className="form-group">
                    <form>
                        <input
                            name="text"
                            className="form-control"
                            type="text"
                            value={this.state.text}
                            placeholder="Whatever you put here will generate a qr code"
                            onChange={this.handleChange}
                        />
                    </form>
                </div>
                <CreateCode codedUrl={this.state.text} />
            </div>
        )
    }
}
export default Dev;