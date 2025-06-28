"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiHeart, FiShoppingBag } from "react-icons/fi";

interface ProductCardProps {
	id: string;
	name: string;
	category: string;
	price: number;
	image: string;
	slug: string;
	isNew?: boolean;
	isBestSeller?: boolean;
}

export default function ProductCard({
	id,
	name,
	category,
	price,
	image,
	slug,
	isNew = false,
	isBestSeller = false,
}: ProductCardProps) {
	const [isHovered, setIsHovered] = useState(false);
	const [isLiked, setIsLiked] = useState(false);

	return (
		<div
			className="group relative bg-white"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Badges */}
			<div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
				{isNew && (
					<span className="bg-black text-white text-xs px-3 py-1 tracking-wide">
						NEW
					</span>
				)}
				{isBestSeller && (
					<span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 tracking-wide">
						BEST SELLER
					</span>
				)}
			</div>

			{/* Bouton like */}
			<button
				onClick={() => setIsLiked(!isLiked)}
				className={`absolute top-4 right-4 z-10 p-2 transition-all duration-300 ${
					isLiked
						? "text-red-500 bg-white/90"
						: "text-gray-600 bg-white/90 hover:text-red-500"
				}`}
			>
				<FiHeart className={`text-lg ${isLiked ? "fill-current" : ""}`} />
			</button>

			{/* Image du produit */}
			<Link href={`/products/${slug}`} className="block overflow-hidden">
				<div className="relative aspect-[3/4] bg-gray-50">
					<Image
						src={image}
						alt={name}
						fill
						className={`object-cover transition-transform duration-700 ease-out ${
							isHovered ? "scale-105" : "scale-100"
						}`}
					/>
				</div>
			</Link>

			{/* Informations du produit */}
			<div className="p-6">
				{/* Catégorie */}
				<p className="text-xs font-light text-gray-500 tracking-wider uppercase mb-2">
					{category}
				</p>

				{/* Nom du produit */}
				<Link href={`/products/${slug}`}>
					<h3 className="text-lg font-light text-gray-800 mb-3 hover:text-gray-600 transition-colors duration-300">
						{name}
					</h3>
				</Link>

				{/* Prix et actions */}
				<div className="flex items-center justify-between">
					<span className="text-lg font-light text-gray-800">
						{price.toLocaleString("fr-FR", {
							style: "currency",
							currency: "EUR",
						})}
					</span>

					{/* Bouton ajouter au panier */}
					<button
						className={`flex items-center gap-2 px-4 py-2 text-sm font-light tracking-wide transition-all duration-300 ${
							isHovered
								? "bg-black text-white"
								: "bg-gray-100 text-gray-800 hover:bg-gray-200"
						}`}
					>
						<FiShoppingBag className="text-base" />
						<span className="hidden sm:inline">Ajouter</span>
					</button>
				</div>
			</div>

			{/* Overlay au hover */}
			<div
				className={`absolute inset-0 bg-black/5 transition-opacity duration-300 pointer-events-none ${
					isHovered ? "opacity-100" : "opacity-0"
				}`}
			/>
		</div>
	);
}
