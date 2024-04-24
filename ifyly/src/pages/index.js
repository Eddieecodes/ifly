import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import DisplayCard from "./displayCard";

const supabase = createClient(
  //public key
  "https://ulqcojuknislllphvwmn.supabase.co",
  //anon key
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVscWNvanVrbmlzbGxscGh2d21uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzNjI4NDIsImV4cCI6MjAyODkzODg0Mn0.VORBWxBZ0Q0N_qi4Pn4woc7OLn9Z8vK3vI4mcqSRj4k"
);

// Function to generate a random string
const generateRandomString = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomString;
};

// Function to generate a shortened URL
const generateShortenedUrl = (originalUrl) => {
  // Generate a unique identifier (random string)
  const uniqueId = generateRandomString(6); // You can adjust the length of the random string

  const shortenedUrl = `https://${uniqueId}.com`;
  return shortenedUrl;
};

export default function Home() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateLink = async () => {
    // Check if originalUrl is empty
    if (!originalUrl.trim()) {
      return;
    }

    setLoading(true); // Set loading state to true

    try {
      // Generate a shortened URL
      const generatedShortenedUrl = generateShortenedUrl(originalUrl);

      // Store originalUrl in the database and retrieve the shortened URL
      const { data, error } = await supabase
        .from("info")
        .insert([
          { original_url: originalUrl, shortened_url: generatedShortenedUrl },
        ]);
      if (error) {
        throw error;
      }

      setShortenedUrl(generatedShortenedUrl);
      if (data) {
        setShortenedUrl(originalUrl);
      }
    } catch (error) {
      console.error("Error generating link:", error.message);
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  return (
    <main className="bg-white h-screen w-screen">
      <div className="flex items-center flex-col h-screen justify-center">
        <h1 className="text-black font-bold text-3xl text-center">
          ifyl <span className="text-blue-300">y</span>
        </h1>
        <h3 className="text-black font-light text-lg text-center">
          Turn your url into a short link{" "}
        </h3>
        <input
          type="text"
          placeholder="Enter your url"
          className="rounded-lg border-grey-300 border-solid border-8 mt-10 w-80 p-1 text-black"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        <button
          className="rounded-lg bg-blue-500 text-white text-center font-bold w-80 h-12 mt-3"
          onClick={handleGenerateLink}
          disabled={loading} // Disable the button when loading
        >
          {loading ? "Generating..." : "Generate Link"}{" "}
          {/* Change button text based on loading state */}
        </button>

        {shortenedUrl && (
          <DisplayCard shortenedUrl={shortenedUrl} originalUrl={originalUrl} />
        )}
      </div>
    </main>
  );
}
