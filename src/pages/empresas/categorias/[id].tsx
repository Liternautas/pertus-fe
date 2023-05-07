import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CardCompanyComplete } from "@/components/cards/CardCompanyComplete";
import { ITypesPlaces } from "@/interfaces/types-places";
import { api } from "@/services/api";
import { GetServerSideProps } from "next";
import { FiSearch } from "react-icons/fi";

interface Props {
    type: ITypesPlaces;
    places: Array<any>
}

export default function Category({type, places}: Props) {
    return (
        <div className="flex flex-col">
            <Header />
            <main className="min-h-screen mb-10">
                <div className="max-w-7xl mx-auto px-3 pt-10 pb-6 flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">{type?.name}</h2>
                    <div className="h-10 px-3 flex items-center w-96 gap-2 rounded-md bg-custom-input border-zinc-300">
                        <FiSearch className="text-blue-500" />
                        <input className="flex-1 h-full bg-transparent" placeholder="Busque pela empresa" />
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-3">
                    <div className="grid grid-cols-2 gap-4">
                        {places?.map(place => <CardCompanyComplete place={place}/>)}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const res = await api.get(`types-places/${ctx.query.id}/places`).then(res => res.data);
    
    return {
        props: {
            type: res.type ?? null,
            places: res.results ?? []
        }
    }
}