import { Component } from "react";
import propTypes from 'prop-types'

export default class ErrorBoundary extends Component{

    constructor(props){
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(erro){
        return { hasError: true}
    }

    componentDidCatch(error, errorInfo)
    {
        console.log(error, errorInfo)
    }

    render()
    {
        if(this.state.hasError){
            return <p style={{textAlign:'center',marginTop:'250px',color:'#009579',fontSize:'100px',fontStyle:'italic'}}>OOPS!!!! , Something went wrong.
            Try Again...</p>
        }
        return this.props.children
    }
}

ErrorBoundary.propTypes={
    children: propTypes.node.isRequired
}