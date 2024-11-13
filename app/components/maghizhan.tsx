import Image from "next/image";

interface Props {
    handleOnClick: (sectionID: string) => () => void
}

export default function Maghizhan(props: Props) {
    const { handleOnClick } = props
    return (
        <div className="flex gap-2 text-lg flex-col align-middle justify-center">
            <div className="flex align-middle gap-2 cursor-pointer" onClick={handleOnClick("/#maghizhan")}>
                <Image src="/avatarM.png" width={25} height={25} alt="avtr" />
                <h4 className="font-semibold">Maghizhan</h4>
            </div>
            <h3 className='font-bold'>Blog 1: Indians in Australia</h3>
            <div>
                A study suggests that some aboriginal Australians can trace almost 11% of their genes to Indian
                migrants who reached the island continent around 4000 years ago. Irina Pugach, a postdoctoral
                researcher in the Stoneking’s laboratory discovered the Indian migration by analysing genetic
                variations across genomes of almost 350 individuals. The individuals included aboriginal
                Australians from the Northern territory, highlanders from Papua New Guinea (PNG) and people
                from Southeast Asia and India. (Yong & magazine, 2013)
            </div>
            <div>
                Moreover, she traced a genetic association between Australians and Africans, when she
                compared the genomes of Australian and Mamanwa, a negrito group from the Philippines around
                36000 years ago. Hence, she was not able to conclude that all the migrations into Australia took
                place at the same time.

            </div>
            <div>
                In addition to that, fossil records of the Australian dingo closely resemble Indian dogs.
                Coincidentally, there are other changes at the same time, including a change in plant processing
                and stone tool technologies such as the Microliths. (Max-Planck-Gesellschaft, 2013)
            </div>
            <div className="flex flex-col md:flex-row md:justify-center md:gap-5">
                <Image
                    src="/maghi1.jpg"
                    width={400}
                    height={400}
                    className="w-full md:w-1/2 lg:w-[400px] h-auto"
                    alt="img"
                />
                <Image
                    src="/maghi2.jpg"
                    width={400}
                    height={400}
                    className="w-full md:w-1/2 lg:w-[400px] h-auto"
                    alt="img"
                />
            </div>
            <div>
                The image on the left is a microlith fossil, and the image on the right is the newer version of the
                microlith.
            </div>
            <div>
                In recent years, during the 19th century, there were a lot of Indian labourers who migrated into
                Australia. Once the White Australia Policy, a policy that prohibits non-European immigrants to
                enter Australia, had been removed, more Indians with a broader skill set migrated into Australia.
            </div>
            <div>
                Indian communities in Australia are diverse, with various people from different religious,
                cultural and linguistic groups. The Indian population also contributed to religious diversity, with
                the constructions of new Hindu, Sikh and Jain places of worship. (Indian Culture - Indians in
                Australia, n.d.)
            </div>
            <div>
                Around 140 million years ago, India, along with Africa, South America, Antarctica and Australia
                were in a huge supercontinent, known as Gondwana. During those eras, India and Australia were
                together, in the same landmass. However, India collided into the landmass of Eurasia, which
                soon led to the formation of the Himalayan mountains. (Chu, 2015)
            </div>
            <div>
                This might be another reason for India and Australia to share a lot of similarities in genomes of
                humans and of the other biotas in there. As of 2020, more than 3% of Australia is populated by
                Indians.

            </div>

            <h3 className="font-bold">Blog 2: Indians in the Caribbean Islands</h3>
            <div>
                After slavery was aborted in 1834, British plantation owners had to find new labourers to work
                in their sugar plantations. Thus, they brought around 500 000 Indians as indentured labourers.
                They were all from various parts of India. Majority of them were from Uttar Pradesh, and
                western Bihar while there were some others from other areas such as Punjab, Madras and West
                Bengal. Many Indians saw this as a good opportunity to get away from India which faced a lot of
                famines during those times. Other than famines, poverty and diseases were another cause that
                forced Indians to leave their country for their good. (Harry, 2024) In return for moving to the
                Caribbean, they had to work in sugar plantations. People left India with their families and
                migrated mostly to Trinidad and Tobago, Guyana, Suriname and Jamaica. (Chutkhan, 2022)
            </div>
            <div>
                Indian cuisine and Caribbean cuisine share lots of similarities. There are many Indian influences
                such as chicken curry, paratha, roti, etc. Moreover, there are a lot of similar Indian sweets such
                as ladoos, gulab jamuns, barfis and jalebis.

            </div>
            <div>
                In Music knowledge, a special fusion music known as ‘Chutney Music’ is very famous in the
                Caribbean. Traditional Indian music is fused with Caribbean style. (Wilson) Moreover, Hindi is a
                widely recognised language in the Caribbean islands, mainly in Suriname and Guyana.
                Moreover, they also share similar religious and cultural beliefs, with Hinduism being one of the
                more popular religions.

            </div>
        </div>
    )
}
