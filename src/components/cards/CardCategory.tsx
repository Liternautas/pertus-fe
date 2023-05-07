import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import slugify from "slugify";

interface Props {
    icon: string;
    name: string;
}

export function CardCategory({ icon, name }: Props) {
    const router = useRouter();

    return (
        <Link href={`${router.asPath.startsWith('/classificados') ? '/classificados' : '/empresas'}/categorias/${slugify(name, {lower: true})}`} className="bg-custom-input hover:bg-blue-100 transition-colors h-32 rounded-md flex flex-col items-center p-4 justify-center">
            <Image src={icon} width={44} height={44} alt="" />
            <span className="font-semibold text-blue-500 text-center">{name}</span>
        </Link>
    )
}