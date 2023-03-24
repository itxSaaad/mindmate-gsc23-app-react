import React from "react";

const Message = ({ type, children }) => {
  const successStyles =
    "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative";
  const warningStyles =
    "bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative";
  const errorStyles =
    "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative";

  const [errorCode, errorMessage] = children.split(": ");

  let alertStyle = "";

  switch (type) {
    case "success":
      alertStyle = successStyles;
      break;
    case "warning":
      alertStyle = warningStyles;
      break;
    case "error":
      alertStyle = errorStyles;
      break;
  }

  return (
    <div className={alertStyle} role="alert">
      <strong className="font-bold">{errorCode} </strong>
      <span className="block sm:inline">{errorMessage}</span>
    </div>
  );
};

export default Message;
