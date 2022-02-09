import React from "react";
import Header from "./Header";
import MyContext from "./StateContext";
import { withRouter } from "react-router-dom"

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
        this.hanldUserName = this.hanldUserName.bind(this)
        this.hanldePassword = this.hanldePassword.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    static contextType = MyContext
    hanldUserName(e) {
        this.setState({ username: e.target.value })
    }
    hanldePassword(e) {
        this.setState({ password: e.target.value })
    }
    handleClick() {
        if (this.context.list.length) {
            let specitem=this.context.list.find(item => (this.state.username === item.username && this.state.password === item.password))
            this.props.handleLoginClick(specitem)
            if(specitem) {
              this.setState({
             username:"",
             password:""
         })
         this.props.checkLogin()
         this.props.history.push("/")
          
        }
          else (
          alert("incorrect info")
          )

         
        }
        else (
            alert("please register first")
        )




    }

    render() {
        console.log(this.context.isLogin)


        return (
            <div>
                <Header />
                <div className="login-compl">
                    <div className="login-compl">
                        <div className="login-main">
                            <div>
                                <p id="idofh1">Login</p>
                            </div>
                            <div>
                                <input type="text" onChange={this.hanldUserName} placeholder="Username" className="idofinput" value={this.state.username} />
                            </div>
                            <div>
                                <input type="text" onChange={this.hanldePassword} placeholder="Password" className="idofinput" value={this.state.password} />
                            </div>
                            <div>
                                <button id="loginbutton" onClick={this.handleClick}> Login </button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default withRouter(Login);