import React, { Component } from "react";
import { Input, Select, Icon, Button } from "antd";
import { Row, Col, Alert, notification } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
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



class ShowNew extends Naito {
  render() {
      console.log(this.props)
    return <div>
        <Alert message="Se ha creado un nuevo shrt link" type="success" />
        <br />
        <Row>
          <Col span={8}>Nuevo Link </Col>
          <Col span={12}>{"http://"+this.domain+"/" + this.props.new.short}</Col>
          <Col span={4}>
            <CopyToClipboard text={"http://"+this.domain+"/" + this.props.new.short} onCopy={() => notification.open(
                  {
                    message: "Se ha copiado a tu portapapeles",
                    description: `se copio el url http://${this.domain}/${this.props.new.short}`
                  }
                )}>
              <Button type="info">Copiar!</Button>
            </CopyToClipboard>
          </Col>
        </Row>
      </div>;
  }
}

export default ShowNew;
