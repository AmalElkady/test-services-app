import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";

import { SendRequestSupport } from "../redux/actions/supportActions";

const schema = yup.object().shape({
  request: yup.string().required()
});

const RequestSupportForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });
  const status = useSelector(state => state.support.returnStatus);
  const Message = useSelector(state => state.support.returnMessage);

  //result => hold the response of request
  const [result, setResult] = useState({ state: 0, message: "" });

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 200) {
      setResult({ state: 1, message: Message });
    } else if (status === 404) {
      setResult({ state: 2, message: Message });
    } else {
      setResult({ state: 0, message: "" });
    }
  }, [status]);

  const onSubmit = async data => {
    //test for customer ID
    data.customer = "1";
    await dispatch(SendRequestSupport(data));
  };

  return (
    <>
      {result.state === 1 && (
        <div className="success-meg">
          {result.message} <i className="fas fa-thumbs-up"></i>
        </div>
      )}
      {result.state === 2 && (
        <div className="fail-meg">
          {result.message} <i className="fas fa-times-circle"></i>
        </div>
      )}
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="label">Your Request</label>
          <textarea className="input" name="request" ref={register} />
          {errors.request && (
            <p className="message">{errors.request.message}</p>
          )}
        </div>

        <input className="input" type="submit" value="send" />
      </form>
    </>
  );
};
export default RequestSupportForm;
