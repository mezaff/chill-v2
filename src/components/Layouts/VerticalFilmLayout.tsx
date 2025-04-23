import { Carousel, CarouselNext, CarouselPrevious } from "../ui/carousel";

type VerticalFilmLayoutProps = {
  type: string;
  sectionTitle: string;
  children: React.ReactNode;
};

const VerticalFilmLayout = (props: VerticalFilmLayoutProps) => {
  const { type, sectionTitle, children } = props;
  return (
    <section
      id={type}
      className={`flex flex-col justify-center items-center py-5 md:py-20 ${
        type !== "myList" && "px-8"
      } bg-[#181a1c]`}
    >
      <div
        className={`flex flex-col ${
          type === "myList" ? "items-center" : "items-start md:ps-30"
        }  justify-center w-full mb-5 md:mb-10`}
      >
        <h1
          className={`text-white ${
            type === "myList" ? "text-center" : "text-start"
          } font-bold md:text-2xl`}
        >
          {sectionTitle}
        </h1>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-lg md:max-w-2xl lg:max-w-7xl"
      >
        {children}

        {type !== "myList" && (
          <>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </>
        )}
      </Carousel>
    </section>
  );
};

export default VerticalFilmLayout;
