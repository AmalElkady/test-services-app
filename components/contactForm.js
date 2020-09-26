import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";

import { SendContactUsRequest } from "../redux/actions/contactActions";

const schema = yup.object().shape({
  sender: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  phone: yup.number().positive(),
  request: yup.string().required()
});

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });
  const status = useSelector(state => state.contact.returnStatus);
  const Message = useSelector(state => state.contact.returnMessage);
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
    await dispatch(SendContactUsRequest(data));
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
          <label className="label">Your Name</label>
          <input className="input" type="text" name="sender" ref={register} />
          {errors.sender && <p className="message">{errors.sender?.message}</p>}
        </div>

        <div>
          <label className="label">Email</label>
          <input className="input" type="email" name="email" ref={register} />
          {errors.email && <p className="message">{errors.email?.message}</p>}
        </div>
        <div>
          <label className="label">Phone</label>
          <input className="input" type="number" name="phone" ref={register} />
          {errors.phone && <p className="message">{errors.phone?.message}</p>}
        </div>

        <div>
          <label className="label">Message</label>
          <textarea className="input" name="request" ref={register} />
          {errors.request && (
            <p className="message">{errors.request?.message}</p>
          )}
        </div>

        <input className="input" type="submit" value="send" />
      </form>
    </>
  );
};
export default ContactForm;
