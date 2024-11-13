import Image from "next/image";

interface Props {
    handleOnClick: (sectionID: string) => () => void
}

export default function Aishupriya(props: Props) {
    const { handleOnClick } = props

    return (
        <div className="flex gap-2 text-lg flex-col align-middle justify-center">
            <div className="flex align-middle gap-2 cursor-pointer" onClick={handleOnClick("/#aishupriya")}>
                <Image src="/avatarA.png" width={25} height={25} alt="avtr" />
                <h4 className="font-semibold">Aishupriya</h4>
            </div>
            <h3 className='font-bold'>GUJARATI COMMUNITY IN EAST AFRICA</h3>
            <div>
                The Gujarathi community is one of the descents of the west part of
                Gujarat state in India, which has migrated all over the world. This
                Gujarati community has been unified for its ethnicity and language. The
                Gujarati community is also called by different names in different parts
                of the world, like Lohana and Patel communities in east Africa, British
                Gujaratis and Ugandan Asians in the United Kingdom, Gujarati Americans
                and Canadians in North America, Kutchi Gujaratis and Muslims (Sunni
                Sunni Muslims), and Nattukottai Chettiars and Dawoodi Bohras and Khojas
                in southeast Asia. In all these places, they have vibrantly shined and
                established their pride in their own history, language, religion,
                culture, food, dressing style, etc.
            </div>
            <div className="flex justify-center">
                <Image
                    src="/aishu6.png"
                    width={400}
                    height={400}
                    alt="img"
                />
            </div>
            <h4 className='font-semibold'>HISTORY -</h4>
            <div>
                Gujaratis have a great and proud long history with which they have
                spewed, roamed, and migrated in east Africa and also some parts of the
                world. which has brought major changes in economic growth, population
                history styles, etc. in both India and East Africa. This migration from
                India started only due to one reason, which is trade; then it had many
                reasons for migration. The Gujarati merchants were very specialized in
                their art works of textiles, spices, other goods, etc. across the Indian
                Ocean. They used boats and ships and sold their goods in different
                countries. The main reason Indians migrated was the many exchanges of
                goods permanently, and they were well known to East Africa with the sea
                routes through the Indian. Ocean with their boats
            </div>
            <div className="flex justify-center">
                <Image
                    src="/aishu5.png"
                    width={700}
                    height={700}
                    alt="img"
                />
            </div>
            <div>
                Gujarat Muslims played a male role by starting migration to East Africa
                with small businesses in the coastal cities. Further, they extended the
                business, and they did their own areas or places. After this, in the
                same 19th century, east Africa was under British rulers. They forced and
                encouraged the Indians to migrate to East Africa. Especially the daily
                wage workers, skilled laborers who helped them in building colonial
                infrastructure, and clerks. British people took advantage of this
                migration and made gujaratis to build the railway tracks connecting the
                Mombasa and coast of Lake Victoria. Many small contract workers of this
                took its good opportunity and stayed back, creating their own ways and
                establishing their own businesses. At the same time, East Africa lacked
                laborers and other workers, which brought a great opportunity to the
                small businesses and migrated daily wage workers. and many people played
                the mediator role between the African farmers and European consumers. At
                this period they laid their roots, which got stronger with time. By the
                1920s-1950s, Gujaratis were strong and popular in their sectors,
                especially in the wholesale sector, real estate sectors, business, and
                textile-selling species. Some Gujaratis got more and more richer than
                natives.As all their population grew, they started to set up their own
                buildings, schools, shops, hospitals, temples, mosques, and some
                centers. They started supporting the newcomers. Then it was the
                post-independence period in which Africans started Africanization, which
                made many Gujaratis lose their jobs. Then comes the most bad and worst
                history of the Gujarati community that was from the Ugandan president,
                Idi Amin. He led the expulsion of Asians in Africa, through which many
                lost their lives, and many went in search of safe places towards Canada,
                the US, etc., in which many lost their families. After these moments
                cooled down, the situation of Gujaratis was better, then they again
                started their works, etc., which had a great impact on Africa. The
                spirit of hard work spreads all over with the natives also. At present,
                after facing many challenges, they had done their own places.
            </div>

            <div className="flex justify-center">
                <Image
                    src="/aishu3.png"
                    width={700}
                    height={700}
                    alt="img"
                />
            </div>
            <div>
                This is a photo of gujarati community people in uganda at the time of
                1972.
                <a href="https://commonwealthjournalists.org/2024/03/01/how-the-ugandan-asians-turned-from-adversity-to-success/%E2%80%99">
                    moving out
                </a>
            </div>

            <h4 className='font-semibold'>CUISINE -</h4>
            <div>
                Food is one of the sources that we enjoy and love. For Gujarati
                community people at that time, food was the resource to live, that&#39;s
                all. They wanted themselves to adjust to the new food, their recipe, and
                the taste. It was just difficult for them. As the time passed, they
                started to use the East African local food. They started using African
                ingredients like maize, cassava, plantains, and coconut, which are also
                sort of less common in India. As some foods were common in both
                countries, the flavor and taste were different. Gujaratis started making
                themselves adopted or adjusted to their flavors. Gujarati dishes like
                samsa dhokla bhajia, etc., flavors got changed, which brought many new
                dishes like mahamri and bhajia, which also became famous in the region.
                Even the religions had their own specific food, which they took for
                their worship places, and they were also famous as the time passed.
                Desserts like jalebi, ladoo, and barfi became popular at functions in
                East Africa. Some street dishes, like panipura and bhel puri, were
                adopted by both people with Swahili flavors.
            </div>

            <div className="flex justify-center">
                <Image
                    src="/aishu4.png"
                    width={700}
                    height={700}
                    alt="img"
                />
            </div>

            <div>
                Gujarati food in east africa with both country flavors.{" "}
                <a href="https://www.google.com/imgres?imgurl=https://images.slurrp.com/prod/articles/eusyb8sa9lv.webp&tbnid=fFIp_NueQbvOiM&vet=1&imgrefurl=https://www.slurrp.com/article/bharazi-a-taste-of-gujarati-food-in-east-africa-1664808970967&docid=Pmo6UMB1BDfBeM&w=1280&h=720&itg=1&source=sh/x/im/m5/1&kgs=380a48b477d26dd0&shem=abme,trie">
                    FOOD
                </a>
            </div>

            <h4 className='font-semibold'>LANGUAGE -</h4>
            <div>
                Language was one of the big barriers between the local people and the
                Gujaratis. As Gujarati people, the common language was Gujarati. They
                helped themselves to learn English and Swahili, and then they started
                communication. Some Gujaratis knew Swahili and English as they were
                traveling before for the sake of trade. The rest people used their own
                language in their own community.
            </div>
            <div className="flex justify-center">
                <Image
                    src="/aishu1.png"
                    width={700}
                    height={700}
                    alt="img"
                />
            </div>

            <div>
                <a href="https://www.google.com/imgres?imgurl=https://opinionmagazine.co.uk/wp-content/uploads/2021/09/4b40c73d585255a6299314146674b253_L-1.jpg&tbnid=SZupeedV3vbYQM&vet=1&imgrefurl=https://opinionmagazine.co.uk/south-asians-and-their-languages-in-eastern-africa/&docid=gS6n67LR3gFLFM&w=790&h=415&source=sh/x/im/m5/1&kgs=6b6d0b2610ae5ae3&shem=abme,trie">
                    Language
                </a>
            </div>

            <h4 className='font-semibold'>Dressing style -</h4>

            <div>
                Dressing is just not something we wear to close our bodies. It shows our
                standard nowadays, but in the olden days it showed the culture and the
                tradition. The traditional wear of Gujarati people was saree salwar
                kameez and chaniya choli for women, and kurta for dhoti and sherwani for
                men. especially in their festivals, they used their{" "}
                <a href="https://local-moda.blogspot.com/2012/12/traditional-dress-of-rabari.html">
                    ethnic dress
                </a>
            </div>

            <div className="flex justify-center">
                <Image
                    src="/aishu2.png"
                    width={700}
                    height={700}
                    alt="img"
                />
            </div>
            <div>Gujarathi mens in their ethnic dresses .</div>

            <div>
                After they migrated, Gujarati women started to change some of their
                dressing styles, like wearing their type of saree, which is less
                elaborate than theirs, and African kanga wraps for daily use, while at
                the same time men started to wear Swahili styles and western attire. but
                they wore their ethnic dresses to the functions and festivals, which
                made those dresses popular. But there were differences in different
                Gujarati community religions, like some changes.
            </div>

            <h4 className='font-semibold'>RELIGION</h4>

            <div>
                There are many religions in east Africa of the Gujarati community. The more popular ones are Hindus and Muslims, but there are even other religions like Buddhists, Sikhs, and Jains. All these religions have built their own worship places in East Africa. Even offerings to the goods are different according to the religion. Their dressing style is the same, but they have their own changes. The food tradition is also different, like Hindu vegetarians, even Japanese, but not by other religions.
            </div>

            <h4 className='font-semibold'>
                CONCLUSION
            </h4>

            <div>
                I would like to say that Gujarati people have changed a lot to get adopted to the east African places. by changing and changing in their traditional culture, behavior mindsets, etc., which has helped them a lot to get adopted. Now they cannot be highly distinguished between the local and Gujarati people.
            </div>
        </div>
    );
}
