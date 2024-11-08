"use client"
import { useEffect } from "react";

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
        <div className="flex align-middle justify-center">
          <p>opening content</p>
        </div>
      </div>
      <div className="container flex flex-col gap-2 mx-auto px-5">
        <section id="maghizhan" className="border rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
          <div className="flex flex-col align-middle justify-center">
            <p>Maghizhan</p>
            <div className="mb-8 md:mb-16 text-green-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati fugit recusandae perferendis unde voluptates accusamus? Possimus in ullam, perspiciatis voluptatum temporibus, id, adipisci ut eligendi assumenda aliquid porro? Debitis rerum modi earum ipsa. Accusantium distinctio animi earum, saepe cumque maiores, explicabo ad consequatur reprehenderit quam unde! Sit amet vitae eos!
            </div>
          </div>
        </section>
        <section id="rhea" className="border rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
          <div className="flex flex-col align-middle justify-center">
            <p>Rhea</p>
            <div className="mb-8 md:mb-16 text-yellow-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati fugit recusandae perferendis unde voluptates accusamus? Possimus in ullam, perspiciatis voluptatum temporibus, id, adipisci ut eligendi assumenda aliquid porro? Debitis rerum modi earum ipsa. Accusantium distinctio animi earum, saepe cumque maiores, explicabo ad consequatur reprehenderit quam unde! Sit amet vitae eos!
            </div>
          </div>
        </section>
        <section id="aishupriya" className="border rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
          <div className="flex flex-col align-middle justify-center">
            <p>Aishupriya</p>
            <div className="mb-8 md:mb-16 text-blue-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati fugit recusandae perferendis unde voluptates accusamus? Possimus in ullam, perspiciatis voluptatum temporibus, id, adipisci ut eligendi assumenda aliquid porro? Debitis rerum modi earum ipsa. Accusantium distinctio animi earum, saepe cumque maiores, explicabo ad consequatur reprehenderit quam unde! Sit amet vitae eos!
            </div>
          </div>
        </section>
        <section id="nesara" className="border rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
          <div className="flex flex-col align-middle justify-center">
            <p>Nesara</p>
            <div className="mb-8 md:mb-16 text-purple-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati fugit recusandae perferendis unde voluptates accusamus? Possimus in ullam, perspiciatis voluptatum temporibus, id, adipisci ut eligendi assumenda aliquid porro? Debitis rerum modi earum ipsa. Accusantium distinctio animi earum, saepe cumque maiores, explicabo ad consequatur reprehenderit quam unde! Sit amet vitae eos!
            </div>
          </div>
        </section>
        <section id="vikash" className="border rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
          <div className="flex flex-col align-middle justify-center">
            <p>Vikash</p>
            <div className="mb-8 md:mb-16 text-orange-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati fugit recusandae perferendis unde voluptates accusamus? Possimus in ullam, perspiciatis voluptatum temporibus, id, adipisci ut eligendi assumenda aliquid porro? Debitis rerum modi earum ipsa. Accusantium distinctio animi earum, saepe cumque maiores, explicabo ad consequatur reprehenderit quam unde! Sit amet vitae eos!
            </div>
          </div>
        </section>
      </div>
      <div className="border rounded-md max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 mx-auto py-5 px-5">
        <div className="flex flex-col align-middle justify-center">
          <p>resource content</p>
          <div className="mb-8 md:mb-16">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quae est debitis praesentium officia voluptas eum vero reiciendis soluta? Sequi qui omnis rem deserunt corporis perspiciatis, nulla id quos quod?
          </div>
        </div>
      </div>
    </>
  );
}
