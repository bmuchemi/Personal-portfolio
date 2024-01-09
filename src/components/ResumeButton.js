// ResumeButton.js
import React from "react";

const ResumeButton = () => {
  const handleDownload = () => {
    // Replace these with the actual paths to your resume files.
    const resumePaths = [
      "/Benjamin Muchemi Mwangi.pdf",
      "/SD Fullstack Cert V2.pdf",
    ];

    // Trigger download for each file
    resumePaths.forEach((resumePath, index) => {
      const link = document.createElement("a");
      link.href = resumePath;
      link.download = `Benjamin Muchemi Mwangi-${index + 1}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <a
      href="#about"
      className="ml-4 inline-flex text-white-400 bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
      onClick={handleDownload}
    >
      Download CV
    </a>
  );
};

export default ResumeButton;
