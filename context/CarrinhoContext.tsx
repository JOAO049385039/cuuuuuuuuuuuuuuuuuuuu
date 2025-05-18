
import { createContext, useContext, useState, ReactNode } from 'react';

export type ItemCarrinho = { id: string; nome: string; preco: number; quantidade: number };

interface CarrinhoContextType {
  itens: ItemCarrinho[];
  adicionar: (item: ItemCarrinho) => void;
  limpar: () => void;
}

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

export const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);

  const adicionar = (item: ItemCarrinho) => {
    setItens([...itens, item]);
  };

  const limpar = () => {
    setItens([]);
  };

  return (
    <CarrinhoContext.Provider value={{ itens, adicionar, limpar }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error('useCarrinho deve ser usado dentro de um CarrinhoProvider');
  }
  return context;
};
