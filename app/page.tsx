import { IphoneMockup } from "./components/IphoneMockup";

export default function Home() {
  return (
    <section className="min-h-screen flex justify-center bg-white items-center">
      <IphoneMockup background="/wallpaper.webp" />
    </section>
  );
}
