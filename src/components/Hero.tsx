import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div
      className="flex w-full justify-center items-end h-[225px] md:h-[587px] bg-cover bg-center bg-no-repeat relative after:content-[''] after:block after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-gradient-to-t after:from-[#181A1C] after:via-transparent after:to-transparent after:z-0"
      style={{ backgroundImage: `url("/public/images/hero-bg.jpg")` }}
    >
      <div className="w-[320px] md:w-[1280px] flex flex-col justify-end gap-[12px] mb-[40px] md:mb-[80px] relative z-10">
        <h1 className="text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)] text-[24px] md:text-[48px] font-bold">
          Duty After School
        </h1>
        <p className="text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)] text-[12px] md:text-[18px] md:w-[668px]">
          Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
          Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
          siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan
          dalam perang.
        </p>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-[8px] md:gap-[10px]">
            <Button className="border-2 border-white bg-[#3A354161] rounded-full hover:bg-[#192DB7] hover:border-none w-[55px] h-[25px] md:w-[93px] md:h-[45px] text-white text-[12px] md:text-[16px] font-bold cursor-pointer">
              Mulai
            </Button>
            <Button className="border-2 border-white bg-[#3A354161] hover:bg-[#22282A] hover:border-none rounded-full w-[120px] h-[25px] md:w-[185px] md:h-[45px] text-white text-[12px] md:text-[16px] font-bold cursor-pointer">
              <img
                src="/images/information-outline.png"
                alt="info"
                className="w-[12px] md:w-[25px]"
              />
              Selengkapnya
            </Button>
            <Button className="border-2 border-white bg-[#3A354161] hover:bg-[#22282A] hover:border-none rounded-full w-[30px] h-[25px] md:w-[52px] md:h-[45px] text-white text-[12px] md:text-[16px] font-bold cursor-pointer">
              18+
            </Button>
          </div>
          <div>
            <Button className="border-2 border-white bg-[#3A354161] hover:bg-[#22282A] hover:border-none rounded-full p-1 md:p-0.5 w-[25px] h-[25px] md:w-[45px] md:h-[45px] cursor-pointer">
              <img src="/images/mute.png" alt="mute" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
