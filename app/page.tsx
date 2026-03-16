import InventoryManager from "./components/InventoryManager"

// interface renderizada
export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-white">

      <div className="bg-white to-purple-500 p-8 rounded-xl shadow-lg w-[400px]">

        <h1 className="text-black text-2xl font-bold mb-4 text-center">
          Gerenciador de Estoque
        </h1>

        <InventoryManager />

      </div>

    </main>
  )
}