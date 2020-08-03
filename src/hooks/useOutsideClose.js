import { useEffect } from "react";

const useOutsideClose = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  const handleKey = (e) => {
    if (e.key === "Escape") {
      callback();
    }
    if (e.keyCode === 9 && ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  });
};

export default useOutsideClose;
