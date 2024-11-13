import Image from "next/image";

interface Props {
    handleOnClick: (sectionID: string) => () => void
}

export default function Vikash(props: Props) {
    const { handleOnClick } = props
    return (
        <div className="flex gap-2 text-lg flex-col align-middle justify-center">
            <div className="flex align-middle gap-2 cursor-pointer" onClick={handleOnClick("/#vikash")}>
                <Image src="/avatarV.png" width={25} height={25} alt="avtr" />
                <h4 className="font-semibold">Vikash</h4>
            </div>
            <h3 className="font-bold">Indian diaspora in the Southeast Asian Architectural Styles</h3>
            <h4 className="font-semibold">
                Introduction
            </h4>
            <div>
                Indentured labor played a key role in shaping the Indian diaspora in Southeast Asia, especially during the colonial era. After slavery was abolished, the British brought many Indian laborers to work in plantations, railways, and other infrastructure projects across regions like Malaysia, Singapore, and Fiji. These workers, mostly from Tamil Nadu and Bihar, not only contributed to the economy but also brought Indian cultural influences with them, including architecture and religious traditions.

            </div>
            <div>
                The impact of these workers can still be seen in Southeast Asia’s architecture. Many temples, shrines, and even elements of urban design were influenced by Indian culture, with designs incorporating motifs and religious iconography from India. These laborers, though often working in tough conditions, helped shape the architectural landscape, leaving a lasting cultural and architectural imprint. Their contributions created a deep connection between India and Southeast Asia that can be traced in the region’s built environment today.

            </div>

            <h4 className="font-semibold">Southeast Asian Architectural Styles Inspired by Indian Traditions
            </h4>
            <div>
                Southeast Asia’s architecture is deeply shaped by Indian influences, which began over a thousand years ago. This can be seen in temples, palaces, and city layouts across the region, particularly through elements of Hindu and Buddhist architecture. Indian design methods, spiritual themes, and building styles were shared through religious and cultural exchanges, helping shape Southeast Asia’s unique architectural heritage. This blog explores these Indian influences on Southeast Asian buildings and urban planning, reflecting a blend of cultural and spiritual traditions.
            </div>

            <h4 className="font-semibold">Indian Influence on Southeast Asian Architecture</h4>
            <div>
                Southeast Asia’s architecture has been greatly influenced by India, starting as early as a few centuries CE. Trade routes between the Indian subcontinent and Southeast Asia played a key role in the exchange of cultural practices, including architecture. Indian traders, scholars, and religious figures introduced Indian beliefs, art, and architectural styles to the region.

            </div>
            <div>
                As <i>Global South Asians</i> by Judith M. Brown explains, the spread of Hinduism and Buddhism was central to how Indian architectural styles spread. These religions influenced how buildings were designed, especially temples and palaces, by incorporating Indian elements like sacred geometry, gods, and mythical figures.

            </div>
            <div>
                This mix of Indian ideas with local traditions led to the creation of unique Southeast Asian architectural forms. Temples like Angkor Wat in Cambodia and Borobudur in Indonesia showcase how Indian influences were adapted, blending Indian design with Southeast Asian culture to create something distinct and new. These buildings reflect both the religious influences of Hinduism and Buddhism and the creativity of local builders.

            </div>

            <h4 className="font-semibold">
                The Role of Temples and Religious Architecture in Indian Influence on Southeast Asia
            </h4>
            <div>
                Temples and religious buildings were some of the most important ways Indian architectural styles influenced Southeast Asia. A prime example is Angkor Wat in Cambodia, which represents the peak of Indian architectural inspiration. Constructed in the early 12th century during the reign of King Suryavarman II, this Hindu temple was initially dedicated to the god Vishnu. Its design is similar to the temples of India, especially those from the Deccan and Tamil regions, with features like elaborate stone carvings, depictions of Indian deities and epics like the <i>Mahabharata</i> and <i>Ramayana</i>, and the use of cosmic symbols.
            </div>
            <div>
                In Indonesia, both Borobudur and Prambanan temples reflect the blend of Indian styles with local architectural traditions. Borobudur, built in the 9th century, is a massive Buddhist structure, inspired by Indian Buddhist temples, particularly in its use of terraces and stupas. Prambanan, a Hindu temple complex, follows the architectural style of North Indian temples, with tall spires that are similar to those found in Indian temple designs.

            </div>

            <h4 className="font-semibold">
                Influence on Palaces and City Layouts
            </h4>
            <div>
                Indian architectural styles influenced not only temples but also the design of royal palaces and urban layouts in Southeast Asia. The Indian concept of the mandala, a geometric symbol representing the universe, was particularly influential and was used in city planning and palace layouts. Southeast Asian rulers adopted features like gardens, courtyards, and inner sanctuaries from Indian palace traditions. These elements are evident in the palaces of Thailand, Cambodia, and Laos
                In the Sukhothai kingdom of Thailand, Indian influences shaped royal architecture in distinctive ways. Elevated platforms were used for royal buildings, stepped pyramids were built, and detailed bas-relief carvings adorned palace structures, all of which reflected ideas brought from Indian traditions. These design choices symbolized the king&#39;s sacred role, aligning with the Hindu concept of a divine ruler who is both a leader and a spiritual figure.

            </div>

            <h4 className="font-semibold">Sculptural and Artistic Traditions</h4>
            <div>
                The impact of Indian architecture on Southeast Asia went beyond just building styles, influencing the artistic and sculptural practices in the region as well. Stone carvings in temples frequently feature Indian mythological figures, like gods, goddesses, and other legendary characters. This is evident at sites such as Angkor Wat in Cambodia, where images of Apsaras (heavenly dancers from Indian mythology) appear in many intricate carvings. Similarly, the temples in Bali include Indian-style carvings that tell sacred stories and showcase the Indian-inspired craftsmanship and detailed designs often seen in Indian temples. This influence shaped a unique artistic tradition in Southeast Asia, blending Indian iconography with local style.

            </div>

            <h4 className="font-semibold">Conclusion</h4>
            <div>
                The architectural styles of Southeast Asia reveal a strong and lasting Indian influence, reflecting centuries of cultural exchange. From magnificent Hindu and Buddhist temples like Angkor Wat, Borobudur, and Prambanan to the design of royal palaces and city layouts, Indian concepts helped shape the identity of Southeast Asian architecture. These structures not only highlight the spiritual values and artistic skills of their time but also demonstrate how Indian traditions left a lasting impact across the region.
            </div>
            <div>
                Today, this shared heritage continues to captivate architects, artists, and scholars, reminding us of the deep, historical connections between India and Southeast Asia. The profound influence of Indian architecture and art in Southeast Asia remains an area of rich exploration, offering insights into the long-standing ties between these regions

            </div>
        </div>
    )
}
