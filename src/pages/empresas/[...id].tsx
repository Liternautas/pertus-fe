import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FiStar, FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import Image from "next/image";
import { CardAnnouncement } from "@/components/cards/CardAnnouncement";
import { GetServerSideProps } from "next";
import { api } from "@/services/api";
import { useRouter } from "next/router";
import slugify from "slugify";

export default function Company({ place }) {
    const router = useRouter();
    if (!place) {
        return null;
    }

    const formated_hour = (hour: string) => {
        if (!hour) return;
        const horario = `${hour.substring(0, 2)}:${hour.substring(2)}`;

        return horario;
    }

    return (
        <div className="flex flex-col">
            <Header />
            <main className="min-h-screen">
                <div className="max-w-7xl mx-auto px-3 py-10 flex flex-col">
                    <div className="grid grid-cols-4 gap-4">
                        {place?.photos?.map((photo, index) => {
                            if (index < 4) {
                                return (
                                    <div className="h-[180px] relative rounded-md overflow-hidden">
                                        <Image src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=${photo?.width}&photoreference=${photo?.photo_reference}&key=AIzaSyD3uua5UjFuo8kjaalxT8WwJoUPnnK3rGw`} alt="" fill />
                                    </div>
                                )
                            }
                        }
                        )}
                    </div>
                    <div className="mt-6 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            {place?.photos && <div className="h-[64px] w-[64px] relative rounded-md overflow-hidden">
                                {place?.photos && place?.photos[0] && <Image src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=${place?.photos[0]?.width}&photoreference=${place?.photos[0]?.photo_reference}&key=AIzaSyD3uua5UjFuo8kjaalxT8WwJoUPnnK3rGw`} alt="" fill />}
                            </div>}
                            <div className="flex flex-col">
                                <h2 className="text-lg font-semibold">{place.name}</h2>
                                <div className="flex items-center gap-2">
                                    <FiStar className="text-yellow-500" />
                                    <p>4,7 • 45 comentários • Aberto até 17:00</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-blue-500 font-semibold">Você é o proprietário?</span>
                            <button className="h-10 bg-custom-input px-6 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors font-semibold rounded-md">Editar</button>
                        </div>
                    </div>
                    <div className="flex gap-16 mt-10">
                        <div className="flex-1 flex items-start flex-col gap-6">
                            <div className="flex items-start flex-col gap-1">
                                <span className="text-zinc-900 font-semibold">Número de telefone</span>
                                <button className="h-10 bg-custom-input px-6 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors font-semibold rounded-md">{place.formatted_phone_number} ver mais</button>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-zinc-900 font-semibold">Sobre</span>
                                <p>Deu vontade de comer um hamburguer com atendimento descomplicado, no melhor fast food da cidade? Então pede os Clássicos do Bob's! Além do Big Bob, com muito molho, experimento também nosso Tentador Zero Beef, Tentador Zero Frango, Cheddar Australiano. Escolha seu acompanhamento preferido, batata crocante ou franlitos quentinhos! E, se a vontade for de sobremesa, o verdadeiro e único Milk Shake do Bob's vai chegar até você! Peça já!</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-zinc-900 font-semibold">Horário de funcionamento</span>
                                <ul>
                                    <li className="grid grid-cols-2 gap-8">
                                        <span>Domingo</span>
                                        <strong>Fechado</strong>
                                    </li>
                                    <li className="grid grid-cols-2 gap-8">
                                        <span>Segunda-feira</span>
                                        {place.opening_hours?.periods?.find(period => period.open.day === 1) ? <strong>{formated_hour(place.opening_hours?.periods?.find(period => period.open.day === 1).open.time)} - {formated_hour(place.opening_hours?.periods?.find(period => period?.close?.day === 1)?.close?.time)}</strong> : <strong>Fechado</strong>}
                                    </li>
                                    <li className="grid grid-cols-2 gap-8">
                                        <span>Terça-feira</span>
                                        {place.opening_hours?.periods?.find(period => period.open.day === 2) ? <strong>{formated_hour(place.opening_hours?.periods?.find(period => period.open.day === 2).open.time)} - {formated_hour(place.opening_hours?.periods?.find(period => period?.close?.day === 2)?.close?.time)}</strong> : <strong>Fechado</strong>}
                                    </li>
                                    <li className="grid grid-cols-2 gap-8">
                                        <span>Quarta-feira</span>
                                        {place.opening_hours?.periods?.find(period => period.open.day === 3) ? <strong>{formated_hour(place.opening_hours?.periods?.find(period => period.open.day === 3).open.time)} - {formated_hour(place.opening_hours?.periods?.find(period => period?.close?.day === 3)?.close?.time)}</strong> : <strong>Fechado</strong>}
                                    </li>
                                    <li className="grid grid-cols-2 gap-8">
                                        <span>Quinta-feira</span>
                                        {place.opening_hours?.periods?.find(period => period.open.day === 4) ? <strong>{formated_hour(place.opening_hours?.periods?.find(period => period.open.day === 4).open.time)} - {formated_hour(place.opening_hours?.periods?.find(period => period?.close?.day === 4)?.close?.time)}</strong> : <strong>Fechado</strong>}
                                    </li>
                                    <li className="grid grid-cols-2 gap-8">
                                        <span>Sexta-feira</span>
                                        {place.opening_hours?.periods?.find(period => period.open.day === 5) ? <strong>{formated_hour(place.opening_hours?.periods?.find(period => period.open.day === 5).open.time)} - {formated_hour(place.opening_hours?.periods?.find(period => period?.close?.day === 5)?.close?.time)}</strong> : <strong>Fechado</strong>}
                                    </li>
                                    <li className="grid grid-cols-2 gap-8">
                                        <span>Sábado</span>
                                        {place.opening_hours?.periods?.find(period => period.open.day === 6) ? <strong>{formated_hour(place.opening_hours?.periods?.find(period => period.open.day === 6).open.time)} - {formated_hour(place.opening_hours.periods.find(period => period?.close?.day === 6)?.close?.time)}</strong> : <strong>Fechado</strong>}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1 flex items-start flex-col gap-6">
                            {place.website && <div className="flex items-start flex-col gap-1">
                                <span className="text-zinc-900 font-semibold">Site</span>
                                <a href={place.website} target="_blank" className="h-10 flex items-center justify-center w-fit max-w-[300px] bg-custom-input px-6 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors font-semibold rounded-md">
                                    <span className="line-clamp-1">{place.website}</span>
                                </a>
                            </div>}
                            <div className="flex items-start flex-col gap-1">
                                <span className="text-zinc-900 font-semibold">Acessar</span>
                                <div className="flex gap-3">
                                    <button className="h-10 bg-blue-500 px-6 text-white font-semibold rounded-md" onClick={() => router.push(`/catalogo/${place.place_id}/${slugify(place.name, { lower: true })}`)}>Catálogo digital</button>
                                    <button className="h-10 border border-blue-500 px-6 text-blue-500 font-semibold rounded-md">Agendador de serviços</button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-zinc-900 font-semibold">Endereço</span>
                                <p className="mb-3">{place.formatted_address}</p>
                                <iframe className="rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11595.1276740863!2d-47.94259047164231!3d-18.17264492936744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a66672653b5973%3A0xb7cc9f4721d4b83b!2sRotina%20Im%C3%B3veis!5e0!3m2!1spt-BR!2sbr!4v1683158562019!5m2!1spt-BR!2sbr" width="600" height="200" loading="lazy"></iframe>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-zinc-900 font-semibold">Redes sociais</span>
                                <div className="flex gap-4">
                                    <button className="h-10 bg-custom-input hover:bg-blue-500 hover:text-white transition-colors w-10 flex items-center justify-center text-blue-500 font-semibold rounded-md"><FiFacebook size={20} /></button>
                                    <button className="h-10 bg-custom-input hover:bg-blue-500 hover:text-white transition-colors w-10 flex items-center justify-center text-blue-500 font-semibold rounded-md"><FiInstagram size={20} /></button>
                                    <button className="h-10 bg-custom-input hover:bg-blue-500 hover:text-white transition-colors w-10 flex items-center justify-center text-blue-500 font-semibold rounded-md"><FiYoutube size={20} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-3 py-10 flex flex-col items-center">
                    <div className="flex flex-col items-center mb-4">
                        <h2 className="text-2xl font-semibold">Produtos na Subway</h2>
                        <a href="" className="text-blue-500 font-semibold">Ver mais</a>
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