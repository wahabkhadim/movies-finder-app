import React from "react";
import { withRouter } from "react-router-dom";
import Header from "./Header";




class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            list: []
        }
        this.hanldeFirstName = this.hanldeFirstName.bind(this)
        this.handleLastName = this.handleLastName.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleUserName = this.handleUserName.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    hanldeFirstName(e) {
        this.setState({ firstname: e.target.value })
    }
    handleLastName(e) {
        this.setState({ lastname: e.target.value })
    }
    handleUserName(e) {
        this.setState({ username: e.target.value })
    }
    handlePassword(e) {
        this.setState({ password: e.target.value })
    }
    handleSubmit(e) {

        if (this.state.firstname && this.state.lastname && this.state.username && this.state.password) {
            const obj = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                username: this.state.username,
                password: this.state.password
            }
            this.props.onAddUser(obj)
            this.setState({
                firstname: "",
                lastname: "",
                username: "",
                password: ""
            })
           this.props.history.push("/login")


        }
        else {
            alert("Please fill all fields")
        }
    }



    render() {
        console.log(this.props)
        return (
            
                <div>
                    <Header />
                    <div className="login-compl">

                        <div className="login-main">
                            <div>
                                <h2 id="registerid">Register Page</h2>
                            </div>
                            <div>
                                <input type="text" placeholder="First Name" className="idofinput" onChange={this.hanldeFirstName}
                                    value={this.state.firstname} />
                            </div>
                            <div>
                                <input type="text" placeholder="Last Name" className="idofinput" onChange={this.handleLastName}
                                    value={this.state.lastname} />
                            </div>
                            <div>
                                <input type="text" placeholder="User Name" className="idofinput" onChange={this.handleUserName}
                                    value={this.state.username} />
                            </div>
                            <div>
                                <input type="text" placeholder="Password" className="idofinput" onChange={this.handlePassword}
                                    value={this.state.password} />
                            </div>
                            <div>
                                <button id="loginbutton"
                                    onClick={this.handleSubmit}
                                > Register </button>
                            </div>
                        </div>
                    </div>
                </div>
  
        )
    }

}
export default  withRouter(Register);
