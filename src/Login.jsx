import React,{Component} from 'react'

export default class Login extends Component{
    constructor() {
        super();
        this.state ={
            email:"",
            password:"",
            emailError: "",
            passwordError: ""
        }
    }

    submit() {
        console.log(this.state);
        this.setState({
            emailError:"",
            passwordError:""
        })
        if(this.valid()) {
            alert("Form has been submited");
        }
    }

    valid() {
        if(this.state.password === "" && this.state.email === ""){
            this.setState({
                emailError:"Email is required",
                passwordError: "Password is required"
            })
        }else if(this.state.email === ""){
            this.setState({
                emailError:"Email is required",
            })
        }else if(this.state.password === ""){
            this.setState({
                passwordError: "Password is required"
            })
        }else{
            return true;
        }
    }

    render() {
        return(
            <>
            <div>
                <h1>Login Form </h1>

                <input  type='text' name='email' placeholder='Email' onChange={(e)=>{this.setState({email: e.target.value})}} /><br /><br />
                <p style={{color:'red', fontSize: '15px'}}>{this.state.emailError}</p>
                <input type='password' name='password' placeholder='Password' onChange={(e) => {this.setState({password : e.target.value})}} /><br /><br />
                <p style={{color:'red', fontSize: '15px'}}>{this.state.passwordError}</p>
                <button onClick={() => this.submit()}>Submit</button>
            </div>
            </>
        )
    }
}