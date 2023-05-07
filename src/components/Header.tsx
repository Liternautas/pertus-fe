import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { FiSearch, FiMapPin } from "react-icons/fi";

export function Header() {
    const router = useRouter();
    return (
        <div className="pt-16">
            <header className="h-16 w-full border-b z-10 border-zinc-200 fixed top-0 left-00 right-0 bg-white">
                <div className="h-full max-w-7xl mx-auto px-3 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Image src={'/logo.svg'} alt="logo" width={105} height={34} />
                        <nav className="flex items-center gap-6">
                            <Link href="/" className={`${(router.asPath === '/' || router.asPath.startsWith('/empresas')) && 'text-blue-500 font-semibold'}`}>Empresas</Link>
                            <Link href="/classificados" className={`${(router.asPath === '/classificados' || router.asPath.startsWith('/classificados')) && 'text-blue-500 font-semibold'}`}>Classificados</Link>
                        </nav>
                        <div className="flex gap-2">
                            <div className="h-10 px-3 flex items-center w-96 gap-2 rounded-md bg-custom-input border-zinc-300">
                                <FiSearch className="text-blue-500" />
                                <input className="flex-1 h-full bg-transparent" placeholder="Busque pela empresa ou categoria" />
                            </div>
                            <div className="h-10 px-3 flex items-center w-60 gap-2 rounded-md bg-custom-input border-zinc-300">
                                <FiMapPin className="text-blue-500" />
                                <input className="flex-1 h-full bg-transparent" placeholder="Cidade" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="" className="font-semibold">Entrar</a>
                        <button className="h-10 px-6 bg-zinc-900 text-white rounded-md font-semibold hover:bg-zinc-800 transition-colors">Inscrever-se</button>
                    </div>
                </div>
            </header>
        </div>
    )
}