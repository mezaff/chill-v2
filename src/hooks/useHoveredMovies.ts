import { useState } from "react";

export const useHoveredMovies = () => {
  const [hoveredId, setHoveredId] = useState<number>(-1);

  const handleMouseEnter = (id: number) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(-1);
  };

  return { hoveredId, handleMouseEnter, handleMouseLeave };
};
