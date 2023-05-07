import { types } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { FiStar } from "react-icons/fi";
import slugify from "slugify";


export function CardCompanyComplete({ place }) {
    const type = types.find(item => item.eng === place.types[0]);

    return (
        <Link href={`/empresas/${type?.slug}/${place.place_id}/${slugify(place.name, {lower: true})}`} className="flex items-start gap-4 border p-4 rounded-md hover:border-blue-500 transition-colors">
            <div className="w-[100px] h-[100px] overflow-hidden rounded-md relative">
                {place?.photos && place?.photos[0] && <Image src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=${place?.photos[0]?.width}&photoreference=${place?.photos[0]?.photo_reference}&key=AIzaSyD3uua5UjFuo8kjaalxT8WwJoUPnnK3rGw`} alt="" fill />}
            </div>
            <div className="flex flex-col justify-between flex-1">
                <span className="text-sm font-semibold text-blue-500">{type?.name}</span>
                <strong className="text-lg font-semibold text-zinc-900">{place.name}</strong>
                <div className="flex items-center gap-2">
                    <FiStar className="text-yellow-500" />
                    <p className="text-sm text-zinc-500">4,7 • 45 comentários • Aberto até 17:00</p>
                </div>
                <p className="mb-3 text-sm text-zinc-700">{place.vicinity}</p>
                <button className="h-10 w-fit bg-custom-input px-6 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors font-semibold rounded-md">(64) 99626-81... ver mais</button>
            </div>
        </Link>
    )
}