import React from 'react';
import drink1 from '../assets/drink1.jpg';
import drink2 from '../assets/drink2.jpeg';
import drink3 from '../assets/drink3.jpeg';

const products = [
    {
        id: 1,
        image: drink1,
        name: 'Tropical Millet Splash',
        description: 'A burst of mango & millet goodness.',
    },
    {
        id: 2,
        image: drink2,
        name: 'Berry Boost Elixir',
        description: 'Rich in berries, powered by nutrition.',
    },
    {
        id: 3,
        image: drink3,
        name: 'Citrus Glow Refresh',
        description: 'Zesty lemon with a healthy millet twist.',
    },
];

const Products = () => {
    return (
        <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[50px] font-bold text-center text-yellow-800 mb-4">Product</h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-gray-50 rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-transform hover:scale-[1.02]"
                        >
                            <div className="aspect-[4/3] bg-white overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain p-2"
                                />
                            </div>
                            <div className="p-4 sm:p-5">
                                <h3 className="text-lg font-medium text-gray-900 mb-1">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-gray-600">{product.description}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>

    );
};

export default Products;
