import Image from "next/image";
import Link from "next/link";


export function CardAnnouncementH() {
    return (
        <Link href="/classificados/12" className="border hover:border-blue-500 transition-colors rounded-md flex items-center gap-4 p-3 justify-start">
            <div className="relative w-[160px] h-[120px]">
                <Image src={'https://img.olx.com.br/images/74/748382759522808.jpg'} className="w-full rounded-md" fill alt="" />
            </div>
            <div className="flex flex-col justify-between flex-1">
                <div className="mb-2">
                    <span className="text-sm font-semibold text-blue-500">Autos</span>
                    <strong className="line-clamp-2">Volkswagen Gol 1.6 MSI Trendline (Flex)</strong>
                    <p className="line-clamp-2 text-sm">Carro em perfeito estado de manunteção, este carro está mesmo em perfeito estado de manunteção</p>
                </div>
                <strong className="text-lg font-semibold text-blue-500">R$ 48.000,00</strong>
            </div>
        </Link>
    )
}