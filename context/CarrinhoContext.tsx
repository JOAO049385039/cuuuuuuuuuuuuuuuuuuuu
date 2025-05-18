// src/context/CarrinhoContext.tsx

import { createContext, useContext, useState, ReactNode } from 'react'

export interface CarrinhoItem {
  id: number
  nome: string
  preco: number
  quantidade: number
}

export interface CarrinhoContextType {
  itens: CarrinhoItem[]
  adicionar: (item: CarrinhoItem) => void
  remover: (id: number) => void
  limpar: () => void
}

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined)

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<CarrinhoItem[]>([])

  const adicionar = (item: CarrinhoItem) => {
    setItens(prev => {
      const existente = prev.find(i => i.id === item.id)
      if (existente) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantidade: i.quantidade + item.quantidade } : i
        )
      }
      return [...prev, item]
    })
  }

  const remover = (id: number) => {
    setItens(prev => prev.filter(i => i.id !== id))
  }

  const limpar = () => {
    setItens([])
  }

  return (
    <CarrinhoContext.Provider value={{ itens, adicionar, remover, limpar }}>
      {children}
    </CarrinhoContext.Provider>
  )
}

export function useCarrinho() {
  const context = useContext(CarrinhoContext)
  if (!context) {
    throw new Error('useCarrinho deve ser usado dentro de um CarrinhoProvider')
  }
  return context
}
