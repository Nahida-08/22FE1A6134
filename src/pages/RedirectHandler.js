import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { findURL, saveURL } from "../lib/storage";
import { logEvent } from "../lib/logger";

export default function RedirectHandler() {
  const { code } = useParams();

  useEffect(() => {
    const urlEntry = findURL(code);
    if (!urlEntry) {
      alert("Short URL not found!");
      return;
    }

    if (Date.now() > urlEntry.expiry) {
      alert("This link has expired!");
      return;
    }

    urlEntry.clicks.push({
      timestamp: new Date().toISOString(),
      source: window.location.href,
      location: "Unknown", // Could integrate with IP API
    });

    saveURL(urlEntry);
    logEvent("info", "Redirected", { shortcode: code });

    window.location.href = urlEntry.url;
  }, [code]);

  return <p>Redirecting...</p>;
}
