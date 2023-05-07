import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ITypesPlaces } from "@/interfaces/types-places";
import { api } from "@/services/api";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

interface Props {
    typesPlaces: ITypesPlaces[];
}

export default function Category({typesPlaces}: Props) {
    return (
        <div className="flex flex-col">
            <Header />
            <main className="min-h-screen mb-10">
                <div className="max-w-7xl mx-auto px-3 pt-10 pb-6 flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Categorias de empresas</h2>
                    <div className="h-10 px-3 flex items-center w-96 gap-2 rounded-md bg-custom-input border-zinc-300">
                        <FiSearch className="text-blue-500" />
                        <input className="flex-1 h-full bg-transparent" placeholder="Busque pela categoria" />
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-3">
                    <div className="grid grid-cols-5 gap-4">
                        {typesPlaces.map(typesPlace => <Link href={`/empresas/categorias/${typesPlace.slug}`}>{typesPlace.name}</Link>)}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const res = await api.get('types-places').then(res => res.data);
    
    return {
        props: {
            typesPlaces: res.results ?? []
        }
    }
}