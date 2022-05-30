import React, { useState } from "react";
import "./JobPost.css";
const JobPost = () => {
  const [formData, setFormData] = useState({
    Title: "",
    Location: "",
    ExperienceMin: "",
    ExperienceMax: "",
    Description: "",
    Category: "",
    FunctionalArea: "",
    GraduatingYearMin: "",
    GraduatingYearMax: "",
    Tags: "",
  });

  const formHandler = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(
        "http://localhost:8001/v1jobs/job",
        requestOptions
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="container p-5 my-5 bg-light">
      <form onSubmit={formHandler}>
        <h3 className="mb-4">Post Job</h3>
        {/* Basic Details */}
        <section>
          <h2 className="text-primary">Basic Details</h2>
          <hr />
          <div className="form-group">
            <label>Job Title *</label>
            <input
              className="form-control"
              placeholder="Write a title that appropriately describes this job"
              required
              name="Title"
              value={formData.Title}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Location *</label>
            <input
              className="form-control"
              placeholder="+ Add location"
              required
              name="Location"
              value={formData.Location}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Years of experience *</label>
            <div className="row">
              <div className="col-sm-6">
                <select
                  className="form-control"
                  required
                  name="ExperienceMin"
                  value={formData.ExperienceMin}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                >
                  <option disabled value="">
                    Select Min
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="col-sm-6">
                <select
                  className="form-control"
                  required
                  name="ExperienceMax"
                  value={formData.ExperienceMax}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                >
                  <option disabled value="">
                    Select Max
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Job Description *</label>
            <textarea
              className="form-control"
              placeholder="Describe the roles and responsibilities, skills required for the job and help the candidates understand the role better"
              required
              rows={5}
              name="Description"
              value={formData.Description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
                })
              }
            ></textarea>
          </div>
        </section>
        {/* Targeting */}
        <section className="mt-5">
          <h2 className="text-primary">Targeting</h2>
          <hr />
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>Category *</label>
                <select
                  className="form-control"
                  required
                  name="Category"
                  value={formData.Category}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                >
                  <option disabled value="">
                    Category
                  </option>
                  <option>Category 1</option>
                  <option>Category 2</option>
                  <option>Category 3</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Functional Area *</label>
                <select
                  className="form-control"
                  required
                  name="FunctionalArea"
                  value={formData.FunctionalArea}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                >
                  <option disabled value="">
                    Functional Area
                  </option>
                  <option>Functional Area 1</option>
                  <option>Functional Area 2</option>
                  <option>Functional Area 3</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Graduating Year *</label>
                <select
                  className="form-control"
                  required
                  name="GraduatingYearMin"
                  value={formData.GraduatingYearMin}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                >
                  <option disabled value="">
                    Min Batch
                  </option>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>&nbsp;</label>
                <select
                  className="form-control"
                  required
                  name="GraduatingYearMax"
                  value={formData.GraduatingYearMax}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                >
                  <option disabled value="">
                    Max Batch
                  </option>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                </select>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                <label>Tags *</label>
                <textarea
                  className="form-control"
                  required
                  name="Tags"
                  value={formData.Tags}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                ></textarea>
              </div>
            </div>
          </div>
        </section>
        <section className="row">
          <div className="col-12 d-flex align-items-center text-center">
            <button type="submit" className="btn btn-primary">
              Post Job
            </button>
            <button type="submit" className="btn btn-outline-primary mx-4">
              Post Job and Add Another job
            </button>
            <input
              type="reset"
              className="text-primary"
              value="Cancel"
              style={{ border: "none", background: "none", cursor: "pointer" }}
            />
          </div>
        </section>
      </form>
    </div>
  );
};

export default JobPost;
