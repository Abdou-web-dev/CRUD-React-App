import { useEffect, useState } from "react";

//this custom hook function takes 3 parameters
export const useStyleMediaQuery = (mixOrMax, widthOrHeight, value) => {
  if (!mixOrMax) {
    mixOrMax = "min";
  }
  if (!widthOrHeight) {
    widthOrHeight = "width";
  }

  const [matches, setMatches] = useState(
    window.matchMedia(`(${mixOrMax}-${widthOrHeight}: ${value}px)`).matches
  );
  useEffect(() => {
    window
      .matchMedia(`(${mixOrMax}-${widthOrHeight}: ${value}px)`)
      .addEventListener("change", (e) => setMatches(e.matches));
  }, [mixOrMax, widthOrHeight, value]);

  return { matches };
};

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};
