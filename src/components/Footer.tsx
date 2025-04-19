import axios from "axios";
import { useEffect, useState } from "react";

const Footer = () => {
  const [openGenre, setOpenGenre] = useState<boolean>(false);
  const [openHelp, setOpenHelp] = useState<boolean>(false);
  const [genres, setGenres] = useState<
    {
      id: number;
      name: string;
    }[]
  >([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `${import.meta.env.VITE_TMDB_BASE_URL}/genre/movie/list`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_READ_TOKEN}`,
      },
    };
    axios
      .request(options)
      .then((res) => {
        setGenres(res.data.genres);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleGenreToggle = () => {
    if (openGenre === true) {
      setOpenGenre(false);
      return;
    } else {
      setOpenGenre(true);
    }
  };

  const handleHelpToggle = () => {
    if (openHelp === true) {
      setOpenHelp(false);
      return;
    } else {
      setOpenHelp(true);
    }
  };
  return (
    <>
      <div className="hidden lg:flex flex-row justify-between font-['Lato'] items-center gap-[215px] bg-[#181A1C] w-full py-8 md:py-12 px-30 md:px-50 text-white border-t-1 border-[#E7E3FC3B">
        <div className="flex flex-col gap-[26px]">
          <img src="/images/logo.png" alt="chill" className="w-[163px]" />
          <p className="text-[14px] text-[#E7E3FCAD] font-['Poppins']">
            @2025 Chill All Rights Reserved.
          </p>
        </div>
        <div className="flex justify-between w-full gap-[160px]">
          <div className="flex flex-col gap-[15px] text-[16px]">
            <p className="font-bold">Genre</p>
            <div className="flex justify-between gap-[28px] font-medium text-[#C1C2C4]">
              <ul className="grid grid-cols-4 gap-x-10">
                {genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-[15px] text-[16px]">
            <p className="font-bold">Bantuan</p>
            <div className="flex justify-between gap-[28px] font-medium text-[#C1C2C4]">
              <ul>
                <li>Aksi</li>
                <li>Anak-anak</li>
                <li>Anime</li>
                <li>Britania</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden w-full flex-col gap-[40px] p-8 border-t-1 border-[#E7E3FC3B] ">
        <div className="flex flex-col gap-[16px]">
          <img src="/images/logo.png" alt="chill" className="w-[84px]" />
          <p className="text-[#C1C2C4] font-[12px]">
            @2025 Chill All Right Reserved
          </p>
        </div>
        <div className="flex flex-col gap-[8px]">
          <button
            onClick={handleGenreToggle}
            className="flex justify-between items-center gap-[260.59px]"
          >
            <p className="text-[16px] text-white font-medium">Genre</p>
            <img
              src={`${
                !openGenre ? "/images/Vector (1).png" : "/images/arrowDown.png"
              }`}
              alt="arrowDown"
            />
          </button>
          {openGenre && (
            <div>
              <ul className="flex flex-col gap-[8px] font-medium text-[#C1C2C4]">
                {genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={handleHelpToggle}
            className="flex justify-between items-center gap-[260.59px]"
          >
            <p className="text-[16px] text-white font-medium">Bantuan</p>
            <img
              src={`${
                !openHelp ? "/images/Vector (1).png" : "/images/arrowDown.png"
              }`}
              alt="arrowDown"
            />
          </button>
          {openHelp && (
            <div>
              <ul className="flex flex-col gap-[8px] font-medium text-[#C1C2C4]">
                <li>FAQ</li>
                <li>Kontak Kami</li>
                <li>Privasi</li>
                <li>Syarat & Ketentuan</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Footer;
