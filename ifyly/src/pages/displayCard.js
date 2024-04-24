import React from "react";

const DisplayCard = ({ shortenedUrl, originalUrl }) => {
  const redirectToOriginalUrl = () => {
    window.location.href = originalUrl; // Redirect to the original URL
  };

  return (
    <div className="h-24 w-80 bg-green-200 border-green-600 border-solid rounded-lg border-2 mt-2 p-2 flex justify-center flex-col">
      <h3 className="text-black text-sm">Your link has been generated</h3>
      <p
        className="underline text-sky-600 mt-1 cursor-pointer select-all"
        onClick={redirectToOriginalUrl}
      >
        {shortenedUrl}
      </p>
    </div>
  );
};

export default DisplayCard;
