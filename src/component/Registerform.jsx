import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import * as FaIcons from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { EducationalComponent } from "./EducationalComponent";

const RegisterForm = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initial = {
    schoolcollegename: "",
    educationtype: "",  
    percentage: "",
    yearofpassing: "",
  };
  const initialValues = {
    name: "",
    fathername: "",
    mothername: "",
    city: "",
    email: "",
    phone: "",
    state: "",
    pincode: "",
    Address: "",
    datepic: "",
  };
  const stateSelection = ["Tamilnadu", "Kerala", "Karnataka", "Delhi"];

  const [educationData, setEducationData] = useState([initial]);
  const [data, setData] = useState(initialValues);



  useEffect(() => {
    if (location?.state) {
      const { education, ...rest } = location.state.data;
      setData(rest);
      setEducationData(education);
    }
  }, []);

  const handleComponent = () => {
    const temp = [...educationData];
    temp.push(initial);
    setEducationData(temp);
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const add = () => {
    const finalData = { ...data, education: educationData };
    if (location?.state?.data) {
      dispatch({
        type: "update",
        index: location?.state?.index,
        payload: finalData,
      });
    } else {
      dispatch({ type: "add", payload: finalData });
    }
    navigate("/");
  };

  return (
    <div className="br-exple mycontainer">
      <div className="p-3">
        <p className="title">Register Now</p>
      </div>
      <div className="myform">
        <Row className="mb-3" Col="6">
          <Col md={3}>
            <Form.Group as={Col}>
              <Form.Label className="mylable">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={onChange}
                value={data.name}
                className="formclear"
                required
              ></Form.Control>
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group as={Col}>
              <Form.Label className="mylable">Father Name</Form.Label>
              <Form.Control
                type="text"
                name="fathername"
                placeholder="Enter Father name"
                onChange={onChange}
                value={data.fathername}
                className="formclear"
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group as={Col}>
              <Form.Label className="mylable">Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                name="datepic"
                placeholder="Date Of Birth"
                onChange={onChange}
                value={data.datepic}
                className="formclear"
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <Form.Group as={Col}>
              <Form.Label className="mylable">Mother Name</Form.Label>
              <Form.Control
                type="text"
                name="mothername"
                placeholder="Enter Mother name"
                onChange={onChange}
                value={data.mothername}
                className="formclear"
              ></Form.Control>
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group as={Col}>
              <Form.Label className="mylable">City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                placeholder="Enter City"
                onChange={onChange}
                value={data.city}
                className="formclear"
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3 mt-3" Col="6">
          <Col md={3}>
            <Form.Group as={Col}>
              <Form.Label className="mylable">Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Enter Email"
                onChange={onChange}
                value={data.email}
                className="formclear"
              ></Form.Control>
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group as={Col}>
              <Form.Label className="mylable">Mobile No</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                placeholder="Enter Mobile"
                onChange={onChange}
                value={data.phone}
                className="formclear"
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3" Col="6">
          <Col md={3}>
            <Form.Group as={Col}>
              <Form.Label className="mylable">State</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="state"
                value={data.state}
                onChange={onChange}
              >
                <option disabled selected>
                  Choose State
                </option>
                {stateSelection.map((states) => (
                  <option>{states}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group as={Col}>
              <Form.Label className="mylable">Pincode</Form.Label>
              <Form.Control
                type="number"
                name="pincode"
                placeholder="Enter Pincode"
                onChange={onChange}
                value={data.pincode}
                className="formclear"
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
              <Form.Label className="mylable">Address</Form.Label>
              <Form.Control
                type="textarea"
                name="Address"
                placeholder="Enter Address"
                onChange={onChange}
                value={data.Address}
                className="formclear"
                as="textarea"
                rows="3"
                style={{ resize: "none" }}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <div>
          <p className="education">
            Education{" "}
            <span className="icon" onClick={handleComponent}>
              <FaIcons.FaPlusSquare />
            </span>
          </p>
        </div>

        {educationData?.map((comp, idx) => {
          return (
            <EducationalComponent
              index={idx}
              setData={setEducationData}
              data={comp}
               key={idx}
            />
          );
        })}

        <div className="mt-3 ">
          <button
            onClick={add}
            className="btn btn-primary align-self-start m-2"
          >
            {location?.state?.data ? "Update" : "Submit"}
          </button>

          <button className="btn btn-danger">
            <Link to="/">Cancel</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
