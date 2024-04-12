import { useState } from "react";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import * as FaIcons from "react-icons/fa";


export const EducationalComponent = (props) => {
  const { data, setData, index } = props;

  const [showInput, setShowInput] = useState(true);

  const stuselection = ["SSLC", "HSC", "UG", "PG", "PHD"];

  const onChange = (e) => {
    setData((prevState) => {
      const temp = [...prevState];
      temp[index] = { ...props.data, [e.target.name]: e.target.value };
      return temp;
    });
  };
  return (
    <div>
      <Row className="mb-3" Col="6">
        {showInput ? (
          <>
            <Col md={6}>
              <Form.Group as={Col}>
                <Form.Label className="mylable">Education Type</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="educationtype"  
                  value={props.data.educationtype}
                  onChange={onChange}
                >
                  <option disabled selected>
                    Choose education
                  </option>

                  {stuselection.map((opt) => (
                    <option>{opt}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </>
        ) : (
          <></>
        )}
      </Row>

      <Row>
        {showInput && (
          <Col md={6}>
            <Form.Group as={Col}>
              <Form.Label className="mylable">School / college Name</Form.Label>
              <Form.Control
                type="text"
                name="schoolcollegename"
                placeholder="Enter School or College Name"
                onChange={onChange}
                className="formclear"
                value={props.data.schoolcollegename}
              ></Form.Control>
            </Form.Group>
          </Col>
        )}
      </Row>

      <Row>
        {showInput && (
          <Col md={3}>
            <Form.Group as={Col}>
              <Form.Label className="mylable"> Percentage</Form.Label>
              <Form.Control
                type="number"
                name="percentage"
                placeholder="Enter percentage"
                onChange={onChange}
                className="formclear"
                value={props.data.percentage}
              ></Form.Control>
            </Form.Group>
          </Col>
        )}

        {showInput && (
          <Col md={3}>
            <Form.Group as={Col}>
              <Form.Label className="mylable">Year of Passing</Form.Label>
              <Form.Control
                type="number"
                name="yearofpassing"
                placeholder="Enter Year of passing"
                onChange={onChange}
                className="formclear"
                value={props.data.yearofpassing}
              ></Form.Control>
            </Form.Group>
          </Col>
        )}
      </Row>
      {showInput && (
        <Row className="mt-3">
          <Col md={3}>
            <button
              className="btn btn-secondary"
              onClick={() => setShowInput(!showInput)}
            >
              Remove
              <span className="m-1">
                <FaIcons.FaTrash></FaIcons.FaTrash>
              </span>
            </button>
          </Col>
        </Row>
      )}
    </div>
  );
};
