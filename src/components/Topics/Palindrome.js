import React, { Component } from 'react'

class Palindrome extends Component {
    
    constructor() {
        super ()
        this.state = {
            userInput: '',
            palindrome: '',
        }
    }

    gatherInput(val){
        this.setState({
            userInput: val
        })
    }
    
    solverFunction(whatevs){
        let forward = whatevs
        let backward = whatevs

        backward = backward.split('')
        backward = backward.reverse()
        backward = backward.join('')

        if(isNaN(forward)===false){
            alert("That's a number :(")
        }
        else if(backward === forward){
            this.setState({palindrome: 'true'})
        } else {
            this.setState({palindrome: 'false'})
        }
        this.setState({userInput: ''})


    }
    
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange = {(event)=> this.gatherInput(event.target.value)} value={this.state.userInput}/>
                <button className="confirmationButton" onClick = {()=> this.solverFunction(this.state.userInput)}>Check</button>
                <span className="resultsBox"> Palindrome: {JSON.stringify(this.state.palindrome,null,10)}</span>
            </div>
        )
    }
}

export default Palindrome