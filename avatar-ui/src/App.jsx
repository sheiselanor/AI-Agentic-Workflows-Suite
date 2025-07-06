// avatar-ui/src/App.jsx
import React, { useEffect, useState } from "react";
import { Container, Typography, Box, CircularProgress, Alert, Button } from "@mui/material";

const BACKEND_URL = "http://localhost:5678/return-video"; // Replace with your deployed n8n URL

function App() {
  const [videoUrl, setVideoUrl] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);

  const fetchVideoUrl = async () => {
    try {
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ trigger: true }),
      });

      if (!response.ok) throw new Error("Failed to fetch video");
      const data = await response.json();

      if (data.video_url) {
        setVideoUrl(data.video_url);
        setStatus("ready");
      } else {
        throw new Error("No video URL found in response");
      }
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  useEffect(() => {
  const fetchVideo = async () => {
    try {
      const res = await fetch("http://localhost:5678/return-video");
      const data = await res.json();
      setVideoUrl(data.video_url);
    } catch (err) {
      console.error("Error loading video:", err);
    }
  };

  fetchVideo();
}, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 10, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        🎥 Your Avatar Video
      </Typography>

      {status === "loading" && (
        <Box sx={{ mt: 4 }}>
          <CircularProgress />
          <Typography variant="body1" mt={2}>
            Generating your video...
          </Typography>
        </Box>
      )}

      {status === "ready" && (
        <Box>
          <video
            width="100%"
            height="auto"
            controls
            src={videoUrl}
            style={{ borderRadius: 10 }}
          />
          <Button variant="outlined" sx={{ mt: 3 }} onClick={fetchVideoUrl}>
            🔁 Refresh Video
          </Button>
        </Box>
      )}

      {status === "error" && (
        <Alert severity="error">
          {error || "Something went wrong loading your video."}
        </Alert>
      )}
    </Container>
  );
}

export default App;
