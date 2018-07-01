import React, { Component} from 'react'

class Password extends Component {
    constructor(){
        super()
        
        this.state = {
            password: "Password",
            userName: "Username",
            userArray: []
        }
    }

    createUser(user,pass){
        let x = document.getElementById("username_input")
        let y = document.getElementById("password_input")
        let z = document.getElementById("confirm_button")
        z.style.display = "block"
        x.style.display = "block"
        y.style.display = "block"
    }
    confirmNewUser(userName,password){
        let tempObj = {}
        tempObj.userName1=userName
        tempObj.password1=password
        let tempArray = this.state.userArray.slice(0)
        tempArray.push(tempObj)
        console.log(tempArray)
        this.setState({userArray: tempArray})
        console.log(this.state.userArray)
    }


    login(user,pass) {
        let x = document.getElementById("username_input")
        let y = document.getElementById("password_input")
        x.style.display = "block"
        y.style.display = "block"

    }

    handleChangeUse(input){
        this.setState({
            userName : input
        })
    }
    handleChangePass(input){
        this.setState({
            password : input
        })
    }

    render () {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Password</h4>
                <input className="inputLine" id="username_input" placeholder={this.state.userName} onChange={(event)=>this.handleChangeUse(event.target.value)}/>
                <input className="inputLine" id="password_input" placeholder={this.state.password} onChange={(event)=>this.handleChangePass(event.target.value)}/>
                <button className="confirmationButton" onClick={()=>this.createUser(this.state.userName,this.state.password)}>Create Account</button>
                <p></p>
                <button className="confirmationButton" id="confirm_button" onClick={()=>this.confirmNewUser(this.state.userName,this.state.password)}>Confirm</button>
                <button className="confirmationButton" onClick={()=>this.login(this.state.userName,this.state.password)}>Login</button>
            </div>

        )
    }
}

export default Password