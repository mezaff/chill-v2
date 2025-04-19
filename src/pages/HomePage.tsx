import Hero from "@/components/Hero";
import AppLayout from "@/components/Layouts/AppLayout";
import NowPlaying from "@/components/NowPlaying";
import Popular from "@/components/Popular";
import TopRated from "@/components/TopRated";
import UpComing from "@/components/UpComing";
import { useLogedInUser } from "@/hooks/useLogedInUser";

const HomePage = () => {
  const { logedInUser } = useLogedInUser();
  return (
    <AppLayout>
      <Hero />
      {logedInUser && (
        <NowPlaying idSection="now-playing" sectionTitle="My History" />
      )}

      <TopRated />
      <Popular />
      <UpComing />
    </AppLayout>
  );
};

export default HomePage;
