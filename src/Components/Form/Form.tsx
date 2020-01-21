import React, { FC } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { simple } from "./ducks/actions";

interface FormProps {
  simple: typeof simple;
}

const Form: FC<FormProps> = props => {
  console.log("form")
  props.simple("inside reducer");
  return <div>Form</div>;
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      simple
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
