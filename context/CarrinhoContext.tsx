
import { createContext, useContext, useState, ReactNode } from 'react'

type Item = {
  nome: string
  preco: number
}

type CarrinhoContextType = {
  itens: Item[]
  adicionar: (item: Item) => void
  limpar: () => void
}

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined)

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<Item[]>([])

  function adicionar(item: Item) {
    setItens([...itens, item])
  }

  function limpar() {
    setItens([])
  }

  return (
    <CarrinhoContext.Provider value={{ itens, adicionar, limpar }}>
      {children}
    </CarrinhoContext.Provider>
  )
}

export function useCarrinho() {
  const context = useContext(CarrinhoContext)
  if (!context) throw new Error("useCarrinho deve ser usado dentro de CarrinhoProvider")
  return context
}
