import Hero from "@/components/Hero";
import AppLayout from "@/components/Layouts/AppLayout";
import NowPlaying from "@/components/NowPlaying";
import Popular from "@/components/Popular";
import TopRated from "@/components/TopRated";
import UpComing from "@/components/UpComing";

const HomePage = () => {
  return (
    <AppLayout>
      <Hero />
      <NowPlaying idSection="now-playing" sectionTitle="My History" />

      <TopRated />
      <Popular />
      <UpComing />
    </AppLayout>
  );
};

export default HomePage;
