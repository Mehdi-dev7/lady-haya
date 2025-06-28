import ProductCard from "@/components/ProductCard";

// Données de produits fictives pour la démonstration
const products = [
	{
		id: "1",
		name: "Sérum Éclatant Vitamine C 15%",
		category: "Sérums",
		price: 89.99,
		image:
			"https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=533&fit=crop",
		slug: "serum-vitamine-c",
		isNew: true,
	},
	{
		id: "2",
		name: "Tonique Clarifiant BHA & Tea Tree",
		category: "Toniques",
		price: 79.99,
		image:
			"https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=533&fit=crop",
		slug: "tonique-bha-tea-tree",
		isBestSeller: true,
	},
	{
		id: "3",
		name: "Gel Nettoyant Exfoliant AHA",
		category: "Nettoyants",
		price: 69.99,
		image:
			"https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=533&fit=crop",
		slug: "gel-nettoyant-aha",
	},
	{
		id: "4",
		name: "Tonic Hydratant Grenade & Menthe",
		category: "Toniques",
		price: 59.99,
		image:
			"https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=533&fit=crop",
		slug: "tonic-grenade-menthe",
	},
	{
		id: "5",
		name: "Masque de Nuit Bio-Exfoliant",
		category: "Masques",
		price: 99.99,
		image:
			"https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=533&fit=crop",
		slug: "masque-nuit-bio-exfoliant",
		isNew: true,
	},
	{
		id: "6",
		name: "Crème Contour des Yeux Phyto-Rétinol",
		category: "Soins Yeux",
		price: 89.99,
		image:
			"https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=533&fit=crop",
		slug: "creme-yeux-phyto-retinol",
	},
	{
		id: "7",
		name: "Huile Perfectrice Rosehip & Bakuchiol",
		category: "Huiles",
		price: 119.99,
		image:
			"https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=533&fit=crop",
		slug: "huile-rosehip-bakuchiol",
		isBestSeller: true,
	},
	{
		id: "8",
		name: "Crème Hydratante Hyaluronique & Squalane",
		category: "Hydratants",
		price: 79.99,
		image:
			"https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=533&fit=crop",
		slug: "creme-hyaluronique-squalane",
	},
];

const categories = [
	"Tous",
	"Sérums",
	"Toniques",
	"Nettoyants",
	"Masques",
	"Soins Yeux",
	"Huiles",
	"Hydratants",
];

export default function CollectionsPage() {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section className="bg-white py-20">
				<div className="container mx-auto px-6">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-5xl font-light text-gray-800 mb-6 tracking-wide">
							Découvrez Notre
							<br />
							<span className="font-normal">Collection Complète</span>
						</h1>
						<p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
							Des soins naturels et efficaces pour une peau rayonnante. Chaque
							produit est formulé avec des ingrédients d'exception pour des
							résultats visibles.
						</p>
					</div>
				</div>
			</section>

			{/* Filtres */}
			<section className="bg-white border-b border-gray-100">
				<div className="container mx-auto px-6 py-8">
					<div className="flex flex-wrap items-center justify-center gap-4">
						{categories.map((category) => (
							<button
								key={category}
								className="px-6 py-3 text-sm font-light text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300 tracking-wide"
							>
								{category}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Grille de produits */}
			<section className="py-16">
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
						{products.map((product) => (
							<ProductCard
								key={product.id}
								id={product.id}
								name={product.name}
								category={product.category}
								price={product.price}
								image={product.image}
								slug={product.slug}
								isNew={product.isNew}
								isBestSeller={product.isBestSeller}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Section CTA */}
			<section className="bg-white py-20">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-3xl font-light text-gray-800 mb-6">
						Trouvez Votre Routine Parfaite
					</h2>
					<p className="text-gray-600 mb-8 max-w-2xl mx-auto">
						Répondez à quelques questions simples sur votre peau et nous vous
						proposerons une routine personnalisée pour vos objectifs.
					</p>
					<button className="bg-black text-white px-8 py-4 text-sm font-light tracking-wide hover:bg-gray-800 transition-colors duration-300">
						Obtenir Ma Routine
					</button>
				</div>
			</section>
		</div>
	);
}
