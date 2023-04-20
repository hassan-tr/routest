import React, {Component, useEffect} from "react";
import withRouter from "../../hoc/withRouter";

class Products extends Component{

    componentDidMount() {
        console.log('in products: ',this.props.location.pathname)
        window.onpopstate = this.onNavBack
        //both work
        // window.addEventListener('popstate', onNavBack)
    }

    onNavBack = () => {
        this.props.navigate(this.props.location.pathname)
    }
    render(){
        return(
            <div>
                <h1>Products page</h1>
            </div>
        )
    }
}

export default withRouter(Products)