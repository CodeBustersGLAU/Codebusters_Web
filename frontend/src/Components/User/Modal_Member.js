// Modal.js
import React from "react";

const Modal_Member = ({ isOpen, onClose, member }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
        >
          X
        </button>
        <div className="text-center">
          <img
            src={member.imgSrc}
            alt={member.name}
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold">{member.name}</h3>
          <p>{member.title}</p>
          <p className="mt-4">{member.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal_Member;
