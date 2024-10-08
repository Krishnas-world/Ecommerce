import { Search, ShoppingCart, User, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
    return (
        <header className="border-b flex flex-col w-full bg-white fixed z-10">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <h1 className="text-2xl font-bold text-teal-700">
                        <img src="/hdLogo.png" alt="Logo" width='70px' />
                    </h1>
                    <div className="hidden md:flex items-center space-x-2">
                        <span className="text-sm">Deliver To</span>
                        <svg
                            className=" h-4 w-4 text-gray-500"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </div>
                </div>
                <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-4">
                    <Input className="flex-1" placeholder="Search for flowers, gifts..." type="search" />
                    <Button size="icon" variant="ghost">
                        <Search className="h-4 w-4" />
                        <span className="sr-only">Search</span>
                    </Button>
                </div>
                <nav className="flex items-center space-x-4">
                    <Button variant="ghost" size="icon">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="sr-only">Cart</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                        <User className="h-5 w-5" />
                        <span className="sr-only">Account</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Menu</span>
                    </Button>
                </nav>
            </div>
            <nav className="container mx-auto px-4 py-2 overflow-x-auto flex justify-around space-x-4 border border-gray-300 text-sm">
                <a className="whitespace-nowrap" href="#">
                    Daughter's Day
                </a>
                <a className="whitespace-nowrap" href="#">
                    Express Delivery
                </a>
                <a className="whitespace-nowrap" href="#">
                    Cakes
                </a>
                <a className="whitespace-nowrap" href="#">
                    Flowers
                </a>
                <a className="whitespace-nowrap" href="#">
                    Combos
                </a>
                <a className="whitespace-nowrap" href="#">
                    Personalised
                </a>
                <a className="whitespace-nowrap" href="#">
                    Plants
                </a>
                <a className="whitespace-nowrap" href="#">
                    Gifts
                </a>
                <a className="whitespace-nowrap" href="#">
                    Anniversary
                </a>
                <a className="whitespace-nowrap" href="#">
                    Birthday
                </a>
                <a className="whitespace-nowrap" href="#">
                    International
                </a>
            </nav>
        </header>
    )
}
