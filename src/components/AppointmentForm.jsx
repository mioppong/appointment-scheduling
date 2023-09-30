// src/AppointmentForm.js
import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import "./AppointmentForm.css"; // Import the custom CSS
import { addDays } from "date-fns";

import ScheduledSuccess from "./ScheduledSuccess";

function AppointmentForm() {
  const [address, setAddress] = useState("1243 Islington Ave #800");
  const minDate = new Date().toISOString().split("T")[0];
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [email, setEmail] = useState("inda@provincialsmarthome.com");
  const maxDate = addDays(new Date(), 2).toISOString().split("T")[0];

  const minTime = "09:00";
  const maxTime = "21:00";

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleReset = () => {
    // Reset form submission state and clear form fields
    setFormSubmitted(false);
    setSelectedDate(new Date());
    setSelectedTimeSlot("09:00");
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        backgroundColor: "#f5f5f5",
        padding: "20px",
        borderRadius: "10px",
      }}
      className="appointment-container"
    >
      <Typography
        variant="h4"
        gutterBottom
        style={{ color: "#4a4a4a", fontWeight: "bold" }}
      >
        Appointment Scheduling
      </Typography>
      {!formSubmitted && (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            defaultValue="customer@example.com"
            disabled
            style={{ marginBottom: "20px" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            disabled
            type="text"
            fullWidth
            label="Address"
            value={address}
            defaultValue="123 Main St"
            style={{ marginBottom: "20px" }}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            type="date"
            fullWidth
            inputProps={{
              min: minDate,
              max: maxDate,
            }}
            required
            InputLabelProps={{
              shrink: true,
            }}
            value={selectedDate}
            label="Best Date for Appointment"
            style={{ marginBottom: "20px" }}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <TextField
            required
            type="time"
            fullWidth
            value={selectedTimeSlot}
            style={{ marginBottom: "20px" }}
            label="Best Time for Appointment"
            inputProps={{ min: minTime, max: maxTime }}
            helperText="Working hours are between 9am and 9pm"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setSelectedTimeSlot(e.target.value)}
          />

          <Button type="submit" variant="contained" color="primary">
            Schedule Appointment
          </Button>
        </form>
      )}

      {/* when  formSubmitted is true, render the ScheduledSuccess component */}
      <ScheduledSuccess
        formSubmitted={formSubmitted}
        resetForm={handleReset}
        date={selectedDate}
        time={selectedTimeSlot}
      />
    </Container>
  );
}

export default AppointmentForm;
