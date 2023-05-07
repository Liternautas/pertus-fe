import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CardProduct } from "@/components/cards/CardProduct";
import { api } from "@/services/api";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { FiStar } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import { useState } from "react";

export default function Catalog({ place }) {
    const [open, setOpen] = useState(true);
    if (!place) {
        return null;
    }

    return (
        <div className="flex flex-col">
            <Header />
            <main className="min-h-screen">
                <div className="max-w-7xl mx-auto px-3 py-10 gap-6 flex flex-col">
                    {open &&
                        <div className="z-[9999] fixed inset-0 " aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                            <div className="fixed inset-0 overflow-hidden">
                                <div className="absolute inset-0 overflow-hidden">
                                    <div className={`pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10`}>
                                        <div className="pointer-events-auto relative w-screen max-w-md">
                                            <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                                <button type="button" className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" onClick={() => setOpen(false)}>
                                                    <span className="sr-only">Close panel</span>
                                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="flex h-full flex-col bg-white py-6 shadow-xl">
                                                <div className="px-4 sm:px-6">
                                                    <h2 className="text-base font-semibold leading-6 text-gray-900" id="slide-over-title">Panel title</h2>
                                                </div>
                                                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="h-[264px] w-full bg-zinc-500 rounded-md relative overflow-hidden">
                        {place?.photos && place?.photos[0] && <Image src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=${place?.photos[0]?.width}&photoreference=${place?.photos[0]?.photo_reference}&key=AIzaSyD3uua5UjFuo8kjaalxT8WwJoUPnnK3rGw`} alt="" fill />}
                    </div>
                    <div className="mt-6 flex items-center justify-between gap-3 sticky z-10 top-0 bg-white h-16 border-b">
                        <div className="flex items-center gap-3">
                            {place?.photos && <div className="h-[48px] w-[48px] relative rounded-md overflow-hidden">
                                {place?.photos && place?.photos[0] && <Image src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=${place?.photos[0]?.width}&photoreference=${place?.photos[0]?.photo_reference}&key=AIzaSyD3uua5UjFuo8kjaalxT8WwJoUPnnK3rGw`} alt="" fill />}
                            </div>}
                            <div className="flex gap-2 items-center">
                                <h2 className="text-lg font-semibold">{place.name}</h2>
                                <div className="flex items-center gap-2">
                                    <p>Aberto até 17:00</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                className="h-10 bg-custom-input px-3 gap-2 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors font-semibold rounded-md relative"
                                onClick={() => setOpen(true)}
                            >
                                <BsHandbag size={20} /> R$ 106,00
                                <div className="absolute right-[-4px] top-[-4px] flex items-center justify-center w-5 h-5 rounded-full bg-zinc-900">
                                    <span className="text-xs text-white">2</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col mt-10">
                        <h2 className="text-2xl font-semibold text-zinc-800 mb-4">Combos Promocionais</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                        </div>
                    </div>
                    <div className="flex flex-col mt-10">
                        <h2 className="text-2xl font-semibold text-zinc-800 mb-4">Combos Promocionais</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                        </div>
                    </div>
                    <div className="flex flex-col mt-10">
                        <h2 className="text-2xl font-semibold text-zinc-800 mb-4">Combos Promocionais</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { id } = ctx.query;
    const place_id = id[id.length - 2];
    const res = await api.get(`types-places/places/${place_id}`).then(res => res.data);

    return {
        props: {
            place: res.result ?? []
        }
    }
}