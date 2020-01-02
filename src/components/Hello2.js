import React from 'react'

class Hello2 extends React.Component{
    constructor(){
        super()
        this.state = {count: 1}
    }

    handleClick = () => {
        console.log("click");
        this.setState({count: ++this.state.count})
    }
    handleClickM = () => {
        console.log("click");
        this.setState({count: this.state.count-10})
    }

    render() {
        return(
            <div>
            <h2>{this.state.count}</h2>
            <button onClick={this.handleClick}> + </button>
            <button onClick={this.handleClickM}> - </button>
            </div>
        )
    }
}
export default Hello2