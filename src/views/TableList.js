
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Transactions</CardTitle>
                  <p className="category">All transactions</p>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th className="text-center">Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Onynago ochieng</td>
                        <td>Kenya</td>
                        <td>Nairobi</td>
                        <td className="text-center">$36,738</td>
                      </tr>
                      <tr>
                        <td>Onynago ochieng</td>
                        <td>Kenya</td>
                        <td>Nairobi</td>
                        <td className="text-center">$23,789</td>
                      </tr>
                      <tr>
                        <td>Onynago ochieng</td>
                        <td>Kenya</td>
                        <td>Nairobi</td>
                        <td className="text-center">$56,142</td>
                      </tr>
                      <tr>
                        <td>Onynago ochieng</td>
                        <td>Kenya</td>
                        <td>Nairobi</td>
                        <td className="text-center">$38,735</td>
                      </tr>
                      <tr>
                        <td>Onynago ochieng</td>
                        <td>Kenya</td>
                        <td>Nairobi</td>
                        <td className="text-center">$63,542</td>
                      </tr>
                      <tr>
                        <td>Onynago ochieng</td>
                        <td>Kenya</td>
                        <td>Nairobi</td>
                        <td className="text-center">$78,615</td>
                      </tr>
                      <tr>
                        <td>Onynago ochieng</td>
                        <td>Kenya</td>
                        <td>Nairobi</td>
                        <td className="text-center">$98,615</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
