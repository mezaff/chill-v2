import { Card, CardContent } from "./ui/card";
import { dataFilm } from "@/lib/dataFilm";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

type VerticalFilmProps = {
  idSection: string;
  sectionTitle: string;
};

const VerticalFilm = (props: VerticalFilmProps) => {
  const { idSection, sectionTitle } = props;

  const films = dataFilm.filter((film) => film.category === idSection);

  return (
    <section
      id={idSection}
      className="flex flex-col justify-center items-center my-10 px-8 bg-[#181a1c]"
    >
      <div className="flex flex-col items-start justify-center w-full mb-5 md:ps-30">
        <h1 className="text-white text-start font-bold md:text-2xl">
          {sectionTitle}
        </h1>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-lg md:max-w-2xl lg:max-w-7xl"
      >
        <CarouselContent>
          {films.map((film) => (
            <CarouselItem
              key={film.id}
              className="basis-1/3 lg:basis-1/5 md:mx-2"
            >
              <div className=" p-1">
                <Card
                  style={{ backgroundImage: `url(${film.imgUrl})` }}
                  className={`w-[95px] h-[145px] md:w-[234px] md:h-[365px] bg-no-repeat bg-cover bg-center rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 p-0 flex ${
                    film.status === "new" ? "items-start pt-2" : "items-end"
                  } ${
                    film.status === "top" ? "rounded-tr-md rounded-bl-md" : ""
                  }`}
                >
                  <CardContent>
                    {film.status === "new" ? (
                      <div className="text-white text-center text-[5.74px] md:text-[14px] font-bold rounded-xl bg-[#0F1E93] py-[1.91px] px-[4.78px] md:py-[4px] md:px-[10px]">
                        Episode Baru
                      </div>
                    ) : null}
                    {film.status === "top" ? (
                      <div className="text-white text-center text-[5.74px] md:text-[14px] rounded-tr-xs rounded-bl-xs md:rounded-tr-md md:rounded-bl-md bg-[#B71F1D] p-[1.91px] md:p-[4px]">
                        Top <br />
                        10
                      </div>
                    ) : null}
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

export default VerticalFilm;
