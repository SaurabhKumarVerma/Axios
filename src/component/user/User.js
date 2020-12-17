import React from "react";
import secureaxios from "../../config/secureaxios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Button } from "react-bootstrap";
import UserDetail from "../UserDetail/UserDetail";
import "./User.css";

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      tempUser: ""
    };
  }

  componentDidMount() {
    secureaxios
      .get("/users")
      .then((res) => res.data)
      .then((data) => this.setState({ user: data }));

    secureaxios
      .post("/users", this.state.user)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleClick = (evt) => {
    evt.preventDefault();

    secureaxios
      .post("/users", this.state.tempUser)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log(this.state.user);
    return (
      <>
        <div>
          <div>
            <div className="navbar" bg="dark" variant="dark">
              <h2>DigiKull Student</h2>
            </div>
          </div>
          <br></br>
          <h1>Hello User</h1>
          <br></br>
          <form onSubmit={this.handleClick}>
            <input
              type="text"
              value={this.state.tempUser}
              onChange={(evt) => {
                this.setState({ tempUser: evt.target.value });
              }}
            />
            &nbsp;&nbsp;
            <button type="submit"> Add User</button>
          </form>

          <br></br>
          {this.state.user.map((item, index) => {
            return <UserDetail UserDetail={item} />;
          })}
          <br></br>
        </div>
      </>
    );
  }
}
