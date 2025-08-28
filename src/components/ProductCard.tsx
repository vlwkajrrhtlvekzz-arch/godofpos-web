import Image from 'next/image';
import { Product } from '@/lib/products';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg text-neutral">{product.name}</h2>
        <p className="text-gray-600 mt-1">{product.description}</p>
        <div className="mt-3 flex items-baseline space-x-2">
          <span className="text-primary font-bold text-xl">
            ₩{product.price.toLocaleString()}
          </span>
          <button className="ml-auto px-3 py-1 bg-primary text-white rounded hover:bg-red-700 transition">
            장바구니
          </button>
        </div>
      </div>
    </article>
  );
}
