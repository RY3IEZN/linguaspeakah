/** @format */

import React from "react";

const TextArea = ({ id, value, onChange, placeHolder }) => {
  return (
    <textarea
      value={value}
      rows={5}
      id={id}
      onChange={onChange}
      placeholder={placeHolder}
      className="py-2.5 px-4 border-none focus:outline-none block w-full border-transparent rounded-lg dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400"
    ></textarea>
  );
};

export default TextArea;
