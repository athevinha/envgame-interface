import Chart from "react-apexcharts";
import React, { Component } from "react";
export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <section id="evaluation">
          <div class="container">
            <form
              id="contentForm"
              name="contentForm"
              enctype="multipart/form-data"
              method="post"
              action=""
              data-h5-instanceid="0"
              novalidate="novalidate"
            >
              <h2 class="text-uppercase ct-header ct-header--smaller ct-header--underline">
                We are ready for your next project
              </h2>
              <hr />
              <p id="eval-anchor">
                Thanks again for looking over our website and considering us for
                help with your project. Please take a moment and fill out as
                much of the form below as you can, and someone will quickly
                respond to your inquiry.
              </p>
              <div class="row">
                <div class="col-md-8">
                  <div class="form-group">
                    <label class="sr-only" for="name">
                      Name
                    </label>
                    <input
                      name="name"
                      id="name"
                      class="form-control validate[required]"
                      type="text"
                      value=""
                      placeholder="Name *"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label class="sr-only" for="email">
                      Email
                    </label>
                    <input
                      name="email"
                      id="email"
                      class="form-control validate[required,custom[email]]"
                      type="email"
                      value=""
                      placeholder="Email *"
                    />
                    <input
                      type="hidden"
                      name="formfields[fromEmail]"
                      id="fromEmail"
                      value=""
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <label class="sr-only" for="phone">
                      Phone
                    </label>
                    <input
                      name="phone"
                      id="phone"
                      class="form-control h5-phone validate[required,custom[phone]]"
                      type="tel"
                      value=""
                      placeholder="Phone *"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label class="sr-only" for="company">
                      Company / Organization
                    </label>
                    <input
                      name="company"
                      id="company"
                      class="form-control validate[required]"
                      type="text"
                      value=""
                      placeholder="Company / Organization *"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label class="sr-only" for="projecttype">
                      Topic
                    </label>
                    <select
                      class="form-control selectized"
                      id="projecttype"
                      name="Project Type"
                      placeholder="Topic"
                      tabindex="-1"
                    >
                      <option value="">Your Topic</option>
                      <option value="Topic Type 1">Project Type 1</option>
                      <option value="Topic Type 2">Project Type 2</option>
                      <option value="Topic Type 3">Project Type 3</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="form-group form-group--wide">
                <label class="sr-only" for="details">
                  How Can We Help You?
                </label>
                <textarea
                  name="details"
                  rows="5"
                  id="details"
                  class="form-control validate[required]"
                  placeholder="How Can We Help You? *"
                  cols="30"
                />
                <button class="btn btn-primary btn-form" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}
