"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Nesara from "./components/nesara";
import Aishupriya from "./components/aishupriya";
import Rhea from "./components/rhea";
import Maghizhan from "./components/maghizhan";
import Vikash from "./components/vikash";
import Intro from "./components/intro";
import CarouselMaps from "./components/carousel";
import Resources from "./components/resources";
import { SkeletonLoader } from "./components/skeletonLoader";

export default function Home() {
  const router = useRouter()

  const [isClient, setIsClient] = useState(false)
  const [hasLocation, setHasLocation] = useState('')

  const handleOnClick = (sectionID: string) => () => {
    router.push(sectionID)
    setHasLocation(sectionID.substring(0))
    console.log(hasLocation, 'haslocation2')
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true)
    }
    const hash = window.location.hash;
    if (hash) {
      console.log(hash, 'hash')
      const elementId = hash.substring(1); // Remove the '#' character
      setHasLocation(`#${elementId}`)
      console.log(elementId, hasLocation === '', 'haslocation')
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router]);

  if (!isClient) return <div className="w-full h-4/5 flex items-center justify-center"><SkeletonLoader /></div>

  return (
    <>
      <div className="border rounded-md max-w-7xl mx-auto py-5 px-5">
        <CarouselMaps handleOnClick={handleOnClick} />
        <Intro />
      </div>
      <div className="container flex flex-col gap-2 mx-auto px-5">
        {
          (hasLocation === '' || hasLocation === '#maghizhan') && <section id="maghizhan" className="border border-b-0 rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
            <Maghizhan handleOnClick={handleOnClick} />
          </section>
        }
        {
          (hasLocation === '' || hasLocation === '#rhea') && <section id="rhea" className="border border-b-0 rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
            <Rhea handleOnClick={handleOnClick} />
          </section>
        }
        {
          (hasLocation === '' || hasLocation === '#aishupriya') && <section id="aishupriya" className="border border-b-0 rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
            <Aishupriya handleOnClick={handleOnClick} />
          </section>
        }
        {
          (hasLocation === '' || hasLocation === '#nesara') && <section id="nesara" className="border border-b-0 rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
            <Nesara handleOnClick={handleOnClick} />
          </section>
        }
        {
          (hasLocation === '' || hasLocation === '#vikash') && <section id="vikash" className="border border-b-0 rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
            <Vikash handleOnClick={handleOnClick} />
          </section>
        }

        <section id="resources" className="border border-t-0 mb-5 rounded-md max-w-7xl lg:px-8 mx-auto py-5 px-5">
          <Resources hasLocation={hasLocation} />
        </section>
      </div>
    </>
  );
}
