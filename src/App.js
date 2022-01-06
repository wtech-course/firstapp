import React , { Component } from "react";
import AddUser from "./Component/AddUser";
import Users from "./Component/Users";

class App extends Component {

  addUser(newUser){
    let updateUser=this.state.users;
    updateUser.push(newUser);
    //fetch create işlemi yapılacak
    fetch("https://localhost:44363/api/company/create", {
      method: 'POST',
      headers: new Headers({
                 'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        }),
        body: JSON.stringify({
          updateUser
       })
    })
    .then((response) => response.text())
    .then((responseText) => {
      alert(responseText);
    })
    .catch((error) => {
        console.error(error);
    });
    

  }
//  deleteUser(id) {
//    let updateUser=this.state.users;
//    updateUser=updateUser.filter(user=>user.id!==id);
//    //state direct Immutable
//    this.setState({
//      users:updateUser
//    })
//  }

  constructor(props) {
    super(props);
  
    this.state={
      users: 
    [
        {
          id:0,
          companyName:"",
          companyNumber:"",
          address:""
        }    
        
    ]
    };
    // this.deleteUser=this.deleteUser.bind(this);
    this.addUser=this.addUser.bind(this);
  }

  render(){

    return (
      <div className="container">
       <h4>REACT UYGULAMASI</h4>
       <hr/>
       <AddUser addUser={this.addUser}/>
       <hr/>
       <Users deleteUser={this.deleteUser} users={this.state.users}/>
      </div>
    );
  }
 

} 

export default App;
