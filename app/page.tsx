"use client"
// import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  const handleOnClick = () => {
    router.push('#about')
  }


  return (
    <main>
      <div className="container mx-auto px-5 text-right">
        <button onClick={handleOnClick}>About</button>
      </div>
      <div className="container mx-auto px-5">
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            Blog.
          </h1>
          <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">To The World From India</h4>

          <a href="https://w0.peakpx.com/wallpaper/113/225/HD-wallpaper-world-map-americas-europe-map-africa-world-australasia.jpg" className="underline hover:text-blue-600 duration-200 transition-colors" >View World Map</a>
        </section>
        <section>
          <div className="mb-8 md:mb-16 text-green-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati fugit recusandae perferendis unde voluptates accusamus? Possimus in ullam, perspiciatis voluptatum temporibus, id, adipisci ut eligendi assumenda aliquid porro? Debitis rerum modi earum ipsa. Accusantium distinctio animi earum, saepe cumque maiores, explicabo ad consequatur reprehenderit quam unde! Sit amet vitae eos!
          </div>
        </section>
        <section>
          <div className="mb-8 md:mb-16 text-yellow-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati fugit recusandae perferendis unde voluptates accusamus? Possimus in ullam, perspiciatis voluptatum temporibus, id, adipisci ut eligendi assumenda aliquid porro? Debitis rerum modi earum ipsa. Accusantium distinctio animi earum, saepe cumque maiores, explicabo ad consequatur reprehenderit quam unde! Sit amet vitae eos!
          </div>
        </section>
        <section>
          <div className="mb-8 md:mb-16 text-blue-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati fugit recusandae perferendis unde voluptates accusamus? Possimus in ullam, perspiciatis voluptatum temporibus, id, adipisci ut eligendi assumenda aliquid porro? Debitis rerum modi earum ipsa. Accusantium distinctio animi earum, saepe cumque maiores, explicabo ad consequatur reprehenderit quam unde! Sit amet vitae eos!
          </div>
        </section>
        <section>
          <div className="mb-8 md:mb-16 text-purple-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati fugit recusandae perferendis unde voluptates accusamus? Possimus in ullam, perspiciatis voluptatum temporibus, id, adipisci ut eligendi assumenda aliquid porro? Debitis rerum modi earum ipsa. Accusantium distinctio animi earum, saepe cumque maiores, explicabo ad consequatur reprehenderit quam unde! Sit amet vitae eos!
          </div>
        </section>
        <section>
          <div className="mb-8 md:mb-16">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati fugit recusandae perferendis unde voluptates accusamus? Possimus in ullam, perspiciatis voluptatum temporibus, id, adipisci ut eligendi assumenda aliquid porro? Debitis rerum modi earum ipsa. Accusantium distinctio animi earum, saepe cumque maiores, explicabo ad consequatur reprehenderit quam unde! Sit amet vitae eos!
          </div>
        </section>
        <section id="about">
          <div className="mb-8 md:mb-16 text-orange-500">
            <h1>
              All about the people we know.
            </h1>
          </div>
        </section>

      </div>
    </main>
  );
}
