import React, {Component} from 'react'

class ChooseYourAdventure extends Component {
    constructor(){
        super()

        this.state = {
            story : 'You come to a fork in the road...',
            question : 'Which direction do you go?',
            choiceOne : 'Why, left of course!',
            choiceTwo : "I'll go right.",
            choiceOneTwo : "Pick up the chocolate",
            choiceTwoTwo : "Leave it there and keep walking"
        
        }
    }

    leftChoice(){
        let y = document.getElementById("right_button")
        let z = document.getElementById("left_button")
        let x = document.getElementById('reset_button')
        let displayGone = document.getElementById('bottom_field')
        let choiceA = document.getElementById('left_button_two')
        let choiceB = document.getElementById('right_button_two')
        y.style.display = "none"
        z.style.display = "none"
        choiceA.style.display = "block"
        choiceB.style.display = "block"
        this.setState({
            story : "You found chocolate! It looks fancy but a little old :/",
            question : 'Do you eat the chocolate?'
        })
    }

    rightChoice(){
        let y = document.getElementById("right_button")
        let z = document.getElementById("left_button")
        let x = document.getElementById('reset_button')
        let displayGone = document.getElementById('bottom_field')
        y.style.display = "none"
        z.style.display = "none"
        x.style.display = "block"
        displayGone.style.display = "none"
        this.setState({
            story : "You died :(",
            question : ''
        })
    }

    rightChoiceTwo(){
        let x = document.getElementById('reset_button')
        let y = document.getElementById('right_button_two')
        let z = document.getElementById('left_button_two')
        let displayGone = document.getElementById('bottom_field')
        x.style.display = "block"
        y.style.display ="none"
        z.style.display = "none"
        displayGone.style.display = "none"
        this.setState({
            story : "Way to listen to mom! You win!"
        })
    }
    leftChoiceTwo(){
        let x = document.getElementById('reset_button')
        let y = document.getElementById('right_button_two')
        let z = document.getElementById('left_button_two')
        let displayGone = document.getElementById('bottom_field')
        x.style.display = "block"
        y.style.display ="none"
        z.style.display = "none"
        displayGone.style.display = "none"
        this.setState({
            story : "Why would you eat strange chocolate?"
        })
    }

    resetStory(){
        let y = document.getElementById("right_button")
        let x = document.getElementById("left_button")
        let z = document.getElementById("reset_button")
        let displayGone = document.getElementById('bottom_field')
        y.style.display = "block"
        x.style.display = "block"
        z.style.display = "none"
        displayGone.style.display = "block"
        this.setState({
            story: 'You come to a fork in the road...',
            question: 'Which direction do you go?',
            choiceOne: 'Why, left of course!',
            choiceTwo : "I'll go right.",
            isHidden : true
        })
    }



    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Choose Your Adventure</h4>
                <span className="resultsBox" id="top_field">{this.state.story}</span>
                <span className="resultsBox" id ="bottom_field">{this.state.question}</span>
                <p></p>
                <button className="confirmationButton" id="left_button" onClick={()=>this.leftChoice()}>{this.state.choiceOne}</button>
                <button className="confirmationButton" id="left_button_two" onClick={()=>this.leftChoiceTwo()}>{this.state.choiceOneTwo}</button>
                <p></p>
                <button className="confirmationButton" id="right_button" onClick={()=>this.rightChoice()}>{this.state.choiceTwo}</button>
                <button className="confirmationButton" id="right_button_two" onClick={()=>this.rightChoiceTwo()}>{this.state.choiceTwoTwo}</button>
                <p></p>
                <button className="confirmationButton" id="reset_button" onClick={()=>this.resetStory()}>Reset</button>
            </div>
        )
    }
}
export default ChooseYourAdventure