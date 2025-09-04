import React from "react";
import { Container, Typography } from "@mui/material";

function StatsPage() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        URL Statistics
      </Typography>
      <Typography>
        (Here we’ll show number of clicks and analytics for each shortened URL.)
      </Typography>
    </Container>
  );
}

export default StatsPage;
