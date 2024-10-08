import { useState, useEffect } from "react";

/**
 * Custom hook to determine if the current screen width matches or exceeds a specified width.
 *
 * This hook sets up a resize event listener to update the state whenever the window is resized,
 * checking if the window's inner width is greater than or equal to the specified width.
 *
 * @param {number} width - The width to match against the window's inner width.
 * @returns {boolean} - A boolean indicating if the window's inner width is greater than or equal to the specified width.
 *
 * @example
 * // Example usage:
 * const isLargeScreen = useScreenWidthMatch(1024);
 * if (isLargeScreen) {
 *   // Perform actions for large screens
 * }
 */

function useScreenWidthMatch(width: number) {
  const [isMatch, setIsMatch] = useState<boolean>(false);

  useEffect(() => {
    // Function to check the window width
    const checkWidth = () => {
      if (typeof window !== "undefined") {
        setIsMatch(window.innerWidth >= width);
      }
    };

    // Initial check
    checkWidth();

    // Set up resize event listener
    window.addEventListener("resize", checkWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, [width]);

  return isMatch;
}

export default useScreenWidthMatch;
