import React, {Component} from "react";
import withRouter from "../../hoc/withRouter";

class Customers extends Component{
    componentDidMount() {
        console.log('in customers: ',this.props.location.pathname)
    }

    render(){
        return(
            <div>
                <h1>Customers Page</h1>
                <button onClick={()=>{this.props.navigate('/products')}}>
                    Products Link
                </button>
            </div>
        )
    }
}

export default withRouter(Customers)
