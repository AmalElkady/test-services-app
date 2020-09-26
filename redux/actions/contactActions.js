import TYPES from "../types";

export const SendContactUsRequest = data => {
  return async dispatch => {
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
      dispatch({
        type: TYPES.ADD_CONTACT_REQUEST,
        payload: { data, status: res.status, message: re.message }
      });
    } catch (errors) {
      return errors;
    }
  };
};
