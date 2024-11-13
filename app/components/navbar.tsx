"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
    const router = useRouter()

    const handleOnClick = (sectionID: string) => () => {
        router.push(sectionID)
    }

    return (
        <div className='max-w-7xl sticky top-0 py-5 text-lg font-semibold flex px-5 bg-white z-20'>
            <div className='container'>
                <button className='flex gap-2' onClick={handleOnClick("/")}>
                    <div>
                        <Image
                            src="/logoUI2.ico"
                            width={30}
                            height={30}
                            className="w-10 h-10 sm:w-8 sm:h-8"
                            alt="img"
                        />
                    </div>
                    <div>To The World From India</div>
                </button>
            </div>
            <div className='container flex justify-end '>
                <div className='flex gap-5'>
                    <div>
                        <button onClick={handleOnClick("/about")}>About</button>
                    </div>

                    <div>
                        <button onClick={handleOnClick("/")}>Blog</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
