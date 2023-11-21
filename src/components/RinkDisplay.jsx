import classes from "./RinkDisplay.module.css"

import React from 'react';
import { Box, Text, Button } from '@mantine/core';

export default function RinkDisplay({ currentDate, selectedTimeSlot }) {
  const courts = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
  ];

  const bookings = [
    { court: 1, date: '2023-11-21', slot: '8-10am', bookedBy: "Jane Doe" },
    { court: 3, date: '2023-11-21', slot: '4-6pm', bookedBy: "Adam Shaw" },
    { court: 2, date: '2023-11-22', slot: '12-2pm', bookedBy: "Joe Bloggs" },
  ];

  const getBookingDetails = (courtNumber) => {
    return bookings.find(
      (booking) =>
        booking.court === courtNumber &&
        booking.date === currentDate.format('YYYY-MM-DD') &&
        booking.slot === selectedTimeSlot
    );
  };

  const handleBookCourt = (courtNumber) => {
    console.log("Booking Details:", {
      date: currentDate.format('YYYY-MM-DD'),
      timeSlot: selectedTimeSlot,
      courtNumber
    });
  };

  return (
    <Box className={classes.courtContainer}>
    {courts.map((court) => {
      const booking = getBookingDetails(court.number);
      const isAvailable = !booking;

      return (
        <Box key={court.number} className={classes.courtCard}>
          <Text>Court {court.number}</Text>
          <Text>
            Status: {booking ? `Booked by ${booking.bookedBy}` : 'Available'}
          </Text>
          {isAvailable && (
            <Button onClick={() => handleBookCourt(court.number)}>Book Court</Button>
          )}
        </Box>
      );
    })}
  </Box>
  );
}