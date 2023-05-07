import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CardAnnouncement } from "@/components/cards/CardAnnouncement";
import { CardCategory } from "@/components/cards/CardCategory";
import { CardCompany } from "@/components/cards/CardCompany";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: '1',
    name: 'Saúde',
    icon: '/icons/icon-01.svg'
  },
  {
    id: '2',
    name: 'Alimentação',
    icon: '/icons/icon-02.svg'
  },
  {
    id: '3',
    name: 'Fitness',
    icon: '/icons/icon-03.svg'
  },
  {
    id: '4',
    name: 'Moda e estilo',
    icon: '/icons/icon-04.svg'
  },
  {
    id: '5',
    name: 'Pet',
    icon: '/icons/icon-05.svg'
  },
  {
    id: '6',
    name: 'Casas noturnas',
    icon: '/icons/icon-06.svg'
  },
  {
    id: '7',
    name: 'Imobiliárias',
    icon: '/icons/icon-07.svg'
  },
  {
    id: '8',
    name: 'Automóveis',
    icon: '/icons/icon-08.svg'
  },
  {
    id: '9',
    name: 'Beleza',
    icon: '/icons/icon-09.svg'
  },
  {
    id: '10',
    name: 'Lazer',
    icon: '/icons/icon-10.svg'
  },
  {
    id: '11',
    name: 'Serviços de segurança',
    icon: '/icons/icon-11.svg'
  },
  {
    id: '12',
    name: 'Educação',
    icon: '/icons/icon-12.svg'
  },
  {
    id: '13',
    name: 'Organização de eventos',
    icon: '/icons/icon-13.svg'
  },
  {
    id: '14',
    name: 'Jurídico',
    icon: '/icons/icon-14.svg'
  },
  {
    id: '15',
    name: 'Prestadores de Serviços',
    icon: '/icons/icon-15.svg'
  },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto px-3 py-10 flex flex-col items-center">
          <div className="flex flex-col items-center mb-4">
            <h2 className="text-2xl font-semibold">Categorias de empresas</h2>
            <Link href="/empresas/categorias" className="text-blue-500 font-semibold">Ver mais</Link>
          </div>
          <div className="grid grid-cols-5 gap-4 w-full">
            {categories.map(category => <CardCategory key={category.id} {...category} />)}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-3 pt-10 mb-20 flex flex-col items-center">
          <div className="flex flex-col items-center mb-4">
            <h2 className="text-2xl font-semibold">Famosos no Pertus</h2>
            <a href="" className="text-blue-500 font-semibold">Ver mais</a>
          </div>
          <div className="grid grid-cols-4 gap-4 w-full">
            <CardCompany />
            <CardCompany />
            <CardCompany />
            <CardCompany />
          </div>
        </div>
        <section className="bg-custom-input">
          <div className="max-w-7xl mx-auto px-3 py-20 flex items-center gap-10">
            <div className="relative w-[500px] h-[465px]">
              <Image src={'/icons/illustration-01.svg'} alt="" fill />
            </div>
            <div className="flex-1">
              <div className="flex flex-col items-start mb-4 max-w-[600px]">
                <h2 className="text-5xl font-semibold max-w-[430px] mb-4">É proprietário de uma empresa?</h2>
                <p className="mb-4">Mantenha seus clientes informados e atualize suas informações comerciais agora mesmo. Certifique-se de que seus clientes tenham acesso às informações mais recentes e precisas.</p>
                <a href="" className="flex items-center justify-center h-10 px-6 bg-blue-500 hover:bg-blue-600 transition-colors text-white rounded-md font-semibold">Solicite o seu registo</a>
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-3 py-20 flex flex-col items-center">
          <div className="flex flex-col items-center mb-4">
            <h2 className="text-2xl font-semibold">Anúncios na sua cidade</h2>
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
