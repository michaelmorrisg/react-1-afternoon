import React, { Component } from 'react';

class FilterString extends Component {

    constructor () {
        super()

        this.state = {
            unFilteredArray: ['cat','cat dog','dog','lizard cat','lizard','lizard dog'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(goingIn) {
        this.setState ({
            userInput: goingIn
        })
    }

    solverFunction(userInput) {
        let workingArray = this.state.unFilteredArray
        let finalArray = []

        for (let i =0;i<workingArray.length;i++){
            if(workingArray[i].includes(userInput)){
                finalArray.push(workingArray[i])
            }
        }
        this.setState({filteredArray : finalArray})
    }
    render () {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Before: {JSON.stringify(this.state.unFilteredArray,null,10)}</span>
                <input className="inputLine" onChange = {(event) => this.handleChange(event.target.value)}/>
                <button className="confirmationButton" onClick = {()=> this.solverFunction(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB"> Results: {JSON.stringify(this.state.filteredArray,null,10)}</span>
            </div>
        )
    }
}

export default FilterString