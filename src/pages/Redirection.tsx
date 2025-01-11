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

export function MyFitnessHub() {
  useEffect(() => {
    window.location.href = "https://my-fitness-hub-fe.vercel.app/";
  }, []);

  return null;
}

export function Cv() {
  useEffect(() => {
    window.location.href = "../../public/Biswarup-curriculum-vitae.pdf";
  }, []);

  return null;
}
