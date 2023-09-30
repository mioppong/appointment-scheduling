import React from "react";
import SuccessAnimation from "./SuccessAnimation";
import { Button, Typography } from "@mui/material";
import { format } from "date-fns";

const ScheduledSuccess = ({ date, time, formSubmitted, resetForm }) => {
  // Format the date to be more readable
  const formattedDate = format(new Date(date), "EEEE, MMMM do, yyyy");

  return (
    <div>
      {formSubmitted && (
        <>
          <Typography variant="body1" gutterBottom style={{ color: "#4a4a4a" }}>
            Your appointment is scheduled for: <br />
            <Typography
              variant="body1"
              gutterBottom
              style={{ color: "#4a4a4a", fontWeight: "bold" }}
            >
              {formattedDate} at {time}
            </Typography>
          </Typography>
          {formSubmitted && <SuccessAnimation />}

          <Button
            variant="contained"
            color="primary"
            onClick={() => resetForm()}
          >
            Schedule Another Appointment
          </Button>
        </>
      )}
    </div>
  );
};

export default ScheduledSuccess;
