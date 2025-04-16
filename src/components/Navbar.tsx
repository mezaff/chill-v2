import { Link, useNavigate } from "react-router";
import ProfileMenu from "./ProfileMenu";
import { useLogedInUser } from "@/hooks/useLogedInUser";

const Navbar = () => {
  const { logedInUser } = useLogedInUser();
  const navigate = useNavigate();
  return (
    <>
      {logedInUser ? (
        <div className="flex flex-row justify-between items-center bg-[#181a1c] px-5 md:px-10 py-2 md:py-4 sticky top-0 z-999 text-md md:text-lg text-white font-semibold md:font-bold">
          <div className="flex flex-row justify-between items-center gap-8 md:gap-24">
            <Link to={"/"}>
              <img
                src="/images/logo.png"
                alt="chill"
                className="w-30 hidden md:block"
              />
              <img
                src="/images/Vector.png"
                alt="chill"
                className="w-[20px] block md:hidden"
              />
            </Link>
            <a href="#topRating">Series</a>
            <a href="#trending">Film</a>
            <a href="#nextFilm">Daftar Saya</a>
          </div>
          <ProfileMenu />
        </div>
      ) : (
        navigate("/login")
      )}
    </>
  );
};

export default Navbar;
