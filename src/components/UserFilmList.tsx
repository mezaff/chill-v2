import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const UserFilmList = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-lg md:max-w-screen"
    >
      <CarouselContent>
        <CarouselItem
          // key={movie.id}
          className="basis-1/3 lg:basis-1/5 md:mx-2"
        >
          <div className=" p-1">
            <Card
              // onMouseEnter={() => handleMouseEnter(movie.id)}
              // onMouseLeave={() => handleMouseLeave()}
              // style={{
              //   backgroundImage: `url(${import.meta.env.VITE_TMDB_IMG_URL}/${
              //     movie.poster_path
              //   })`,
              // }}
              className={`w-[95px] h-[145px] md:w-[234px] md:h-[365px] bg-no-repeat bg-cover bg-center rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 p-0 flex `}
            >
              <CardContent
                className={`hidden md:flex items-center justify-center w-full h-full rounded-lg `}
              >
                <div
                  className={`flex flex-col items-center justify-center w-[95px] h-[145px] md:w-[234px] md:h-[365px] font-semibold`}
                >
                  {/* {hoveredId === movie.id && (
                      <>
                        <p className="text-white text-center text-xs md:text-sm">
                          Release:{" "}
                          {new Date(movie.release_date).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>
                        <p className="text-white text-start text-xs md:text-sm">
                          Vote:
                        </p>
                        <p className="text-white text-start text-xs md:text-sm">
                          Vote Avg:
                        </p>
                      </>
                    )} */}
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default UserFilmList;
