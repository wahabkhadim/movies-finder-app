import React from "react";
import { Link } from "react-router-dom"
import "../App.css"
import MyContext from "./StateContext";
import { withRouter } from "react-router-dom"



class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false
        }
        this.handleSignOut = this.handleSignOut.bind(this)
    }
    static contextType = MyContext

    handleSignOut() {
                this.props.checkSignOut()
    }

        render(){
            console.log(this.context.loginUser)
            return (
                <header className="App-header">
                    <div className="main-heading">
                        <Link to="/">MOVIES TRACKER APP</Link>
                    </div>
                    {
                     !this.context.isLogin ?
                        <div className="second-heading">
                            <div>
                                <Link to="/login">LOGIN</Link>
                            </div>
                            <div>
                                <Link to="/register">REGISTER</Link>
                            </div>
                        </div>
                        :
                            <div className="second-heading">
                                <div>
                                    <button onClick={this.handleSignOut}>Sign Out</button>
                                    <p> welcome {this.context.loginUser.username}</p>
                                </div>
                            </div>
                    }
                </header>

            )
        }
    }
export default withRouter(Header);