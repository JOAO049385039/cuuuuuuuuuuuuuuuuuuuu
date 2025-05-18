import { createContext, useContext, useState, ReactNode } from 'react';

type Produto = {
  id: string;
  nome: string;
  preco: number;
  imagem: string;
  descricao: string;
};

type CarrinhoContextType = {
  itens: Produto[];
  adicionar: (produto: Produto) => void;
  limpar: () => void;
};

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

export const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
  const [itens, setItens] = useState<Produto[]>([]);

  const adicionar = (produto: Produto) => {
    setItens(prev => [...prev, produto]);
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
  if (!context) throw new Error('useCarrinho must be used within CarrinhoProvider');
  return context;
};