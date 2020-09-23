import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
//import { toast } from "react-toastify";

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

  const [result, setResult] = useState({ state: 0, message: "" });

  const onSubmit = async data => {
    try {
      const res = await fetch("./api/contact", {
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
        //toast.success(re.message);
      } else {
        setResult({ state: 2, message: re.message });
        // toast.error("something wrong.");
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
          {result.message} <i class="fas fa-thumbs-up"></i>
        </div>
      )}
      {result.state === 2 && (
        <div className="fail-meg">
          {result.message} <i class="fas fa-times-circle"></i>
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
