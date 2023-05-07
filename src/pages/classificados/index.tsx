import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CardAnnouncement } from "@/components/cards/CardAnnouncement";
import { CardAnnouncementH } from "@/components/cards/CardAnnouncement copy";
import { CardCategory } from "@/components/cards/CardCategory";

const categories = [
    {
        id: '1',
        name: 'Eletrônicos e celulares',
        icon: '/icons/icon-16.svg'
    },
    {
        id: '2',
        name: 'Serviços',
        icon: '/icons/icon-17.svg'
    },
    {
        id: '3',
        name: 'Moda e beleza',
        icon: '/icons/icon-18.svg'
    },
    {
        id: '4',
        name: 'Agro e indústria',
        icon: '/icons/icon-19.svg'
    },
    {
        id: '5',
        name: 'Para a sua casa',
        icon: '/icons/icon-20.svg'
    },
    {
        id: '6',
        name: 'Autos e peças',
        icon: '/icons/icon-07.svg'
    },
    {
        id: '7',
        name: 'Imóveis',
        icon: '/icons/icon-08.svg'
    },
]

export default function Classified() {
    return (
        <div className="flex flex-col">
            <Header />
            <main className="min-h-screen">
                <section>
                    <div className="h-[235px] bg-blue-500"></div>
                    <div className="max-w-7xl mx-auto px-3 mt-[-140px] flex flex-col items-center">
                        <div className="flex flex-col items-center mb-4">
                            <h2 className="text-2xl font-semibold text-white">Navegue por categoria</h2>
                            <a href="" className="text-white font-semibold">Ver mais</a>
                        </div>
                        <div className="grid grid-cols-7 gap-4 w-full">
                            {categories.map(category => <CardCategory key={category.id} {...category} />)}
                        </div>
                    </div>
                </section>
                <div className="max-w-7xl mx-auto px-3 py-20 flex flex-col items-center">
                    <div className="flex flex-col items-center mb-4">
                        <h2 className="text-2xl font-semibold">Produtos de parceiros</h2>
                        <a href="" className="text-blue-500 font-semibold">Ver mais</a>
                    </div>
                    <div className="grid grid-cols-4 gap-4 w-full">
                        <CardAnnouncement />
                        <CardAnnouncement />
                        <CardAnnouncement />
                        <CardAnnouncement />
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-3 pb-20 flex flex-col items-center">
                    <div className="flex flex-col items-center mb-4">
                        <h2 className="text-2xl font-semibold">Produtos mais recentes</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <CardAnnouncementH />
                        <CardAnnouncementH />
                        <CardAnnouncementH />
                        <CardAnnouncementH />
                        <CardAnnouncementH />
                        <CardAnnouncementH />
                        <CardAnnouncementH />
                        <CardAnnouncementH />
                        <CardAnnouncementH />
                        <CardAnnouncementH />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}