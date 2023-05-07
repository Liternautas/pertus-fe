import Image from "next/image";
import { useState } from "react";
import { FiCheck, FiMinus, FiPlus, FiX } from "react-icons/fi";

export function CardProduct() {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="flex p-4 shadow-md transition-colors rounded-md gap-2 cursor-pointer" onMouseDown={() => setShow(true)}>
                <div className="flex flex-col flex-1 justify-between">
                    <>
                        <h4 className="text-lg font-semibold text-zinc-800">Combo Casal Tradicional</h4>
                        <p>O Combo Premium é montado com: 1 Saidinho (Pão australiano, hamburger de fraldinha 200g, queijo cheddar especial, cubos de alguma coisa...</p>
                    </>
                    <strong className="mt-3 text-blue-500">R$ 74,90</strong>
                </div>
                <div className="h-[140px] w-[140px] rounded-md overflow-hidden relative">
                    <Image src={`/icons/logo-02.png`} alt="" fill />
                </div>
            </div>
            {show && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left flex gap-8 shadow-xl transition-all sm:my-8 p-4 sm:w-full max-w-[800px] max-h-[600px]">
                            <button
                                className="absolute h-7 w-7 border flex items-center justify-center rounded-md top-2 right-2"
                                onClick={() => setShow(false)}
                            >
                                <FiX size={18} />
                            </button>
                            <div className="h-[140px] w-[140px] rounded-md overflow-hidden relative">
                                <Image src={`/icons/logo-02.png`} alt="" fill />
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <header>
                                    <h2 className="font-semibold text-zinc-900">COMBO 15CM CARNE SUPREME</h2>
                                    <p className="text-sm text-zinc-900">Sub com suculentas tiras de carnes? Temos. Acompanhado do delicioso molho Supreme e cebola crispy. E claro, nosso pão sempre fresquinho, queijo e vegetais à sua escolha. Selecione também a bebida e sobremesa de sua preferência. Imagem Meramente Ilustrativa.</p>
                                    <strong className="font-semibold text-blue-500">R$ 38,90</strong>
                                </header>
                                <div className="mt-4 flex flex-1 overflow-auto flex-col gap-6">
                                    <div className="relative">
                                        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-1 bg-zinc-100">
                                            <div>
                                                <h4 className="font-medium text-zinc-900">Sub Carne Supreme 15 cm</h4>
                                                <span className="text-sm">Escolha 1 opção.</span>
                                            </div>
                                            <FiCheck className="text-green-500" size={20} />
                                        </div>
                                        <ul>
                                            <li className="px-6 py-4 flex items-center justify-center gap-4">
                                                <div className="flex-1">
                                                    <h5>Sub Carne Supreme 15 cm Sub com suculentas tiras de carne, acompanhado do delicioso molho Supreme.</h5>
                                                    <span>+ R$ 32,30</span>
                                                </div>
                                                <div className="h-[80px] w-[80px] rounded-md overflow-hidden relative">
                                                    <Image src={`/icons/logo-02.png`} alt="" fill />
                                                </div>
                                                <div className="h-5 w-5 border-4 rounded-full border-blue-500"></div>
                                            </li>
                                            <li className="px-6 py-4 flex items-center justify-center gap-4">
                                                <div className="flex-1">
                                                    <h5>Sub Carne Supreme 15 cm Sub com suculentas tiras de carne, acompanhado do delicioso molho Supreme.</h5>
                                                    <span>+ R$ 32,30</span>
                                                </div>
                                                <div className="h-[80px] w-[80px] rounded-md overflow-hidden relative">
                                                    <Image src={`/icons/logo-02.png`} alt="" fill />
                                                </div>
                                                <div className="h-5 w-5 border-zinc-400 border-4 rounded-full"></div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="relative">
                                        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-1 bg-zinc-100">
                                            <div>
                                                <h4 className="font-medium text-zinc-900">Sub Carne Supreme 15 cm</h4>
                                                <span className="text-sm">Escolha 1 opção.</span>
                                            </div>
                                            <FiCheck className="text-green-500" size={20} />
                                        </div>
                                        <ul>
                                            <li className="px-6 py-4 flex items-center justify-center gap-4">
                                                <div className="flex-1">
                                                    <h5>Sub Carne Supreme 15 cm Sub com suculentas tiras de carne, acompanhado do delicioso molho Supreme.</h5>
                                                    <span>+ R$ 32,30</span>
                                                </div>
                                                <div className="h-[80px] w-[80px] rounded-md overflow-hidden relative">
                                                    <Image src={`/icons/logo-02.png`} alt="" fill />
                                                </div>
                                                <div className="h-5 w-5 border-4 rounded-full border-blue-500"></div>
                                            </li>
                                            <li className="px-6 py-4 flex items-center justify-center gap-4">
                                                <div className="flex-1">
                                                    <h5>Sub Carne Supreme 15 cm Sub com suculentas tiras de carne, acompanhado do delicioso molho Supreme.</h5>
                                                    <span>+ R$ 32,30</span>
                                                </div>
                                                <div className="h-[80px] w-[80px] rounded-md overflow-hidden relative">
                                                    <Image src={`/icons/logo-02.png`} alt="" fill />
                                                </div>
                                                <div className="h-5 w-5 border-zinc-400 border-4 rounded-full"></div>
                                            </li>
                                            <li className="px-6 py-4 flex items-center justify-center gap-4">
                                                <div className="flex-1">
                                                    <h5>Sub Carne Supreme 15 cm Sub com suculentas tiras de carne, acompanhado do delicioso molho Supreme.</h5>
                                                    <span>+ R$ 32,30</span>
                                                </div>
                                                <div className="h-[80px] w-[80px] rounded-md overflow-hidden relative">
                                                    <Image src={`/icons/logo-02.png`} alt="" fill />
                                                </div>
                                                <div className="h-5 w-5 border-zinc-400 border-4 rounded-full"></div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="relative">
                                        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-1 bg-zinc-100">
                                            <div>
                                                <h4 className="font-medium text-zinc-900">Sub Carne Supreme 15 cm</h4>
                                                <span className="text-sm">Escolha 1 opção.</span>
                                            </div>
                                            <FiCheck className="text-green-500" size={20} />
                                        </div>
                                        <ul>
                                            <li className="px-6 py-4 flex items-center justify-center gap-4">
                                                <div className="flex-1">
                                                    <h5>Sub Carne Supreme 15 cm Sub com suculentas tiras de carne, acompanhado do delicioso molho Supreme.</h5>
                                                    <span>+ R$ 32,30</span>
                                                </div>
                                                <div className="h-[80px] w-[80px] rounded-md overflow-hidden relative">
                                                    <Image src={`/icons/logo-02.png`} alt="" fill />
                                                </div>
                                                <div className="h-5 w-5 border-4 rounded-full border-blue-500"></div>
                                            </li>
                                            <li className="px-6 py-4 flex items-center justify-center gap-4">
                                                <div className="flex-1">
                                                    <h5>Sub Carne Supreme 15 cm Sub com suculentas tiras de carne, acompanhado do delicioso molho Supreme.</h5>
                                                    <span>+ R$ 32,30</span>
                                                </div>
                                                <div className="h-[80px] w-[80px] rounded-md overflow-hidden relative">
                                                    <Image src={`/icons/logo-02.png`} alt="" fill />
                                                </div>
                                                <div className="h-5 w-5 border-zinc-400 border-4 rounded-full"></div>
                                            </li>
                                            <li className="px-6 py-4 flex items-center justify-center gap-4">
                                                <div className="flex-1">
                                                    <h5>Sub Carne Supreme 15 cm Sub com suculentas tiras de carne, acompanhado do delicioso molho Supreme.</h5>
                                                    <span>+ R$ 32,30</span>
                                                </div>
                                                <div className="h-[80px] w-[80px] rounded-md overflow-hidden relative">
                                                    <Image src={`/icons/logo-02.png`} alt="" fill />
                                                </div>
                                                <div className="h-5 w-5 border-zinc-400 border-4 rounded-full"></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <footer className="flex justify-end pt-4 gap-8 border-t z-10 bg-white">
                                    <div className="h-10 border flex items-center gap-3 px-3 rounded-md">
                                        <button>
                                            <FiMinus />
                                        </button>
                                        1
                                        <button>
                                            <FiPlus />
                                        </button>
                                    </div>
                                    <button className="flex items-center rounded-md text-white font-medium gap-8 px-4 bg-blue-500">
                                        <span>Adicionar</span>
                                        <span>R$ 32,90</span>
                                    </button>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}