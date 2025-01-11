import { Navbar } from "../components/shared/Navbar/Navbar";
import { SliderVideo } from "./(home)/components/SliderVideo";
export default function Home() {
  return (
    <div className="relative bg-zinc-900">
      <Navbar/>
      <SliderVideo/>
    </div>
  );
}