import React,{Component} from "react";
class AddUser extends Component{
   
    onInputChange(e){

       this.setState
        ({
        [e.target.companyName]:e.target.value,
        [e.target.companyNumber]:e.target.value,
        [e.target.address]:e.target.value
        })
    }
 
    onAddSubmit(e){
        const {addUser}=this.props;
     //create olayı
     //CompanyNumber,CompanyName,Address,CrateDate
        const newUser={           
            companyName:this.state.companyNumber,
            companyNumber:this.state.companyNumber,
            address:this.state.address
        }
        console.log("1.log",addUser);
        addUser(newUser);
        e.preventDefault();
    }
    state={
        companyName:"",
        companyNumber:"",
        address:""
    }
    render(){
        const {companyName,companyNumber,address}=this.state;
        return(

            <div className="card">
                <h4 className="card-header">Kullanıcı Ekle</h4>
                <div className="card-body">
                   <form onSubmit={this.onAddSubmit.bind(this)}>
                       <div className="form-group">
                           <label htmlFor="companyName">Şirket Adı</label>
                           <input type="text" 
                            id="companyName"
                            name="companyName"
                            placeholder="Enter Name" 
                            value={companyName} 
                            className="form-control"
                            onChange={this.onInputChange.bind(this)}/>
                        </div>
                        <div className="form-group">
                           <label htmlFor="companyNumber">Şirket Numarası</label>
                           <input type="text" 
                            id="companyNumber"
                            name="companyNumber"
                            placeholder="Enter Number" 
                            value={companyNumber} 
                            className="form-control"
                            onChange={this.onInputChange.bind(this)}/>
                        </div>
                        <div className="form-group">
                           <label htmlFor="address">Şirket Adresi</label>
                           <input type="text" 
                            id="address"
                            name="address"
                            placeholder="Enter Address" 
                            value={address} 
                            className="form-control"
                            onChange={this.onInputChange.bind(this)}/>
                        </div>
                       
                        <button type="submit" className="btn btn-danger btn-block">Save User</button>
                   </form>
                </div>
            </div>
        )
    }
}
export default AddUser;