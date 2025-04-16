import { Card, CardContent } from "./ui/card";
import { dataFilm } from "@/lib/dataFilm";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

type HorizontalFilmProps = {
  idSection: string;
  sectionTitle: string;
};

const HorizontalFilm = (props: HorizontalFilmProps) => {
  const { idSection, sectionTitle } = props;
  const films = dataFilm.filter((film) => film.category === idSection);

  return (
    <section
      id={idSection}
      className="flex flex-col items-center my-10 px-8 bg-[#181a1c]"
    >
      <div className="flex flex-col items-start justify-center w-full mb-5 md:ps-30">
        <h1 className="text-white text-start font-bold md:text-2xl">
          {sectionTitle}
        </h1>
      </div>
      <Carousel className="w-full max-w-lg md:max-w-2xl lg:max-w-7xl">
        <CarouselContent>
          {films.map((film) => (
            <CarouselItem key={film.id} className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Card
                  className="w-[309px] h-[151px] md:w-[302px] md:h-[162px] bg-no-repeat bg-cover bg-center rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 p-0"
                  style={{ backgroundImage: `url(${film.imgUrl})` }}
                >
                  <CardContent className="flex items-end justify-between h-full bg-gradient-to-t from-black to-transparent rounded-lg pb-2">
                    <p className="text-white text-[14px] md:text-[18px] font-bold z-10">
                      {film.title}
                    </p>
                    <p className="text-white text-[14px] md:text-[18px] z-10 flex flex-row justify-between items-center gap-[4px]">
                      <img
                        src="/images/star.png"
                        alt="star"
                        className="w-[12px] md:w-[16px] h-[12px] md:h-[16px]"
                      />{" "}
                      {film.rating}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {films.length > 4 && (
          <>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </>
        )}
      </Carousel>
    </section>
  );
};

export default HorizontalFilm;
