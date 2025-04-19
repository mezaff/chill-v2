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
      className="flex flex-col justify-center items-center py-20 px-8 bg-[#181a1c]"
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
        {children}

        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
};

export default VerticalFilmLayout;
