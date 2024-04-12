import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export const StudentList = (props) => {

  const navigate = useNavigate();
  const allData = useSelector((state) => state);

  const editHandler = (index) => {
    navigate("/Registerform", {
      state: {
        data: allData[index],
        index,
      },
    });
  };

  return (
    <>
      <div className="mylist-info">
        <div>
          <p className="stulist-head">Student List</p>
        </div>
        <div>
          <button className="btn btn-primary ">
            <Link to="/RegisterForm">
              Add List
              <IoIcons.IoIosPersonAdd></IoIcons.IoIosPersonAdd>
            </Link>
          </button>
        </div>
      </div>

      <Table className="mt-5" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Father Name</th>
            <th>Date Of Birth</th>
            <th>Mother Name</th>
            <th>City</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>State</th>
            <th>Pincode</th>
            <th>Address</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {allData?.map((data, index) => {
            return (
              <tr>
                <td>{data?.name}</td>
                <td>{data?.fathername}</td>
                <td>{data?.datepic}</td>
                <td>{data?.mothername}</td>
                <td>{data?.city}</td>
                <td>{data?.email}</td>
                <td>{data?.phone}</td>
                <td>{data?.state}</td>
                <td>{data?.pincode}</td>
                <td>{data?.Address}</td>
                <td>
                  <div>
                    <button
                      className="btn btn-success"
                      style={{ cursor: "pointer" }}
                      onClick={() => editHandler(index)}
                    >
                      Edit
                      <span className="m-1">
                        <FaIcons.FaEdit />
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
