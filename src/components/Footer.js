import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter,
  faPiedPiper,
} from "@fortawesome/free-brands-svg-icons";

const getDayOfWeek = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const dayIndex = today.getDay();
  return daysOfWeek[dayIndex];
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">
        <div className="text-left">
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://github.com/bmuchemi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/bmuchemi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/lsd.cheddar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="mailto:your.bmuchemi55@gmail.com" className="text-white">
                <FontAwesomeIcon icon={faPiedPiper} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/bmuchemi55"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </ul>
        </div>

        <div className="text-right">
          <p className="text-sm text-sm mb-4 md:mb-0">
            &copy; 2024 Benjamin Muchemi | Happy {getDayOfWeek()}
          </p>
        </div>
      </div>
    </footer>
  );
}
