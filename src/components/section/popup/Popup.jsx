import React, { useState, useEffect } from 'react';
import PopupStyledWrapper from "./Popup.style";
import { FiX } from "react-icons/fi";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsOpen(true); // Mengubah status isOpen menjadi true setelah 5 detik
    }, 2000);

    return () => {
      clearTimeout(timeoutId); // Membersihkan timeout jika komponen di-unmount sebelum 5 detik berlalu
    };
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <PopupStyledWrapper>
      <div className="popup-wrapper">
        {isOpen && (
          <div className="popup">
            <a href="https://forms.gle/SnUQeZ6bjY4y8in48"></a>
            <div className="popup-image">
              <div className="popup-content">
                <p onClick={closePopup}>
                  <FiX />
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </PopupStyledWrapper>
  );
};

export default Popup;
