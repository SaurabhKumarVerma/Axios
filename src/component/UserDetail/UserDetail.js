import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

export default class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { UserDetail } = this.props;
    return (
      <>
        <div>
          <Card key={UserDetail.index}>
            <Card.Body>{UserDetail.name}</Card.Body>
          </Card>
          <br></br>
        </div>
      </>
    );
  }
}
