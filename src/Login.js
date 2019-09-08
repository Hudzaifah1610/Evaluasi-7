import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./Style.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      token: "",
      isLoading: false
    };
    this.signIn = this.signIn.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  signIn = i => {
    i.preventDefault();

    const dataInput = {
      username: this.state.username,
      password: this.state.password
    };

    this.setState({
      isLoading: true
    });

    axios
      .post(
        "https://penjualanapp-api.herokuapp.com/api/v1/auth/login",
        dataInput
      )
      .then(res => {
        localStorage.setItem("token", res.data.data.token);
        console.log(res);
        this.setState({
          token: res.data.data.token,
          isLoading: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { isLoading } = this.state;
    if (localStorage.getItem("token")) {
      return <Redirect to="/home" signOut={this.logout} />;
    } else if (isLoading === true) {
      return <div>Loading....</div>;
    }
    return (
      <body>
        <div className="bg"></div>
        <div className="modal">
          <div className="card">
            <div class="title">Your Account</div>
            <form className="form" onSubmit={this.signIn}>
              <div className="form-sign">
                {/* <label>Username</label> */}
                <div className="input-group">
                  <input
                    autocomplete="off"
                    placeholder="Username"
                    onChange={this.handleChange}
                    type="text"
                    name="username"
                    value={this.state.username}
                  />
                </div>
              </div>

              <div className="form-sign">
                {/* <label>Password</label> */}
                <div className="input-group">
                  <input
                    placeholder="Password"
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    value={this.state.password}
                  />
                </div>
              </div>

              <button className="submit" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </body>
    );
  }
}

export default Login;
