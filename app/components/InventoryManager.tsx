"use client"

import { useState } from "react"
import { Item } from "../types/item"
import InventoryItem from "./InventoryItem"


const InventoryManager = () => {

  const [inventory, setInventory] = useState<Item[]>([])
  const [entry, setEntry] = useState("")

  const addProduct = () => {
    if (!entry.trim()) return

    const newProduct: Item = {
      id: crypto.randomUUID(),
      name: entry,
      quantity: 0
    }

    setInventory(prev => [...prev, newProduct])
    setEntry("")
  }

  const incrementQty = (id: string) => {
    setInventory(prev => prev.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ))
  }

  const decrementQty = (id: string) => {
    setInventory(prev => prev.map(item =>
      item.id === id && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ))
  }

  const deleteProduct = (id: string) => {
    setInventory(prev => prev.filter(item => item.id !== id))
  }

  return (

    <div className="text-black">

      <div className="flex gap-2 mb-4">

        <input
          value={entry}
          onChange={event => setEntry(event.target.value)}
          placeholder="Nome do item"
          className="border rounded px-3 py-2 flex-1"
        />

        <button
          onClick={addProduct}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Adicionar
        </button>

      </div>

      {inventory.map(item => (

        <InventoryItem
          key={item.id}
          item={item}
          increase={incrementQty}
          decrease={decrementQty}
          remove={deleteProduct}
        />

      ))}

    </div>
  )
}

export default InventoryManager