import { useEffect } from "react";

export function LinkedIn() {
  useEffect(() => {
    window.location.href = "https://www.linkedin.com/in/biswarupchatt/";
  }, []);

  return null;
}

export function Github() {
  useEffect(() => {
    window.location.href = "https://github.com/BiswarupChatt";
  }, []);

  return null;
}
