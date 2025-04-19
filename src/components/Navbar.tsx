import { Link } from "react-router";
import ProfileMenu from "./ProfileMenu";
import { useLogedInUser } from "@/hooks/useLogedInUser";

const Navbar = () => {
  const { logedInUser } = useLogedInUser();
  return (
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
        <a href="#top-rated">Top Rated</a>
        <a href="#popular">Trending</a>
        <a href="#upcoming">Up Coming</a>
        {logedInUser && <a href="#now-playing">History</a>}
      </div>
      <ProfileMenu />
    </div>
  );
};

export default Navbar;
