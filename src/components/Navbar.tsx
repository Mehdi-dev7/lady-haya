"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiShoppingBag, FiX } from "react-icons/fi";

// Menu défini ici
const NavbarMenu = [
	{ id: 1, title: "Accueil", link: "/" },
	{ id: 2, title: "Collections", link: "/collections" },
	{ id: 3, title: "A propos", link: "/a-propos" },
	{ id: 4, title: "Contact", link: "/contact" },
];

export default function Navbar() {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Effet de background au scroll - plus fluide
			setIsScrolled(currentScrollY > 20);

			// Animation de disparition - plus tard pour éviter l'effet trouble
			if (currentScrollY < lastScrollY || currentScrollY < 150) {
				setIsVisible(true);
			} else if (currentScrollY > 300) {
				setIsVisible(false);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

	return (
		<>
			<header
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out bg-rose-light ${
					isScrolled ? "bg-white shadow-sm" : "bg-transparent"
				} ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
			>
				<div className="container mx-auto flex items-center justify-between px-6 py-4">
					{/* Logo */}
					<div className="flex items-center">
						<Link
							href="/"
							className="text-4xl font-light font-alex-brush tracking-wider text-gray-800"
						>
							Lady Haya
						</Link>
					</div>

					{/* Menu central - Desktop */}
					<nav className="hidden lg:block">
						<ul className="flex items-center space-x-8">
							{NavbarMenu.map((item) => (
								<li key={item.id} className="relative group">
									<Link
										href={item.link}
										className="text-sm font-light text-gray-700 hover:text-gray-900 transition-colors duration-300 tracking-wide relative"
									>
										{item.title}
										{/* Trait animé du centre vers les extrémités */}
										<span className="absolute bottom-0 left-1/2 w-0 h-px bg-gray-900 group-hover:w-full group-hover:left-0 group-hover:transition-all group-hover:duration-300 group-hover:ease-out transition-all duration-300 ease-in"></span>
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/* Actions à droite */}
					<div className="flex items-center space-x-6">
						<Link
							href="/cart"
							className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
						>
							<FiShoppingBag className="text-lg" />
						</Link>
						<Link
							href="/auth/sign-in"
							className="text-sm font-light text-gray-700 hover:text-gray-900 transition-colors duration-300"
						>
							Sign In
						</Link>

						{/* Menu mobile */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="lg:hidden text-gray-700 hover:text-gray-900 transition-colors duration-300"
						>
							{isMenuOpen ? (
								<FiX className="text-xl" />
							) : (
								<FiMenu className="text-xl" />
							)}
						</button>
					</div>
				</div>

				{/* Menu mobile overlay */}
				{isMenuOpen && (
					<div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
						<nav className="px-6 py-8">
							<ul className="space-y-6">
								{NavbarMenu.map((item) => (
									<li key={item.id} className="relative group">
										<Link
											href={item.link}
											onClick={() => setIsMenuOpen(false)}
											className="text-lg font-light text-gray-700 hover:text-gray-900 transition-colors duration-300 block relative"
										>
											{item.title}
											{/* Trait animé pour mobile - du centre vers les extrémités */}
											<span className="absolute bottom-0 left-1/2 w-0 h-px bg-gray-900 group-hover:w-full group-hover:left-0 group-hover:transition-all group-hover:duration-300 group-hover:ease-out transition-all duration-300 ease-in"></span>
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
				)}
			</header>

			{/* Spacer pour éviter que le contenu passe sous la navbar */}
			<div className="h-20"></div>
		</>
	);
}
