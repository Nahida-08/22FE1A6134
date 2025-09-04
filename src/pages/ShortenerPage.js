import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

function ShortenerPage() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = () => {
    // temporary logic (replace with backend later)
    const code = Math.random().toString(36).substring(7);
    setShortUrl(window.location.origin + "/r/" + code);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Shorten Your URL
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          label="Enter URL"
          variant="outlined"
          fullWidth
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button variant="contained" onClick={handleShorten}>
          Shorten
        </Button>
      </Box>
      {shortUrl && (
        <Typography variant="h6" sx={{ mt: 3 }}>
          Short URL: <a href={shortUrl}>{shortUrl}</a>
        </Typography>
      )}
    </Container>
  );
}

export default ShortenerPage;
