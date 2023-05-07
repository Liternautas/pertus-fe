import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CardAnnouncement } from "@/components/cards/CardAnnouncement";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { FiCamera, FiMessageCircle } from "react-icons/fi";
import {MdPix, MdPayment} from "react-icons/md";
import {BiBarcodeReader, BiMoney} from "react-icons/bi";
import {TbBuildingBank} from "react-icons/tb";

export default function ClassifiedItem() {
    return (
        <div className="flex flex-col">
            <Header />
            <main className="min-h-screen">
                <div className="max-w-7xl mx-auto px-3 py-10 gap-6 flex justify-between">
                    <div className="flex flex-1 flex-col">
                        <h1 className="text-2xl font-semibold text-zinc-900 mb-3">BMW X4 XDRIVE 28I - Particular</h1>
                        <span className="text-sm text-zinc-500">Publicado em 03/05 às 16:45 - cód. 1178273697</span>
                        <div className="flex gap-4 mt-3">
                            <div className="bg-zinc-300 h-[428px] w-[700px] rounded-md relative">
                                <button className="absolute top-2 right-2 h-8 bg-custom-input px-4 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors text-sm font-semibold rounded-md">Abrir galeria</button>
                                <button className="absolute top-[50%] bottom-[50%] left-2 h-8 bg-custom-input w-8 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors text-sm font-semibold rounded-md"><ChevronLeft /></button>
                                <button className="absolute top-[50%] bottom-[50%] right-2 h-8 bg-custom-input w-8 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors text-sm font-semibold rounded-md"><ChevronRight /></button>
                                <span className="absolute bottom-2 right-2 flex items-center justify-center gap-2 h-8 bg-custom-input px-4 text-blue-500 text-sm font-semibold rounded-md"><FiCamera /> 1/8</span>
                            </div>
                            <div className="flex flex-col gap-4 max-w-[107px] w-[107px] flex-1">
                                <div className="flex flex-1 bg-zinc-300 rounded-md"></div>
                                <div className="flex flex-1 bg-zinc-300 rounded-md"></div>
                                <div className="flex flex-1 bg-zinc-300 rounded-md"></div>
                                <div className="flex flex-1 bg-zinc-300 rounded-md"></div>
                            </div>
                        </div>
                        <div className="flex flex-col max-w-[700px] gap-1 mt-6">
                            <span className="text-zinc-900 font-semibold">Descrição</span>
                            <p>Carro em excelente estado de conservação, acompanha manual, chave reserva, sem detalhes e com as revisões em dia. IPVA 2023 pago. 169.900,00 à vista, o menor valor da OLX! Estudo propostas para troca.</p>
                        </div>
                        <div className="flex gap-2 max-w-[700px] mt-6">
                            <span className="text-zinc-900 font-semibold">Aceita troca?</span>
                            <span className="text-zinc-900">Sim</span>
                        </div>
                        <div className="flex flex-col max-w-[700px] gap-1 mt-6">
                            <span className="text-zinc-900 font-semibold">Meios de pagamento:</span>
                            <span className="flex gap-2 items-center text-zinc-800"><BiBarcodeReader />Boleto</span>
                            <span className="flex gap-2 items-center text-zinc-800"><MdPix />Pix</span>
                            <span className="flex gap-2 items-center text-zinc-800"><BiMoney />Dinheiro</span>
                            <span className="flex gap-2 items-center text-zinc-800"><MdPayment />Cartão de Crédito</span>
                            <span className="flex gap-2 items-center text-zinc-800"><TbBuildingBank />Depósito Bancário</span>
                        </div>
                    </div>
                    <div className="sticky top-[80px] flex-1 flex flex-col items-center max-w-[348px] h-fit p-4 rounded-md border gap-4">
                        <h3 className="font-semibold text-xl text-blue-500">R$ 800.000,00</h3>
                        <div className="flex gap-2 items-center">
                            <div className="h-14 w-14 relative rounded-full overflow-hidden">
                                <Image src={'https://mercadodabola.net.br/wp-content/uploads/2022/04/Luiz-Gustavo.jpg'} alt="" fill />
                            </div>
                            <div>
                                <h4 className="font-semibold text-base text-zinc-800">Luiz Gustavo</h4>
                                <span className="text-sm text-zinc-500">luizgustavo@gmail.com</span>
                            </div>
                        </div>
                        <button className="h-10 bg-custom-input px-6 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors font-semibold rounded-md">(64) 99626-81... ver mais</button>
                        <button className="h-10 flex gap-2 items-center justify-center bg-blue-500 px-6 text-white font-semibold rounded-md"><FiMessageCircle /> Chat</button>
                        <Link href="/classificados" className="text-blue-500 font-semibold">Ver mais anúncios</Link>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-3 py-10 flex flex-col items-center">
                    <div className="flex flex-col items-center mb-4">
                        <h2 className="text-2xl font-semibold">Produtos na Subway</h2>
                        <Link href="/classificados" className="text-blue-500 font-semibold">Ver mais</Link>
                    </div>
                    <div className="grid grid-cols-4 gap-4 w-full">
                        <CardAnnouncement />
                        <CardAnnouncement />
                        <CardAnnouncement />
                        <CardAnnouncement />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}