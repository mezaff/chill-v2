import { LogInIcon, LogOutIcon, Star, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useNavigate } from "react-router";
import { useLogedInUser } from "@/hooks/useLogedInUser";

const ProfileMenu = () => {
  const { logedInUser } = useLogedInUser();

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      const updatedUser = { ...user, isLogin: false };
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      {logedInUser ? (
        <div className="cursor-pointer flex flex-row justify-between items-center gap-1 md:gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <img
                src="/images/profile.jpg"
                alt="avatar"
                className="w-[20px] md:w-[40px] bg-white rounded-full focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-ring"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 text-white border-none shadow-md rounded-md p-2 mr-1">
              <DropdownMenuLabel className="text-center">
                Akun Saya
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <User />
                <span className="text-sm">Profil Saya</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Star />
                <span className="text-sm">Ubah Premium</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer"
              >
                <LogOutIcon />
                <span className="text-sm">Keluar</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="cursor-pointer flex flex-row justify-between items-center gap-1 md:gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <img
                src="/images/default-avatar.png"
                alt="avatar"
                className="w-[20px] md:w-[40px] bg-white rounded-full focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-ring"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 text-white border-none shadow-md rounded-md p-2 mr-1">
              <DropdownMenuLabel className="text-center">
                Anda Belum Login
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogin}
                className="cursor-pointer"
              >
                <LogInIcon />
                <span className="text-sm">Masuk</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </>
  );
};

export default ProfileMenu;
