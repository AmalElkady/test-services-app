import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const schema = yup.object().shape({
  request: yup.string().required()
});

const RequestSupportForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  //result => catch the response of request
  const [result, setResult] = useState({ state: 0, message: "" });

  const onSubmit = async data => {
    try {
      //For testing (customer ID  will get from logged user)
      data.customer = "1";
      console.log("data ", data);
      const res = await fetch("./api/requestSupport", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data
        })
      });
      const re = await res.json();
      if (res.status === 200) {
        setResult({ state: 1, message: re.message });
      } else {
        setResult({ state: 2, message: re.message });
      }
    } catch (err) {
      console.log("error ", err);
      setResult({ state: 2, message: re.message });
    }
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
