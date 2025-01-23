"use client";
import React, { useState } from "react";
import { contactInfo } from "../data";
import Link from "next/link";

const Contact = () => {
  const [popupMessage, setPopupMessage] = useState(""); // message for the popup
  const [popupVisible, setPopupVisible] = useState(false); // controls visibility of the popup

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setPopupMessage("Copied to clipboard!");
        setPopupVisible(true);

        setTimeout(() => {
          setPopupVisible(false);
        }, 2000);
      })
      .catch(() => {
        setPopupMessage("Failed to copy");
        setPopupVisible(true);

        setTimeout(() => {
          setPopupVisible(false);
        }, 2000);
      });
  };

  return (
    <div className="border-b border-neutral-900 border-transparent pb-20">
      <h2 className="my-10 text-center text-4xl text-white">
        <span className="text-4xl text-cyan-500">Contact</span> Me
      </h2>
      <div className="text-center tracking-tighter">
        <span className="my-4 text-white inline">Email: </span>
        <p
          className="text-white cursor-pointer hover:text-red-500 inline"
          onClick={() => copyToClipboard(contactInfo.email)}
        >
          {contactInfo.email}
        </p>
      </div>
      <div className="text-center tracking-tighter my-4">
        <p
          className="my-4 text-white hover:text-cyan-500 cursor-pointer inline"
          onClick={() => copyToClipboard(contactInfo.Linkedin)}
        >
          Linkedin
        </p>
      </div>

      <div className="text-center tracking-tighter my-4">
        <p
          className="text-white hover:text-purple-700 cursor-pointer inline"
          onClick={() => copyToClipboard(contactInfo.Github)}
        >
          Github
        </p>
      </div>

      {popupVisible && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg text-center z-50">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default Contact;
