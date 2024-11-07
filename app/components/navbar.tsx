"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
    const router = useRouter()

    const handleOnClick = (sectionID: string) => () => {
        router.push(sectionID)
    }

    return (
        <div className='container sticky top-0 py-5 text-lg font-semibold flex px-5 bg-white'>
            <div className='container'>
                <div className='flex gap-5'>
                    <div>
                        <Image
                            src="/logo.jpg"
                            width={30}
                            height={30}
                            alt="img"
                        />
                    </div>
                    <div>To The World From India</div>
                </div>
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
