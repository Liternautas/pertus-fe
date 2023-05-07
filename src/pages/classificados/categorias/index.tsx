import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FiSearch } from "react-icons/fi";

const categories = [
    { id: 1, name: "Aeroporto", slug: "aeroporto", eng: "Airport" },
    { id: 2, name: "Parque de diversões", slug: "parque-de-diversoes", eng: "Amusement park" },
    { id: 3, name: "Aquário", slug: "aquario", eng: "Aquarium" },
    { id: 4, name: "Caixa eletrônico", slug: "caixa-eletronico", eng: "ATM" },
    { id: 5, name: "Padaria", slug: "padaria", eng: "Bakery" },
    { id: 6, name: "Banco", slug: "banco", eng: "Bank" },
    { id: 7, name: "Bar", slug: "bar", eng: "Bar" },
    { id: 8, name: "Salão de beleza", slug: "salao-de-beleza", eng: "Beauty salon" },
    { id: 9, name: "Loja de bicicletas", slug: "loja-de-bicicletas", eng: "Bicycle store" },
    { id: 10, name: "Livraria", slug: "livraria", eng: "Bookstore" },
    { id: 11, name: "Boliche", slug: "boliche", eng: "Bowling alley" },
    { id: 12, name: "Estação de ônibus", slug: "estacao-de-onibus", eng: "Bus station" },
    { id: 13, name: "Café", slug: "cafe", eng: "Cafe" },
    { id: 14, name: "Camping", slug: "camping", eng: "Camping" },
    { id: 15, name: "Revenda de carros", slug: "revenda-de-carros", eng: "Car dealership" },
    { id: 16, name: "Aluguel de carros", slug: "aluguel-de-carros", eng: "Car rental" },
    { id: 17, name: "Reparo de carros", slug: "reparo-de-carros", eng: "Car repair" },
    { id: 18, name: "Lava jato", slug: "lava-jato", eng: "Car wash" },
    { id: 19, name: "Cassino", slug: "cassino", eng: "Casino" },
    { id: 20, name: "Cemitério", slug: "cemiterio", eng: "Cemetery" },
    { id: 21, name: "Igreja", slug: "igreja", eng: "Church" },
    { id: 22, name: "Prefeitura", slug: "prefeitura", eng: "City hall" },
    { id: 23, name: "Loja de roupas", slug: "loja-de-roupas", eng: "Clothing store" },
    { id: 24, name: "Loja de conveniência", slug: "loja-de-conveniencia", eng: "Convenience store" },
    { id: 25, name: "Tribunal", slug: "tribunal", eng: "Courthouse" },
    { id: 26, name: "Dentista", slug: "dentista", eng: "Dentist" },
    { id: 27, name: "Loja de Departamentos", slug: "loja-de-departamentos", eng: "Department store" },
    { id: 28, name: "Médico", slug: "médico", eng: "Doctor" },
    { id: 29, name: "Farmácia", slug: "farmácia", eng: "Pharmacy" },
    { id: 30, name: "Eletricista", slug: "eletricista", eng: "Electrician" },
    { id: 31, name: "Loja de Eletrônicos", slug: "loja-de-eletrônicos", eng: "Electronics store" },
    { id: 32, name: "Embaixada", slug: "embaixada", eng: "Embassy" },
    { id: 33, name: "Corpo de Bombeiros", slug: "corpo-de-bombeiros", eng: "Fire department" },
    { id: 34, name: "Florista", slug: "florista", eng: "Florist" },
    { id: 35, name: "Funerária", slug: "funerária", eng: "Funeral home" },
    { id: 36, name: "Loja de Móveis", slug: "loja-de-móveis", eng: "Furniture store" },
    { id: 37, name: "Posto de Gasolina", slug: "posto-de-gasolina", eng: "Gas station" },
    { id: 38, name: "Academia", slug: "academia", eng: "Gym" },
    { id: 39, name: "Cuidados com o Cabelo", slug: "cuidados-com-o-cabelo", eng: "Hair care" },
    { id: 40, name: "Loja de Ferragens", slug: "loja-de-ferragens", eng: "Hardware store" },
    { id: 41, name: "Templo Hindu", slug: "templo-hindu", eng: "Hindu temple" },
    { id: 42, name: "Loja de Artigos para o Lar", slug: "loja-de-artigos-para-o-lar", eng: "Home goods store" },
    { id: 43, name: "Hospital", slug: "hospital", eng: "Hospital" },
    { id: 44, name: "Seguradora", slug: "seguradora", eng: "Insurance agency" },
    { id: 45, name: "Joalheria", slug: "joalheria", eng: "Jewelry store" },
    { id: 46, name: "Lavanderia", slug: "lavanderia", eng: "Laundry" },
    { id: 47, name: 'Biblioteca', slug: 'biblioteca', eng: 'library' },
    { id: 48, name: 'Estação de trem de superfície', slug: 'estacao-de-trem-de-superficie', eng: 'surface-train-station' },
    { id: 49, name: 'Loja de Bebidas', slug: 'loja-de-bebidas', eng: 'liquor-store' },
    { id: 50, name: 'Governo Local', slug: 'governo-local', eng: 'local-government' },
    { id: 51, name: 'Chaveiro', slug: 'chaveiro', eng: 'locksmith' },
    { id: 52, name: 'Hospedagem', slug: 'hospedagem', eng: 'lodging' },
    { id: 53, name: 'Entrega de Refeições', slug: 'entrega-de-refeicoes', eng: 'food-delivery' },
    { id: 54, name: 'Retirada de Refeições', slug: 'retirada-de-refeicoes', eng: 'food-takeaway' },
    { id: 55, name: 'Mesquita', slug: 'mesquita', eng: 'mosque' },
    { id: 56, name: 'Locação de Filmes', slug: 'locacao-de-filmes', eng: 'movie-rental' },
    { id: 57, name: 'Cinema', slug: 'cinema', eng: 'movie-theater' },
    { id: 58, name: 'Mudança de Empresa', slug: 'mudanca-de-empresa', eng: 'moving-company' },
    { id: 59, name: 'Museu', slug: 'museu', eng: 'museum' },
    { id: 60, name: 'Boate', slug: 'boate', eng: 'nightclub' },
    { id: 61, name: 'Pintor', slug: 'pintor', eng: 'painter' },
    { id: 62, name: 'Parque', slug: 'parque', eng: 'park' },
    { id: 63, name: 'Estacionamento', slug: 'estacionamento', eng: 'parking' },
    { id: 64, name: 'Loja de Animais', slug: 'loja-de-animais', eng: 'pet-store' },
    { id: 65, name: 'Advogado', slug: 'advogado', eng: 'lawyer' },
    { id: 66, name: "fisioterapeuta", slug: "fisioterapeuta", eng: "physiotherapist" },
    { id: 67, name: "encanador", slug: "encanador", eng: "plumber" },
    { id: 68, name: "polícia", slug: "policia", eng: "police" },
    { id: 69, name: "correio", slug: "correio", eng: "post office" },
    { id: 70, name: "escola primária", slug: "escola-primaria", eng: "primary school" },
    { id: 71, name: "imobiliária", slug: "imobiliaria", eng: "real estate agency" },
    { id: 72, name: "restaurante", slug: "restaurante", eng: "restaurant" },
    { id: 73, name: "empreiteiro de cobertura", slug: "empreiteiro-de-cobertura", eng: "roofing contractor" },
    { id: 74, name: "parque para trailers", slug: "parque-para-trailers", eng: "trailer park" },
    { id: 75, name: "escola", slug: "escola", eng: "school" },
    { id: 76, name: "escola secundária", slug: "escola-secundaria", eng: "high school" },
    { id: 77, name: "loja de sapatos", slug: "loja-de-sapatos", eng: "shoe store" },
    { id: 78, name: "shopping center", slug: "shopping-center", eng: "shopping center" },
    { id: 79, name: "spa", slug: "spa", eng: "spa" },
    { id: 80, name: "estádio", slug: "estadio", eng: "stadium" },
    { id: 81, name: "armazenamento", slug: "armazenamento", eng: "storage" },
    { id: 82, name: "loja", slug: "loja", eng: "store" },
    { id: 83, name: "estação de metrô de superfície", slug: "estacao-de-metro-de-superficie", eng: "surface metro station" },
    { id: 84, name: "supermercado", slug: "supermercado", eng: "supermarket" },
    { id: 85, name: "sinagoga", slug: "sinagoga", eng: "synagogue" },
    { id: 86, name: "ponto de táxi", slug: "ponto-de-taxi", eng: "taxi stand" },
    { id: 87, name: "atração turística", slug: "atracao-turistica", eng: "tourist attraction" },
    { id: 88, name: "estação de trem", slug: "estacao-de-trem", eng: "train station" },
    { id: 89, name: "estação de transporte público", slug: "estacao-de-transporte-publico", eng: "public transportation station" },
    { id: 90, name: "agência de viagens", slug: "agencia-de-viagens", eng: "travel agency" },
    { id: 91, name: "universidade", slug: "universidade", eng: "university" },
    { id: 92, name: 'parque de diversões', slug: 'parque-de-diversoes', eng: 'amusement-park' },
    { id: 93, name: 'aquário', slug: 'aquario', eng: 'aquarium' },
    { id: 94, name: 'galeria de arte', slug: 'galeria-de-arte', eng: 'art-gallery' },
    { id: 95, name: 'caixa eletrônico', slug: 'caixa-eletronico', eng: 'atm' },
    { id: 96, name: 'padaria', slug: 'padaria', eng: 'bakery' },
    { id: 97, name: 'banco', slug: 'banco', eng: 'bank' },
    { id: 98, name: 'bar', slug: 'bar', eng: 'bar' },
    { id: 99, name: 'salão de beleza', slug: 'salao-de-beleza', eng: 'beauty-salon' },
    { id: 100, name: 'loja de bicicletas', slug: 'loja-de-bicicletas', eng: 'bicycle-store' },
    { id: 101, name: 'livraria', slug: 'livraria', eng: 'bookstore' },
    { id: 102, name: 'boliche', slug: 'boliche', eng: 'bowling-alley' },
    { id: 103, name: 'estação de ônibus', slug: 'estacao-de-onibus', eng: 'bus-station' },
    { id: 104, name: 'café', slug: 'cafe', eng: 'cafe' },
    { id: 105, name: 'aeroporto', slug: 'aeroporto', eng: 'airport' },
    {
        id: 106,
        name: "cuidados veterinários",
        slug: "cuidados-veterinarios",
        eng: "veterinary-care"
    },
    {
        id: 107,
        name: "zoológico",
        slug: "zoologico",
        eng: "zoo"
    }
]

export default function Category() {
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
                        {categories.map(category => <a href="">{category.name}</a>)}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}