import Image from "next/image";

interface Props {
    handleOnClick: (sectionID: string) => () => void
}

export default function Nesara(props: Props) {
    const { handleOnClick } = props
    return (
        <div className="flex gap-2 text-lg flex-col align-middle justify-center">
            <div className="flex align-middle gap-2 cursor-pointer" onClick={handleOnClick("/#nesara")}>
                <Image src="/avatarN.png" width={25} height={25} alt="avtr" />
                <h4 className="font-semibold">Nesara</h4>
            </div>
            <h3 className="font-bold">INDIAN DIASPORA IN CANADA </h3>
            <div>
                According to the Census data from 2021, Canada is home to around 1.8 million people of Indian heritage, accounting for more than 5% of the total population. During July of this year, Diljit Dosanjh, an Indian artist, made history when his concert sold out in the Rogers Centre in Toronto within hours. He was also greeted by the Prime Minister of Canada, Justin Trudeau, before the concert where the duo cheered ‘Punjabi aa gaye hoye’ (The Punjabis are here). This leads me to wonder about the ways in which the outflow of the Indian (mostly Punjabi Sikhs) diaspora gave rise to such exchange of cultures and influenced the current lives of the people and the country of Canada. In this blogpost, I aim to explore the causes and controversies involved in the migrations and the way the Sikhs have constructed an identity for themselves in Canada which is now a multicultural state.
            </div>
            <div>
                To make it easy to understand, we can divide the migration of the Punjabi Sikhs into two phases: colonial and post-colonial. The earliest visit to Canada was done by the Sikhs that were part of the Sikh Military contingent in 1897. Their arrival was documented by the Vancouver’s Daily Province headlines read, “Turbaned Men Excite Interest: Awe-inspiring men from India held the crowds”. Just a few years later, an Anti-Asian sentiment is said to have developed that led the immigration of Indians to be largely frowned upon by the Canadians. Lyrics of songs during that time explains the social climate and attitude of the West towards South Asians, “We welcome as brothers all white men still, But the shifty yellow race, whose word is vain, who oppress the weak, must find another place.”
            </div>
            <div>
                Despite this, the first wave of immigration was high in number, and male dominated with 95% being men. The main reason for this initial migration was the push factors like agrarian crisis in Punjab and pull factors like the availability of employment opportunities and higher wages in Canada. The industries that they worked in were mostly forestry, fishing and railways. They got jobs easily because there was a lack of human capital and Canada was busy making immigrations difficult for the Chinese and Japanese populations
            </div>
            <div>
                By the end of 1907, there were 5179 Indians, and the government was forced to take notice of this. Most employers preferred hiring Punjabi Sikhs because of their willingness to accept low pay and pleasing work ethic. This caused the local Canadians to lose out on jobs and caused tensions between local labor unions and the government.  Racial chaos began during the end of 1907 and a lot of workers were laid off from work and forbidden from using public property and facilities. The Asiatic Exclusion League was formed which mistreated and discriminated against the Indian, Japanese and Chinese communities.
            </div>
            <div>
                In 1908, the Canadian government passed the discriminatory Continuous Journey Act which sought to hinder migrations from South Asia. The Act allowed migrants to only enter the Canadian port from their country of origin, even though there were no direct routes. The government also demanded that all entrants have 200 dollars in their possession. The Komagata Maru incident occurred due to this in which 376 Sikhs who traveled for months by boat via the ‘continuous passage’ were denied entry into the country. Several men died on the way back and this disheartened existing migrants which led them to relocate back to India.
            </div>
            <div>
                In the post-colonial/World War II phase, Canada realised the economic need for immigrants and formed pro-immigration policies which gave way to skilled workers and students moving to Canada from India. This time, the migrant populations included Punjabi Hindus, Punjabi Sikhs and Punjabi Muslims, Gujaratis, Tamilians and Bengalis moving for employment/ trade opportunities, education purposes and reuniting with relatives in Canada. The industry of work in this phase changed from menial jobs in the colonial phase to jobs like professors, engineers, physicians. Most Indian Canadians have settled in Ontario, British Columbia, Vancouver.
            </div>
            <div>
                Moving on, the Indian diaspora established their identity, culture and presence through their involvement and contributions to the politics and economy of the country.  Canada adopted multiculturalism as an official policy in 1971 which enables coexistence of multiple cultural groups by allowing cultural citizenship through laws that protect and preserve the rights and privileges of different communities. Taking on important positions, several ministers in Canadian government of Indian origin include, MP Harjit Sajjan, the Minister of National Defence and MP Amarjeet Sohi Minister of Infrastructure and Communities, MP Navdeep Bains, Minister for Innovation, Science and Economic Development and MP Bardish Chagger, was sworn in as minister of Small Business and Tourism.
            </div>
            <div>
                Additionally, the culinary scene has been greatly influenced by North Indian cuisine. Initially, the migration was mostly by single men who lived in camp settings, making Indian food was out of question due to lack of skill and resources. After movements happened that included families, grocery stores and restaurants opened up to fill the market demands. Restaurants that cater Goan cuisine and Hakkan cuisine are gradually increasing. Gurudwars and temples offer food as part of blessing (prasadam). Canada has also accommodated various languages apart from its two official languages, English and French. Punjabi, Gujarati, Tamil, Hindi are all spoken throughout different parts of Canada. By working in the country for more than a century now, it is safe to say that the Indian diaspora has immensely contributed to the betterment of the economy. In a recent report, it was found that the students of Punjab invest around 68000 crore rupees every year in Canadian education.
            </div>
            <div>
                In conclusion, the Punjabi population in Canada has both embraced and influenced the way of life in Canada in terms of politics, food, culture, language and economy. Slowly depleting job market and disillusionment about the prospect of a better life has led to a wave of reverse migration since 2019. However, some people of Indian origin, who’s families settled in Canada during the early 1900s refuse to come back because they think of Canada as their home, their land and coming back to India would not replace this notion.
            </div>
        </div>
    )
}
