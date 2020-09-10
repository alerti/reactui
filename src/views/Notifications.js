
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  // Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

class Notifications extends React.Component {
  notify = place => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>E-pesa</b> We are here to serve you
          </div>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  };
  render() {
    return (
      <>
        <div className="content">
          <div className="react-notification-alert-container">
            <NotificationAlert ref="notificationAlert" />
          </div>
          <Row>
            <Col md="11 p-8">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Notifications </CardTitle>
                </CardHeader>
                <CardBody>
                  <Alert color="info">
                    <span>Incase of anything please email us</span>
                  </Alert>
                 
                  
                  <UncontrolledAlert className="alert-with-icon" color="danger">
                    <span
                      className="tim-icons icon-bell-55"
                      data-notify="icon"
                    />
                    <span data-notify="message">
                      We have approved your accout to transact in our system, you can sent upto 400.000 through our channels.
                      Thanks
                      Epesa
                    </span>
                  </UncontrolledAlert>
                </CardBody>
              </Card>
            </Col>
            
            <Col md="11">
              <Card>
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col className="ml-auto mr-auto text-center" md="6">
                        <CardTitle tag="h4">
                          E-PESA<p className="category">
                            
                          </p>
                        </CardTitle>
                      </Col>
                    {/* </Row>
                    <Row> */}
                      {/* <Col className="ml-auto mr-auto" lg="8">
                        <Row>
                          <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick={() => this.notify("tl")}
                            >
                              Top Left
                            </Button>
                          </Col> */}
                          {/* <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick={() => this.notify("tc")}
                            >
                              Top Center
                            </Button>
                          </Col> */}
                          {/* <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick={() => this.notify("tr")}
                            >
                              Top Right
                            </Button>
                          </Col> */}
                        {/* </Row>
                      </Col> */}
                    {/* </Row>
                    <Row> */}
                      {/* <Col className="ml-auto mr-auto" lg="8">
                        <Row>
                          <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick={() => this.notify("bl")}
                            >
                              Bottom Left
                            </Button> */}
                          {/* </Col> */}
                          {/* <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick={() => this.notify("bc")}
                            >
                              Bottom Center
                            </Button>
                          </Col>
                          <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick={() => this.notify("br")}
                            >
                              Bottom Right
                            </Button>
                          </Col> */}
                        {/* </Row>
                      </Col> */}
                    </Row> 
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Notifications;
