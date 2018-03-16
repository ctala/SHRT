import React, { Component } from 'react'
import Naito from "./Naito";
import { Link } from "react-router-dom";

class Login extends Naito {
  constructor(props) {
    super(props);

    this.user = {} 
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePasswd = this.handleChangePasswd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.user.email = event.target.value;
  }

  handleChangePasswd(event) {
    this.user.passwd = event.target.value;
  }

  handleSubmit(event) {
    event.preventDefault();
   this.Post("login",this.user,(res)=>{
       if(res.status){
           this.setLogin(res)
       }
   })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="login-panel panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Ingresar a short Link</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.handleSubmit}>
                  <fieldset>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="E-mail"
                        name="email"
                        type="email"
                        onChange={this.handleChangeEmail}
                        
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        type="password"
                        onChange={this.handleChangePasswd}
                        defaultValue={""}
                      />
                    </div>

                    <input
                      type="submit"
                      value={"Ingresar"}
                      className="btn btn-lg btn-success btn-block"
                    />

                 <Link   className="btn btn-lg btn-info btn-block" to="/register">
   
                      Registrame
                    </Link>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login