import { useEffect } from "react";

const useEnterKeyOpen = (ref, callback) => {
  const handleKey = (e) => {
    if (ref.current && ref.current.contains(e.target) && e.keyCode === 13) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  });
};

export default useEnterKeyOpen;
