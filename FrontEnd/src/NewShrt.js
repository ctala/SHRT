import React, { Component } from 'react'
import { Input, Select, Icon, Button } from "antd";
import { Row, Col, Alert } from "antd";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Naito from './Naito';
import ShowNew from './ShowNew';


class NewShrt extends Naito {
  constructor(props) {
    super(props);

    this.state={new:null}
    this.url=""

    this.create = () => {
        console.log(this.url);
        if ( this.url !=""){
            let data = {url:this.url}
          this.Post("urls", data, url => {
            url.url = this.url
            this.setState({new:url})
            this.props.new(url);
          });
        }
    };
    this.handleChange = (event)=> {
    this.url=event.target.value

  } ;
  }


  render() {
    return <div className="panel panel-default">
        <div className="panel-heading">
          <i className="fa fa-stack-overflow fa-fw" /> Crear un shrt Link
        </div>
        {/* /.panel-heading */}
        <div className="panel-body">
          <Row>
            <Col span={18}>
              <div style={{ marginBottom: 16 }}>
                <Input addonAfter={<Icon type="search" />} placeholder="Link a acortar" onChange={this.handleChange.bind(this)} />
              </div>
            </Col>
            <Col span={6}>
              <Button type="primary" onClick={this.create.bind(this)}>
                Crear
              </Button>
            </Col>
          </Row>
          {this.state.new ? <ShowNew new={this.state.new} /> : null}
        </div>
      </div>;
  }
}

export default NewShrt;