import Image from "next/image";
import Link from "next/link";


export function CardCompany() {
    return (
        <Link href="/empresas/braseiro" className="flex items-center gap-4 border p-4 rounded-md hover:border-blue-500 transition-colors">
            <Image src={'/icons/logo-02.png'} alt="" width={100} height={100} className="rounded-full" />
            <div className="flex flex-col">
                <strong className="text-lg font-semibold text-zinc-900">Braseiro Burguer</strong>
                <span className="text-sm font-semibold text-blue-500">Restaurante</span>
            </div>
        </Link>
    )
}