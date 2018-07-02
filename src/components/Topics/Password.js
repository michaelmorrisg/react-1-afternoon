import React, { Component} from 'react'

class Password extends Component {
    constructor(){
        super()
        
        this.state = {
            password: "",
            userName: "",
            userArray: ['cat'],
            result: ''
        }
        this.confirmNewUser = this.confirmNewUser.bind(this)
        this.handleChangePass = this.handleChangePass.bind(this)
        this.handleChangeUse = this.handleChangeUse.bind(this)
    }

    createUser(user,pass){
        let x = document.getElementById("username_input")
        let y = document.getElementById("password_input")
        let z = document.getElementById("confirm_button")
        let a = document.getElementById("placeholder_p")
        z.style.display = "block"
        x.style.display = "block"
        y.style.display = "block"
        a.style.display = "block"
    }
    confirmNewUser(userName,password){
        let tempObj = {}
        tempObj.userName=userName
        tempObj.password=password
        if(userName === '' || password === ''){
            alert("Please enter desired username and password")
        } else{
        let tempArray = this.state.userArray.slice(0)
        tempArray.push(tempObj)
        console.log(tempArray)
        this.setState(
            {userArray : tempArray,password : '', userName: ''}
        )
        alert("Username and password created!")
        //why is this console log just returning an empty array?
        console.log(this.state.userArray)
    }
    }


    login(user,pass) {
        let x = document.getElementById("username_input")
        let y = document.getElementById("password_input")
        x.style.display = "block"
        y.style.display = "block"
        if(user === '' || pass === ''){
            alert("Please enter your username and password")
        }else {
        for(let i=0;i<this.state.userArray.length;i++){
            if(this.state.userArray[i].userName === this.state.userName && this.state.userArray[i].password === this.state.password){
                this.setState({
                    result : `Logging in ${user} with pass ${pass}`
                })
            } else {
                this.setState({
                    result : `User not found!`
                })
            }
            console.log(this.state.userArray)
        }
    }

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
            <div key='poop' className="puzzleBox filterStringPB" id="password_div">
                <h4>Password</h4>
                <input className="inputLine" id="username_input" value={this.state.userName} placeholder="Username" onChange={(event)=>this.handleChangeUse(event.target.value)}/>
                <input className="inputLine" id="password_input" value={this.state.password}placeholder="Password" onChange={(event)=>this.handleChangePass(event.target.value)}/>
                <button className="confirmationButton" onClick={()=>this.createUser(this.state.userName,this.state.password)}>Create Account</button>
                <p></p>
                <button className="confirmationButton" id="confirm_button" onClick={()=>this.confirmNewUser(this.state.userName,this.state.password)}>Confirm</button>
                <p id="placeholder_p"></p>
                <button className="confirmationButton" onClick={()=>this.login(this.state.userName,this.state.password)}>Login</button>
                <span className="resultsBox filterStringRB" id="test_input"> Results: {JSON.stringify(this.state.userArray,null,10)}</span>
                <span className="resultsBox filterStringRB"> Results: {JSON.stringify(this.state.result,null,10)}</span>
            </div>

        )
    }
}

export default Password