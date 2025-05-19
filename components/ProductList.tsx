import Image from 'next/image';
import { Product } from '../pages/products';

interface Props {
  products: {
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
  }[];
}

const ProductList = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover rounded-md"
          />
          <h3 className="font-semibold mt-3">{product.name}</h3>
          <p className="text-gray-500">{product.category}</p>
          <p className="font-bold mt-1">€ {product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
