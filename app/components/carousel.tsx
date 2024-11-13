import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import carouselData from "@/data/carouselData.json"

interface CarouselMapsProps {
    handleOnClick: (sectionID: string) => () => void

}

export default function CarouselMaps(props: CarouselMapsProps) {
    const { handleOnClick } = props

    return (
        <section className="w-full flex items-center justify-center relative z-10">
            <Carousel className="relative w-full max-w-6xl" plugins={[Autoplay({ delay: 9000 })]}>
                <CarouselContent>
                    {carouselData.map((data, index) => (
                        <CarouselItem key={index}
                            className="w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        >
                            <div className="flex align-middle gap-2 px-14 cursor-pointer" onClick={handleOnClick("/#" + data.slug)}>
                                <Image src={data.avatar} width={25} height={25} alt="avtr" />
                                <div className="flex align-middle gap-1">
                                    <h4 className="font-semibold text-lg">{data.name}</h4>
                                    <span className='pt-1'>{data.message}</span>
                                </div>
                            </div>
                            <div className="-pt-10">
                                <img
                                    src={data.map}
                                    className="block w-full"
                                    alt="..." />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 z-[1] flex w-[15%] items-center justify-center opacity-50 transition-opacity duration-150 hover:bg-transparent" />
                <CarouselNext className="absolute right-0 z-[1] flex w-[15%] items-center justify-center opacity-50 transition-opacity duration-150 hover:bg-transparent" />
            </Carousel>
        </section>
    )
}
