import React, { Component} from 'react'

class MadLib extends Component {
    constructor() {
        super ()
        this.state={
            noun : 'noun',
            verb : 'verb',
            madLib : ''
        }
    }
    emptyFieldNoun(){
        this.setState({noun : ''})
    }
    emptyFieldVerb() {
        this.setState({verb : ''})
    }
    
    inputNoun(val) {
        this.setState({noun : val})
    }
    inputVerb(val) {
        this.setState({verb : val})
    }

    initiateMadLib(noun,verb){
        this.setState({madLib: `The ${noun} ${verb} at the store`})
        this.setState({noun: '', verb: ''})
    }

    resetFields(noun,verb,final){
        this.setState({noun : 'noun', verb : 'verb', madLib: ''})
    }
    
    render (){
        return (
            <div className="puzzleBox sumPB">
            <h4>Mad Lib</h4>
            <input className="inputLine"onClick={()=>this.emptyFieldNoun(this.state.noun)} onChange={(event)=>this.inputNoun(event.target.value)} value={this.state.noun}/>
            <input className="inputLine" onClick={()=>this.emptyFieldVerb(this.state.noun)}onChange={(event)=>this.inputVerb(event.target.value)} value={this.state.verb}/>
            <button className="confirmationButton" onClick={()=> this.initiateMadLib(this.state.noun,this.state.verb)} >Mad Lib it Up!</button>
            <span className="resultsBox">{this.state.madLib}</span>
            <button className="confirmationButton" onClick={()=>this.resetFields(this.state.noun,this.state.verb,this.state.madLib)}>Reset</button>
        </div>
        )
    }
}

export default MadLib