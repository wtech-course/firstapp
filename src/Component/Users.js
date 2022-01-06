import React, { Component } from "react";


class Users extends Component {
  //Delete Method
  onDeleteClick(id) {
    return fetch('https://localhost:44363/api/company/delete/' + id, {
      method: 'POST'
    }).then(window.location.reload())

  }
  state = {
    isLoading: true,
    data: [],
    error: null
  };
  //Get İşlemi
  getFetchUsers() {
    this.setState({
      loading: true
    }, () => {
      fetch("https://localhost:44363/api/company/GetAllData")
        .then(res => res.json())
        .then(result => this.setState({
          loading: false,
          data: result.data
        })).catch(error => (console.log(error)));
    });
  }
  componentDidMount() {
    this.getFetchUsers();
  }
  render() {
    const {users}=this.props;
    const {
      data
    } = this.state;



    return (
      <table className="table table-striped">
        <thead>
          <tr>

            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Adres</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(data => {

              return (
                <tr key={data.id}>
                  <td>{data.companyNumber}</td>
                  <td>{data.companyName}</td>
                  <td>{data.address}</td>
                  <td>
                    <button type="submit" className="btn btn-warning">
                      Edit
                    </button>
                  </td>

                  <td>
                    <button onClick={this.onDeleteClick.bind(this, data.id)} type="submit" className="btn btn-danger">
                      Delete
                    </button>
                  </td>

                </tr>)

            })

          }



        </tbody>
      </table>
    )




  }
}
export default Users;
