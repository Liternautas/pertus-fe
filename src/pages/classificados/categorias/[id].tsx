import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CardAnnouncementH } from "@/components/cards/CardAnnouncement copy";
import { CardCategory } from "@/components/cards/CardCategory";
import { CardCompanyComplete } from "@/components/cards/CardCompanyComplete";
import { FiSearch } from "react-icons/fi";

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

export default function Category() {
    return (
        <div className="flex flex-col">
            <Header />
            <main className="min-h-screen mb-10">
                <div className="max-w-7xl mx-auto px-3 pt-10 pb-6 flex gap-6">
                    <aside className="p-3 w-full max-w-[300px] h-fit border rounded-md">
                        <span className="text-lg font-semibold">Busca por categorias</span>
                        <div className="grid grid-cols-2 gap-2 mt-4">
                            {categories.map(category => <CardCategory key={category.id} {...category} />)}
                        </div>
                    </aside>
                    <div>
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-semibold">Autos e peças em Catalão</h2>
                            <div className="h-10 px-3 flex items-center w-96 gap-2 rounded-md bg-custom-input border-zinc-300">
                                <FiSearch className="text-blue-500" />
                                <input className="flex-1 h-full bg-transparent" placeholder="Busque pela empresa" />
                            </div>
                        </div>
                        <div className="flex mt-6">
                            <div className="grid grid-cols-2 gap-4">
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
                                <CardAnnouncementH />
                                <CardAnnouncementH />
                                <CardAnnouncementH />
                                <CardAnnouncementH />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}