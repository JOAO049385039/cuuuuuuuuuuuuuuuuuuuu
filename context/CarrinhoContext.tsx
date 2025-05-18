import { createContext, useContext, useState, ReactNode } from 'react'

type Produto = {
  id: string | string[]
  nome: string
  preco: number
}

type CarrinhoContextType = {
  itens: Produto[]
  adicionar: (produto: Produto) => void
  limpar: () => void
}

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined)

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<Produto[]>([])

  const adicionar = (produto: Produto) => {
    setItens([...itens, produto])
  }

  const limpar = () => setItens([])

  return (
    <CarrinhoContext.Provider value={{ itens, adicionar, limpar }}>
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
