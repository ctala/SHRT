import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Naito from './Naito';
import { Alert, notification } from "antd";

class Register extends Naito {
  constructor(props) {
    super(props);

    this.state={register:null}
    this.user = {name:"",lastname:"",email:"",passwd:""};
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePasswd = this.handleChangePasswd.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.user.name = event.target.value;
  }

  handleChangeLastName(event) {
    this.user.lastname = event.target.value;
  }

  handleChangeEmail(event) {
    this.user.email = event.target.value;
  }

  handleChangePasswd(event) {
    this.user.passwd = event.target.value;
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.user.name == "" || this.user.lastname == "" || this.user.email == "" || this.user.passwd == "")
          notification.open({
            message: "Te falta rellenar un campo",
            description:
              ""
          });
    else
    this.Post(
        "register",
        this.user,
        res => {
          this.setState({ register: res });
        }
      );
  }

  render() {
    return <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="login-panel panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Registrate en short link</h3>
              </div>
              <div className="panel-body">
                 <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        {!this.state.register ? <div>
                      <div className="form-group">
                        <input className="form-control" placeholder="Nombre" name="text" type="text" onChange={this.handleChangeName} />
                      </div>

                      <div className="form-group">
                        <input className="form-control" placeholder="Apellido" name="text" type="text" onChange={this.handleChangeLastName} />
                      </div>

                      <div className="form-group">
                        <input className="form-control" placeholder="E-mail" name="email" type="email" onChange={this.handleChangeEmail} />
                      </div>
                      <div className="form-group">
                        <input className="form-control" placeholder="Password" name="password" type="password" onChange={this.handleChangePasswd} defaultValue={""} />
                      </div>

                      <input type="submit" value={"Crear Cuenta"} className="btn btn-lg btn-success btn-block" />
                      </div>
 : <Alert message={this.state.register.msg} type="success" /> }
 <br/>
                      <Link className="btn btn-lg btn-info btn-block" to="/">
                        {" "}
                        Loggearme
                      </Link>
                    </fieldset>
                  </form>

          
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default Register