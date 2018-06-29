import React, { Component } from 'react'

class Sum extends Component {
    
    constructor(){
        super()

        this.state ={
            number1 : 0,
            number2 : 0,
            sum : null
        }
    }

    updateNum1(val){
        this.setState({number1 : val})
    }
    updateNum2(val){
        this.setState({number2 : val})
    }

    returnSum(num1,num2){
        let temp = Number(num1) + Number(num2)
        this.setState({sum : temp})
        
    }
    
    render () {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange = {(event)=> this.updateNum1(event.target.value)} />
                <input className="inputLine" onChange = {(event)=> this.updateNum2(event.target.value)}/>
                <button className="confirmationButton" onClick ={()=>this.returnSum(this.state.number1,this.state.number2)}>Calculate</button>
                <span className="resultsBox">Result: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum