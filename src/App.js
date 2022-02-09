import React from 'react';
import { 
  BrowserRouter,
  Switch,
  Route
 }  from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import MyContext, { Provider } from './Components/StateContext';
import MainPage from './Components/MainPage';




class App extends React.Component {
  constructor(props){
    super(props)

    this.state={
      userList:[],
      loginUser:null,
      isLogin:false
    }
    this.onAddUser=this.onAddUser.bind(this)
    this.checkLogin=this.checkLogin.bind(this)
    this.checkSignOut=this.checkSignOut.bind(this)
    this.handleLoginClick=this.handleLoginClick.bind(this)
  }
  static contextType =MyContext
  onAddUser(obj){
    const updatedlist = [...this.state.userList,obj ]

    this.setState({
        userList: updatedlist
  })
}
handleLoginClick(item){
  this.setState({loginUser:item})
}


checkLogin(){
  this.setState({isLogin:true})
}
checkSignOut=()=>{
  this.setState({
    isLogin:false,
    loginUser:null
  })
}


  render(){
    const data={
      list:this.state.userList,
      isLogin:this.state.isLogin,
      loginUser:this.state.loginUser
    }
    console.log(data)
  return (

    <div className="App">
      
      <Provider value={data}>
      <BrowserRouter>
      <Switch>
      
        <Route exact path="/"> <MainPage checkSignOut={this.checkSignOut} /> </Route>
        <Route exact path="/register"> <Register onAddUser={this.onAddUser} /> </Route> 
        <Route exact path="/login"> <Login checkLogin={this.checkLogin} handleLoginClick={this.handleLoginClick}  /> </Route>

      
        </Switch>
      </BrowserRouter>
      </Provider>

    </div>
  );
}
}

export default App;
