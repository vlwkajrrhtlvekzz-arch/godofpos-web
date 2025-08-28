import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export default function Home() {
  return (
    <>
      {/* 히어로 섹션 */}
      <section className="text-center py-16 bg-white">
        <h1 className="text-4xl font-bold text-primary mb-4">
          GodofPOS – 올인원 POS 솔루션
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Tossplace의 강력한 결제 흐름과 Sinsin MNC의 깔끔한 디자인을
          한 곳에 모았습니다. 빠르고 안전하며 모든 비즈니스에 최적화되었습니다.
        </p>
        <button className="mt-6 px-6 py-3 bg-primary text-white rounded hover:bg-red-700 transition">
          시작하기
        </button>
      </section>

      {/* 상품 그리드 */}
      <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </>
  );
}
