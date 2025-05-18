
import { createContext, useContext, useState, ReactNode } from 'react';

type Produto = {
  id: string;
  nome: string;
  preco: number;
  imagem: string;
  descricao: string;
};

type CarrinhoContextType = {
  carrinho: Produto[];
  adicionar: (produto: Produto) => void;
};

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

export const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
  const [carrinho, setCarrinho] = useState<Produto[]>([]);

  const adicionar = (produto: Produto) => {
    setCarrinho((prev) => [...prev, produto]);
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionar }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) throw new Error('useCarrinho must be used within CarrinhoProvider');
  return context;
};
