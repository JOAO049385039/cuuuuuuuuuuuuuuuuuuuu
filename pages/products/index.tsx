import { useState, useMemo } from 'react';
import { GetStaticProps } from 'next';
import ProductList from '../../components/ProductList';

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
};

interface Props {
  products: Product[];
}

const ProductsPage = ({ products }: Props) => {
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [sortOption, setSortOption] = useState<string>('name-asc');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(products.map((p) => p.category)))],
    [products]
  );

  const filtered = useMemo(() => {
    return categoryFilter === 'All'
      ? products
      : products.filter((p) => p.category === categoryFilter);
  }, [categoryFilter, products]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'name-asc':
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [filtered, sortOption]);

  return (
    <div className="flex flex-col lg:flex-row">
      <aside className="w-full lg:w-1/4 p-4 border-r mb-4 lg:mb-0">
        <h2 className="font-bold mb-2">Filtros</h2>
        <label className="block mb-2">Categorias:</label>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full border rounded p-2"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </aside>
      <main className="flex-1 p-4">
        <div className="flex justify-end mb-4">
          <label className="mr-2">Ordenar por:</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border rounded p-2"
          >
            <option value="name-asc">Nome (A-Z)</option>
            <option value="name-desc">Nome (Z-A)</option>
            <option value="price-asc">Preço (crescente)</option>
            <option value="price-desc">Preço (decrescente)</option>
          </select>
        </div>
        <ProductList products={sorted} />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Substitua essa lista por fetch do seu CMS ou banco de dados
  const products: Product[] = [
    { id: '1', name: 'Perfume Elegante', category: 'Perfumes', price: 36.78, image: '/perfume.jpg' },
    { id: '2', name: 'Creme Hidratante', category: 'Cuidados', price: 17.84, image: '/creme.jpg' },
    // ... outros produtos
  ];
  return {
    props: { products },
    revalidate: 60,
  };
};

export default ProductsPage;
