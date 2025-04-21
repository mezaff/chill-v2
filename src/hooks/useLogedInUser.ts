import { useEffect, useState } from "react";

export const useLogedInUser = () => {
  const [logedInUser, setLogedInUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user?.isLogin === true) {
        setLogedInUser(user);
      }
    }
  }, []);
  return { logedInUser };
};
