import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Container, Grid, Input } from "@mui/material";
import { useForm } from "react-hook-form";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Swal from "sweetalert2";
import cloudImage from "../../../../assets/images/cloud-upload.png";
import styles from "./AddPayment.module.css";

const AddPayment = () => {
  const categories = [
    {
      _id: 1,
      name: "Gold",
    },
    {
      _id: 2,
      name: "Silver",
    },
    {
      _id: 3,
      name: "Platinum",
    },
    {
      _id: 4,
      name: "Regular",
    },
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let {
      firstName,
      lastName,
      category,
      phone,
      email,
      fax,
      amount,
      details,
      address,
    } = data;
    const name = `${firstName} ${lastName}`;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("fax", fax);
    formData.append("amount", amount);
    formData.append("details", details);
    formData.append("address", address);
  };
  return (
    <Container sx={{ width: "100%", mb: 5 }}>
      <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
        <Typography>
          <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
        </Typography>
        <Typography>
          <span style={{ fontSize: "26px" }}>Personal Loan</span> <br />{" "}
          <span style={{ color: "#969494" }}>Add Payment</span>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right", my: 2 }}>
        <Button className={`${styles.designationBtn}`}>Add Person</Button>
        <Button className={`${styles.manageEmployeeBtn}`}>Add Loan</Button>
      </Box>
      <Box className={`${styles.tableContainer}`}>
        <Typography sx={{ fontWeight: "bold" }}>Add Payment</Typography>
        <hr />
        <div className="mt-2">
          <div className="form-container">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row gx-3 mb-3">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="p-3 border bg-light">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          style={{ fontWeight: "bold" }}
                        >
                          First Name{" "}
                          <sup className="text-danger fw-bold fs-6">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          style={{ background: "#E5E5E5" }}
                          {...register("firstName", { required: true })}
                        />
                        {errors.firstName && (
                          <span className="text-danger">
                            Please enter first name.
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="p-3 border bg-light">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          style={{ fontWeight: "bold" }}
                        >
                          Last Name{" "}
                          <sup className="text-danger fw-bold fs-6">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          style={{ background: "#E5E5E5" }}
                          {...register("lastName", { required: true })}
                        />
                        {errors.lastName && (
                          <span className="text-danger">
                            Please enter last name.
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="p-3 border bg-light">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          style={{ fontWeight: "bold" }}
                        >
                          Type <sup className="text-danger fw-bold fs-6">*</sup>
                        </label>

                        <select
                          className="form-select"
                          aria-label="Default select example"
                          style={{ background: "#E5E5E5" }}
                          {...register("category", { required: true })}
                        >
                          <option>-- select one --</option>
                          {categories.map((category) => (
                            <option key={category._id} value={category?.name}>
                              {category?.name}
                            </option>
                          ))}
                        </select>
                        {errors.category && (
                          <span className="text-danger">
                            Please select a type
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="p-3 border bg-light">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          style={{ fontWeight: "bold" }}
                        >
                          Phone{" "}
                          <sup className="text-danger fw-bold fs-6">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone"
                          style={{ background: "#E5E5E5" }}
                          {...register("phone", { required: true })}
                        />
                        {errors.phone && (
                          <span className="text-danger">
                            Please enter phone number.
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="p-3 border bg-light">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          style={{ fontWeight: "bold" }}
                        >
                          Email{" "}
                          <sup className="text-danger fw-bold fs-6">*</sup>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          style={{ background: "#E5E5E5" }}
                          {...register("email", { required: true })}
                        />
                        {errors.email && (
                          <span className="text-danger">
                            Please enter email.
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="p-3 border bg-light">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          style={{ fontWeight: "bold" }}
                        >
                          Fax
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Fax"
                          style={{ background: "#E5E5E5" }}
                          {...register("fax", { required: false })}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="p-3 border bg-light">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          style={{ fontWeight: "bold" }}
                        >
                          Address
                        </label>
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="Address"
                          style={{ background: "#E5E5E5" }}
                          {...register("address1", { required: false })}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="p-3 border bg-light">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          style={{ fontWeight: "bold" }}
                        >
                          Details
                        </label>
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="Details"
                          style={{ background: "#E5E5E5" }}
                          {...register("details", { required: false })}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row gx-3 mb-3">
                  {/* amount */}
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="p-3 border bg-light">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          style={{ fontWeight: "bold" }}
                        >
                          Amount
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Amount"
                          style={{ background: "#E5E5E5" }}
                          {...register("amount", { required: false })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                    <div className="p-3 border bg-light">
                      <div className="mb-3">
                        <Box sx={{ textAlign: "center", my: 2 }}>
                          <input
                            type="reset"
                            className={`${"btn"} ${styles.resetBtn}`}
                            style={{ background: "#251D58", color: "#fff" }}
                            value="Reset"
                          />
                          <input
                            type="submit"
                            className={`${"btn"} ${styles.saveBtn}`}
                            style={{ background: "#251D58", color: "#fff" }}
                            value="Save"
                          />
                        </Box>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default AddPayment;
