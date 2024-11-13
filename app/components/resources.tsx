import Image from "next/image"

export default function Resources(props: { hasLocation: string }) {
    const { hasLocation } = props
    return (
        <div className="container flex flex-col gap-2 mx-auto">
            <h3 className='font-bold text-lg'>Resources of Bibliography and References</h3>
            {
                (hasLocation === '' || hasLocation === '#maghizhan') && <div className="flex gap-2 text-lg flex-col align-middle justify-center">
                    {
                        hasLocation !== '#maghizhan' && <div className="flex pt-1 align-middle gap-2 cursor-pointer">
                            <Image src="/avatarM.png" width={25} height={25} alt="avtr" />
                            <h4 className="font-semibold">Maghizhan</h4>
                        </div>
                    }
                    <div>
                        <h3 className='font-semibold pb-2'>Blog 1: Indians in Australia</h3>
                        <li>
                            <a href="https://news.mit.edu/2015/india-drift-eurasia-0504" target="_blank" className="text-blue-500 underline">Chu, J. (2015, May 4).</a> India drift. MIT News | Massachusetts Institute of Technology.
                        </li>
                        <li>
                            <a href="https://culturalatlas.sbs.com.au/indian-culture/indian-culture-indians-in-australia#indian-culture-indians-in-australia" target="_blank" className="text-blue-500 underline">Indian Culture</a> - Indians in Australia. (n.d.). Cultural Atlas; Mosaica.
                        </li>
                        <li>
                            <a href="https://www.bbc.com/news/science-environment-21016700" target="_blank" className="text-blue-500 underline">Morelle, R. (2013, January 14).</a>  Genes link Australians with India. BBC News.

                        </li>
                        <li>
                            <a href="https://www.scientificamerican.com/article/genomes-show-indians-influx-to-australia-4000-years-ago/" target="_blank" className="text-blue-500 underline">Yong, E., & magazine, N. (2013, January 14).</a> Genomes Show Indians Influx to Australia 4,000
                            Years Ago. Scientific American.

                        </li>
                        <li>
                            <a href="http://www.sciencedaily.com/releases/2013/01/130114152952.htm" target="_blank" className="text-blue-500 underline">Max-Planck-Gesellschaft.</a> (2013, January 14). Gene flow from India to Australia about 4,000
                            years ago. ScienceDaily. Retrieved November 7, 2024 from

                        </li>
                        <li>
                            Pugach, I., Delfin, F., Gunnarsdóttir, E., Kayser, M., & Stoneking, M. (2013). <a href="https://doi.org/10.1073/pnas.1211927110" target="_blank" className="text-blue-500 underline">Genome-wide data</a>
                            substantiate Holocene gene flow from India to Australia. Proceedings of the National Academy
                            of Sciences, 110(5), 1803–1808.

                        </li>
                    </div>
                    <div>
                        <h3 className='font-semibold pb-2'>Blog 1: Indians in Australia</h3>
                        <li>
                            Watts, D. , Brereton, . Bridget M. and Robinson, . Arthur Napoleon Raymond (2024, November
                            7). <a href="https://www.britannica.com/place/Trinidad-and-Tobago" target="_blank" className="text-blue-500 underline">Trinidad and Tobago.</a> Encyclopedia Britannica.
                        </li>
                        <li>
                            <a href="https://thecaribbeancamera.com/indian-arrival-history-culture-identity/" target="_blank" className="text-blue-500 underline"> Chutkhan, T. J. (2022, May 29). Indian arrival:</a> History, culture, identity - The Caribbean
                            Camera. The Caribbean Camera.
                        </li>
                        <li>
                            Foster, M. (2020, May 3). <a href="https://guyanachronicle.com/2020/05/03/appreciation-of-the-indo-guyanese-culture/" target="_blank" className="text-blue-500 underline">Appreciation of the Indo-Guyanese culture.</a> Guyana Chronicle.

                        </li>
                        <li>
                            Harry, C. (2024). CUNY Academic Works CUNY Academic Works Dissertations, Theses, and
                            Capstone Projects CUNY Graduate Center The Migration of South Asians from India to Guyana:
                            The Journey, The Migration of South Asians from India to Guyana: The Journey, Struggles in a
                            New Land, Reasons for Changes Over Time and Struggles in a New Land, Reasons for Changes
                            Over Time and Their Cultivation of a New Culture. Their Cultivation of a New Culture. City
                            University of New York.
                            Peoples. (n.d.). <a href="https://www.embassyofguyana.be/about-peoples.php" target="_blank" className="text-blue-500 underline">Embassy of Guyana</a>
                        </li>
                        <li>
                            Wilson, K. (2021, May 28). <a href="https://exceptionalcaribbean.com/2021/05/28/over-180-years-of-indians-in-the-caribbean/" target="_blank" className="text-blue-500 underline">Over 180 Years of Indians in the Caribbean.</a> Where Did Indians
                            Come from and How Have They Impacted the Caribbean?; Exceptional Caribbean.
                        </li>
                    </div>
                </div >
            }
            {
                (hasLocation === '' || hasLocation === '#rhea') && <div className="flex gap-2 text-lg flex-col align-middle justify-center">
                    {
                        hasLocation !== '#rhea' && <div className="flex pt-1 align-middle gap-2 cursor-pointer">
                            <Image src="/avatarR.png" width={25} height={25} alt="avtr" />
                            <h4 className="font-semibold">Rhea</h4>
                        </div>
                    }
                    <div>
                        <li>
                            <a href="https://learn.azimpremjiuniversity.edu.in/pluginfile.php/260685/mod_resource/content/0/From%20India%20to%20Europe.%20Roma%20History.pdf" target="_blank" className="text-blue-500 underline">From India to Europe:</a> Roma History, Project Education of Roma Children in Europe
                        </li>
                        <li>
                            <a href="https://www.britannica.com/topic/Rom" target="_blank" className="text-blue-500 underline">Roma,</a> Britannica, The Editors of Encyclopaedia Britannica, 2024
                        </li>
                        <li>
                            <a href="https://medium.com/sunlanguagetheories/hey-check-out-this-language-3-romani-a-balkan-but-also-indian-language-94eda546fce8" target="_blank" className="text-blue-500 underline">Romani, a Balkan</a> but also Indian Language, Kevin Sun
                        </li>
                        <li>
                            <a href="https://medium.com/crow-and-caravan/from-east-to-west-232be96adc96" target="_blank" className="text-blue-500 underline">From East To West</a>, Nicholas Nocturne
                        </li>
                        <li>
                            <a href="https://www.slurrp.com/article/the-food-of-the-roma-1668424206623" target="_blank" className="text-blue-500 underline">The Food Of The Roma:</a> How Nomads Adopted A Particular Cuisine, Slurrp Editorial

                        </li>
                        <li>
                            <a href="https://saffronandsilk.blogspot.com/2010/05/flamenco-and-kathak.html" target="_blank" className="text-blue-500 underline">Flamenco and Kathak</a>, blog post by Kamini

                        </li>
                        <li>
                            <a href="https://www.newindianexpress.com/cities/bengaluru/2019/Jun/27/exploring-link-between-kathak-and-flamenco-1995822.html" target="_blank" className="text-blue-500 underline">Exploring Link Between Kathak and Flamenco</a>, The New Indian Express, Taj Zehra, 2019
                        </li>
                    </div>
                </div >
            }
            {
                (hasLocation === '' || hasLocation === '#aishupriya') && <div className="flex gap-2 text-lg flex-col align-middle justify-center">
                    {
                        hasLocation !== '#aishupriya' && <div className="flex pt-1 align-middle gap-2 cursor-pointer">
                            <Image src="/avatarA.png" width={25} height={25} alt="avtr" />
                            <h4 className="font-semibold">Aishupriya</h4>
                        </div>
                    }
                    <div>
                        <li>
                            <a href="https://southasianheritage.org.uk/about-the-trust/" target="_blank" className="text-blue-500 underline">About the Trust. (n.d.).</a>South Asian Heritage Month. Retrieved November 8, 2024, from
                        </li>
                        <li>
                            <a href="https://books.openedition.org/africae/932?lang=en" target="_blank" className="text-blue-500 underline">Adam, M. (n.d.). Indian Africa</a> - Panorama of Socio-Religious Communities - Africae. OpenEdition Books. Retrieved November 8, 2024, from
                        </li>
                        <li>
                            <a href="https://www.hup.harvard.edu/books/9780674289888" target="_blank" className="text-blue-500 underline">Aiyar, S. (2015, April 6). Indians in Kenya </a>— Harvard University Press. Harvard University Press. Retrieved November 8, 2024, from
                        </li>
                        <li>
                            <a href="https://www.ssoar.info/ssoar/bitstream/document/32162/1/ssoar-2010-baubock_et_al-Diaspora_and_Transnationalism__Concepts.pdf" target="_blank" className="text-blue-500 underline">Bauböck, R., & Faist, T. (n.d.). www.ssoar.info Diaspora and Transnationalism:</a> Concepts, Theories and Methods. SSOAR. Retrieved November 8, 2024, from

                        </li>
                        <li>
                            <a href="https://britishonlinearchives.com/posts/category/articles/629/from-the-archive-the-indian-diaspora-in-british-colonial-africa" target="_blank" className="text-blue-500 underline">Broome, A. (2023, June 22). From the Archive: </a>The Indian Diaspora in British Colonial Africa. British Online Archives. Retrieved November 8, 2024, from
                        </li>
                        <li>
                            <a href="https://blogs.bl.uk/endangeredarchives/2022/01/east-african-life-writing-and-colonial-history-new-perspectives-from-eap-tanzanian-church-records-.html" target="_blank" className="text-blue-500 underline">Guth, W., & Kimaro, N. (2022, January 7). East African Life-Writing and Colonial History:</a> New Perspectives from EAP Tanzanian Church Records. Blogs. Retrieved November 8, 2024, from

                        </li>
                        <li>
                            <a href="https://commonwealthjournalists.org/2024/03/01/how-the-ugandan-asians-turned-from-adversity-to-success/" target="_blank" className="text-blue-500 underline">How the Ugandan Asians turned from adversity to success:</a> – C J A. (2024, March 1). Commonwealth Journalists Association. Retrieved November 8, 2024, from

                        </li>
                        <li>
                            <a href="https://blogs.bl.uk/sound-and-vision/south-asia/" target="_blank" className="text-blue-500 underline">Moliner, E., & Välimäki, V. (2023, October 16). Sound and vision blog:</a>South Asia. Blogs. Retrieved November 8, 2024, from

                        </li>
                        <li>
                            <a href="https://www.soas.ac.uk/research/library/special-collections" target="_blank" className="text-blue-500 underline">Special Collections.</a>(2024, November 5). SOAS. Retrieved November 8, 2024, from

                        </li>

                    </div>
                </div >
            }
            {
                (hasLocation === '' || hasLocation === '#nesara') && <div className="flex gap-2 text-lg flex-col align-middle justify-center">
                    {
                        hasLocation !== '#nesara' && <div className="flex pt-1 align-middle gap-2 cursor-pointer">
                            <Image src="/avatarN.png" width={25} height={25} alt="avtr" />
                            <h4 className="font-semibold">Nesara</h4>
                        </div>
                    }
                    <div>
                        <li>
                            <a href="http://www.jstor.org/stable/4413500" target="_blank" className="text-blue-500 underline">Judge, Paramjit S.</a> “Social Construction of Identity in a Multicultural State: Sikhs in Canada.” Economic and Political Weekly 38, no. 17 (2003): 1725–31.
                        </li>
                        <li>
                            <a href="http://www.jstor.org/stable/23619917" target="_blank" className="text-blue-500 underline">Buchignani, Norman.</a> “CONTEMPORARY RESEARCH ON PEOPLE OF INDIAN ORIGIN IN CANADA.” Sociological Bulletin 38, no. 1 (1989): 71–93.
                        </li>
                        <li>
                            <a href="http://www.jstor.org/stable/45073387" target="_blank" className="text-blue-500 underline">Jha, Nalini Kant.</a> “The Indian Diaspora in Canada: Looking Back and Ahead.” India Quarterly 61, no. 1 (2005): 184–200.

                        </li>
                        <li>
                            <a href="https://diplomacybeyond.com/diaspora-and-cultural-heritage-the-case-of-indians-in-canada/" target="_blank" className="text-blue-500 underline">Diaspora and Cultural Heritage:</a> The Case of Indians in Canada

                        </li>
                        <li>
                            Is a waning <a href="https://www.bbc.com/news/world-us-canada-68124559" target="_blank" className="text-blue-500 underline">Canadian</a> dream fuelling reverse migration in Punjab?

                        </li>
                    </div>
                </div >
            }
            {
                (hasLocation === '' || hasLocation === '#vikash') && <div className="flex gap-2 text-lg flex-col align-middle justify-center">
                    {
                        hasLocation !== '#vikash' && <div className="flex pt-1 align-middle gap-2 cursor-pointer">
                            <Image src="/avatarV.png" width={25} height={25} alt="avtr" />
                            <h4 className="font-semibold">Vikash</h4>
                        </div>
                    }
                    <div>
                        <li>
                            Judith Brown--Making a Modern <a href="https://learn.azimpremjiuniversity.edu.in/pluginfile.php/260686/mod_resource/content/0/Judith%20Brown--Making%20a%20Modern%20Diaspora.pdf" target="_blank" className="text-blue-500 underline">Diaspora.pdf</a>
                        </li>
                        <li>
                            The video has been used as the <a href="https://www.youtube.com/watch?v=oxl4q_jfDPI" target="_blank" className="text-blue-500 underline">Slavery and Indentured labor</a> evidence.

                        </li>
                        <li>
                            Information about <a href="https://youtu.be/mW3EzE9CUqw?si=x5m40uNDM2T4qe6i" target="_blank" className="text-blue-500 underline">Agkor Wat</a> from Combodia


                        </li>
                        <li>
                            <a href="https://youtu.be/tSHUzCkAuzI?si=rTqoChA4LFh_wAu2" target="_blank" className="text-blue-500 underline">Types of Architectural</a> monuments found in India

                        </li>
                        <li>
                            How an Indian Merchant Became Cambodia&#39;s First King: a <a href="https://www.youtube.com/watch?v=kpTUOhyFyvw" target="_blank" className="text-blue-500 underline">Story of Indianization</a>

                        </li>
                    </div>
                </div >
            }
        </div >
    )
}
