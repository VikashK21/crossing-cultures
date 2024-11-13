"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Nesara from "./components/nesara";
import Aishupriya from "./components/aishupriya";
import Rhea from "./components/rhea";
import Maghizhan from "./components/maghizhan";
import Vikash from "./components/vikash";
import Intro from "./components/intro";
import CarouselMaps from "./components/carousel";
import Resources from "./components/resources";

export default function Home() {
  const router = useRouter()

  const handleOnClick = (sectionID: string) => () => {
    router.push(sectionID)
  }

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      console.log(hash, 'hash')
      const elementId = hash.substring(1); // Remove the '#' character
      console.log(elementId, 'ele')
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);


  return (
    <>
      <div className="border rounded-md max-w-7xl mx-auto py-5 px-5">
        <CarouselMaps handleOnClick={handleOnClick} />
        <Intro />
      </div>
      <div className="container flex flex-col gap-2 mx-auto px-5">
        {
          (typeof window !== 'undefined' && (window.location.hash === '' || window.location.hash === '#maghizhan')) && <section id="maghizhan" className="border rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
            <Maghizhan handleOnClick={handleOnClick} />
          </section>
        }
        {
          (typeof window !== 'undefined' && (window.location.hash === '' || window.location.hash === '#rhea')) && <section id="rhea" className="border rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
            <Rhea handleOnClick={handleOnClick} />
          </section>
        }
        {
          (typeof window !== 'undefined' && (window.location.hash === '' || window.location.hash === '#aishupriya')) && <section id="aishupriya" className="border rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
            <Aishupriya handleOnClick={handleOnClick} />
          </section>
        }
        {
          (typeof window !== 'undefined' && (window.location.hash === '' || window.location.hash === '#nesara')) && <section id="nesara" className="border rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
            <Nesara handleOnClick={handleOnClick} />
          </section>
        }
        {
          (typeof window !== 'undefined' && (window.location.hash === '' || window.location.hash === '#vikash')) && <section id="vikash" className="border rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
            <Vikash handleOnClick={handleOnClick} />
          </section>
        }
      </div>
      <div className="border rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
        <Resources />
      </div>
    </>
  );
}
