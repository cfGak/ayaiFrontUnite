import Link from "next/link"
import BanknoteIcon from "@/components/icons/BankIcon"
import BuildingIcon from "@/components/icons/BuildingIcon"
import UserIcon from "@/components/icons/UserIcon"

export const runtime = "edge"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-[#0077b6] text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BanknoteIcon className="h-8 w-8" />
          <h1 className="text-2xl font-bold">EIC Bank</h1>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Products
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 bg-gray-100 py-12 px-4 md:px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <UserIcon className="h-12 w-12 text-[#0077b6]" />
            <h2 className="text-2xl font-bold mt-4">Cuenta personal</h2>
            <p className="text-gray-500 mt-2">Inicia sesion en tu cuenta de banco personal.</p>
            <Link
              href="#"
              className="bg-[#0077b6] text-white rounded-md px-6 py-3 mt-4 hover:bg-[#005a8c] transition-colors"
              prefetch={false}
            >
              Sign In
            </Link>
          </div>
          <div className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <BuildingIcon className="h-12 w-12 text-[#0077b6]" />
            <h2 className="text-2xl font-bold mt-4">Cuenta Empresa</h2>
            <p className="text-gray-500 mt-2">Inicia sesion en tu cuenta de banco empresarial.</p>
            <Link
              href="#"
              className="bg-[#0077b6] text-white rounded-md px-6 py-3 mt-4 hover:bg-[#005a8c] transition-colors"
              prefetch={false}
            >
              Sign In
            </Link>
          </div>
          <div className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <BanknoteIcon className="h-12 w-12 text-[#0077b6]" />
            <h2 className="text-2xl font-bold mt-4">Cuenta Finanzas</h2>
            <p className="text-gray-500 mt-2">Inicia sesion en sistema Finanzas.</p>
            <Link
              href="http://localhost:3001"
              className="bg-[#0077b6] text-white rounded-md px-6 py-3 mt-4 hover:bg-[#005a8c] transition-colors"
              prefetch={false}
            >
              Sign In
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-[#0077b6] text-white py-4 px-6 flex items-center justify-center">
        <p>&copy; 2024 EIC Bank. All rights reserved.</p>
      </footer>
    </div>
  )
}
