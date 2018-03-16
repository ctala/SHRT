import React, { Component } from "react";
import { Table, Icon, Divider } from "antd";
import { Modal, Button } from "antd";

import Naito from "./Naito";

const int_to_text = num => {
  if (num < 26) {
    return String.fromCharCode(97 + num);
  } else {
    return String.fromCharCode(65 + (num - 26));
  }
};

const encode = num => {
  let out = "";
  num = num;
  while (num > 52 && num != 0) {
    //		console.log("ACO",num%52)
    out = out + int_to_text(num % 52 - 1);
    num = num - num % 52;
    num = num / 52;
  }
  //	console.log("ACO",num-1)
  out = out + int_to_text(num - 1);
  return out;
};

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street"
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  }
];

const columns = [
  {
    title: "Shrt",
    dataIndex: "shrt",
    key: "shrt"
  },
  {
    title: "Url",
    dataIndex: "url",
    key: "url"
  },
  {
    title: "Visitas",
    dataIndex: "visitas",
    key: "visitas"
  }
];

const columns_records = [
  {
    title: "N#",
    dataIndex: "n",
    key: "n"
  },
  {
    title: "IP",
    dataIndex: "ip",
    key: "ip"
  },
  {
    title: "Origen",
    dataIndex: "origin",
    key: "origin"
  },
  {
    title: "Agente",
    dataIndex: "user_agent",
    key: "user_agent"
  },
  {
    title: "Visita",
    dataIndex: "visita",
    key: "visita"
  }
];

class Shrt extends Naito {
  constructor(props) {
    super(props);

    this.state = { dataSource: dataSource, visible: false, records: [] };
    this.GET("urls", {}, shrts => {
      let data = [];
      for (let shrt of shrts) {
        let showModal = () => {
          let records = [];
          for (let ix in shrt.records) {
            let fecha = new Date(shrt.records[ix].createdAt);
            records.push({
              n: +ix + 1,
              ip: shrt.records[ix].ip,
              origin: shrt.records[ix].origin,
              user_agent: shrt.records[ix].user_agent.split(" ")[0],
              visita: (
                <div>
                  {fecha.getDate()}/{fecha.getMonth()}/{fecha.getFullYear()}{" "}
                  {fecha.getHours()}:{fecha.getMinutes()}
                </div>
              )
            });
          }
          this.setState({ visible: true, records: records });
        };
        let sht = encode(shrt.id);
        data.push({
          shrt: (
            <a href={`http://${this.domain}/` + sht}>
              {`http://${this.domain}/` + sht}
            </a>
          ),
          url: <a href={shrt.url}> {shrt.url} </a>,
          visitas: (
            <div>
              {shrt.records.length} visitas {"  "}
              <Button type="primary" onClick={showModal}>
                Ver más
              </Button>
            </div>
          )
        });
      }

      this.setState({ dataSource: data });
    });

    this.showModal = () => {
      this.setState({
        visible: true
      });
    };
    this.handleOk = e => {
      console.log(e);
      this.setState({
        visible: false
      });
    };
    this.handleCancel = e => {
      console.log(e);
      this.setState({ visible: false });
    };
  }

  componentWillReceiveProps(next) {
    let data = this.state.dataSource;

    for (let shrt of next.shrts) {
      let showModal = () => {
        this.setState({ visible: true, records: [] });
      };
      data.push({
        shrt: (
          <a href={`http://${this.domain}/` + shrt.short}>
            {`http://${this.domain}/` + shrt.short}
          </a>
        ),
        url: <a href={shrt.url}> {shrt.url} </a>,
        visitas: (
          <div>
            {0} visitas {"  "}
            <Button type="primary" onClick={showModal}>
              Ver más
            </Button>
          </div>
        )
      });
    }
    this.setState({ dataSource: data });
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <i className="fa fa-bell fa-fw" /> Mis Urls
        </div>

        <div className="panel-body">
          <Table dataSource={this.state.dataSource} columns={columns} />
        </div>

        <Modal
          width={900}
          title="Visitas el shrt link "
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Table dataSource={this.state.records} columns={columns_records} />
        </Modal>
      </div>
    );
  }
}

export default Shrt;
