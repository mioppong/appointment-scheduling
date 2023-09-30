import React from "react";
// src/AppointmentForm.js
import Lottie from "lottie-react";
import success from "./animations/success.json";
const SuccessAnimation = () => {
  return (
    <div>
      <Lottie animationData={success} loop={false} autoplay={true} size={20} />
    </div>
  );
};

export default SuccessAnimation;
