import React, { Component } from 'react';

class FilterObject extends Component {

    constructor (){
        super()

        this.state = {
            unFilteredArray : [{name:'mike', interests: "nothing",title: 'boss', hairColor: 'brown'},{name:'tom',title: 'boss', hairColor: 'blonde'},{name:'mike',title: 'loser', hairColor: 'green'}],
            userInput : '',
            filteredArray : ''
        }
    }

    handleChange(val){
        this.setState({
            userInput : val
        })
    }

    solveArray (userInput) {
        let workingArray =this.state.unFilteredArray
        let finalArray =[]

        for(let i=0;i<workingArray.length;i++){
            if(workingArray[i].hasOwnProperty(userInput)){
                finalArray.push(workingArray[i])
            }
        }
        this.setState({filteredArray : finalArray})
    }

    render () {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.unFilteredArray,null,10)}</span>
                <input className='inputLine' onChange = { (event) => this.handleChange(event.target.value)}></input>
                <button className='confirmationButton' onClick = { () => this.solveArray(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject