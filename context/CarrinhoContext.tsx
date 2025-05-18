import React, { createContext, useContext, useState, ReactNode } from "react";

type Produto = {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
};

type CarrinhoContextType = {
  carrinho: Produto[];
  adicionar: (produto: Produto) => void;
  remover: (id: string) => void;
  limparCarrinho: () => void;
};

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

export const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
  const [carrinho, setCarrinho] = useState<Produto[]>([]);

  const adicionar = (produto: Produto) => {
    setCarrinho((prev) => [...prev, produto]);
  };

  const remover = (id: string) => {
    setCarrinho((prev) => prev.filter((p) => p.id !== id));
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionar, remover, limparCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = (): CarrinhoContextType => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error("useCarrinho deve ser usado dentro de um CarrinhoProvider");
  }
  return context;
};
