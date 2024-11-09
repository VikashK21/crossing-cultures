"use client"
import { useEffect } from "react";
import Nesara from "./components/nesara";
import Aishupriya from "./components/aishupriya";
import Rhea from "./components/rhea";
import Maghizhan from "./components/maghizhan";
import Vikash from "./components/vikash";
import Intro from "./components/intro";

export default function Home() {


  useEffect(() => {
    // Check if there's a hash in the URL on page load
    const hash = window.location.hash;
    if (hash) {
      const elementId = hash.substring(1); // Remove the '#' character
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);


  return (
    <>
      <div className="border rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
        <Intro />
      </div>
      <div className="container flex flex-col gap-2 mx-auto px-5">
        <section id="maghizhan" className="border rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
          <Maghizhan />
        </section>
        <section id="rhea" className="border rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
          <Rhea />
        </section>
        <section id="aishupriya" className="border rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
          <Aishupriya />
        </section>
        <section id="nesara" className="border rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
          <Nesara />
        </section>
        <section id="vikash" className="border rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
          <Vikash />
        </section>
      </div>
      <div className="border rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
        <div className="flex text-lg flex-col align-middle justify-center">
          <h3 className="font-bold ">Resource content</h3>
          <div className="mb-8 md:mb-16">
            Over all resources and references will be cited here soon...
          </div>
        </div>
      </div>
    </>
  );
}
