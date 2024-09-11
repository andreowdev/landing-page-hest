import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: "Home", href: "#home" },
        { label: "Serviços", href: "#serviços" },
        { label: "Sobre", href: "#about" },
        { label: "Contato", href: "#contact" },
    ];

    return (
        <nav className="bg-slate-200 p-4 fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-14">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="sr-only">Abrir o Menu</span>
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-shrink-0">
                        <a href="#home" className="text-2xl ml-12 font-semibold hover:text-white">L.A Soft Solutions</a>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            {menuItems.map((item) => (
                                <a key={item.href} href={item.href} className="hover:text-white">
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`sm:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} absolute top-0 left-0 h-screen w-1/2 bg-slate-200 transition-transform duration-300 ease-in-out z-50`}>
                <div className="p-4">
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="text-gray-400 hover:text-[#71C9CE] focus:outline-none"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="sr-only">Fechar menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <h1 className="text-black font-bold text-center text-2xl hover:text-white">
                        <a href="#home">L.A Soft Solutions</a>
                    </h1>
                    <div className="mt-6 space-y-4">
                        {menuItems.map((item) => (
                            <a key={item.href} href={item.href} className="block hover:text-white">
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
