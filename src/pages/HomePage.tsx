import Hero from "@/components/Hero";
import HorizontalFilm from "@/components/HorizontalFilm";
import AppLayout from "@/components/Layouts/AppLayout";
import VerticalFilm from "@/components/VerticalFilm";
import { useLogedInUser } from "@/hooks/useLogedInUser";

const HomePage = () => {
  const { logedInUser } = useLogedInUser();
  return (
    <AppLayout>
      <Hero bgImg="/public/images/hero-bg.jpg" />
      {logedInUser && (
        <HorizontalFilm
          idSection="nextFilm"
          sectionTitle="Melanjutkan Tonton Film"
        />
      )}

      <VerticalFilm
        idSection="topRating"
        sectionTitle="Top Rating Film dan Series Hari ini"
      />

      <VerticalFilm idSection="trending" sectionTitle="Film Trending" />
      <VerticalFilm idSection="newRelease" sectionTitle="Rilis Baru" />
    </AppLayout>
  );
};

export default HomePage;
