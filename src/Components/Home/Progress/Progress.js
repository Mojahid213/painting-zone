import React from "react";
import "./Progress.css";

const Progress = () => {
  return (
    <div className="progress-main">
      <div className="row d-flex align-items-center p-3">
        <div className="col-md-6">
          <h1>We are always determined to give you the best service.</h1>
          <p>
            Our customer setisfaction in increasing day by day. We always try to
            give our best to the customers. Our pricing is also very pocket
            friendly.
          </p>
        </div>
        <div className="col-md-6">
          {/* progress bar */}
          <div class="progress my-3" style={{height:'30px'}}>
            <div
              class="progress-bar progress-bar-striped bg-primary progress-bar-animated"
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{width:'100%'}}
            >
              <h5 className="m-auto">Client Satisfaction (100%)</h5>
            </div>
          </div>
          {/* progress bar */}
          <div class="progress my-3" style={{height:'30px'}}>
            <div
              class="progress-bar progress-bar-striped bg-dark progress-bar-animated"
              role="progressbar"
              aria-valuenow="95"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{width:'95%'}}
            >
              <h5 className="m-auto">On time Finish (95%)</h5>
            </div>
          </div>
           {/* progress bar */}
           <div class="progress my-3" style={{height:'30px'}}>
            <div
              class="progress-bar progress-bar-striped bg-danger progress-bar-animated"
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{width:'100%'}}
            >
              <h5 className="m-auto">Total Finished Project (4456)</h5>
            </div>
          </div>
          {/* progress bar */}
          <div class="progress my-3" style={{height:'30px'}}>
            <div
              class="progress-bar progress-bar-striped bg-success progress-bar-animated"
              role="progressbar"
              aria-valuenow="99"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{width:'99%'}}
            >
              <h5 className="m-auto">Overall service (99%)</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
