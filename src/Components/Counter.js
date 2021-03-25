import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import { increment } from "../Counter/reducer/counterReducer";

const Counter = ({ count, increment }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card m-5">
            <div className="body">
              <p className="text-center m-4">{count}</p>
            </div>
            <div className="card-footer p-4 text-center">
              <button onClick={increment} className="btn btn-primary">
                Increment
              </button>
              <button className="btn btn-secondary mx-2">Decrement</button>
              <button className="btn btn-danger">Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { count: state.counter.count };
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
