import React, {Component, useEffect} from "react";
import withRouter from "../../hoc/withRouter";

class Home extends Component {

    render() {
        return (
            <div>
                <h1>Homepage</h1>
                <button onClick={() => {
                    this.props.navigate('/customers')
                }}>
                    Customers Link
                </button>
            </div>
        )
    }
}

export default withRouter(Home)