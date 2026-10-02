import MainLayout from "@/components/layout/main-layout";
import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import FeaturedWorks from "@/components/home/featured-works";
import FeaturedProject from "@/components/home/FeaturedProject";
import Experience from "@/components/home/Experience";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <FeaturedProject />
      <About />
      <Experience />
      <FeaturedWorks />
    </MainLayout>
  );
}