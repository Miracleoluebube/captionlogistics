import React from "react";

const Button = ({ styles }) => (
  <a href="https://wa.me/08067507539">
  <button  type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Contact Us
  </button>
  </a>
);



export default Button;
