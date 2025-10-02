import NavButton from "./NavButton";

export default function Header() {
    return (
        <header className="bg-red-800 shadow">
            <nav className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">
                <div>
                    <a href="/" className="flex items-center py-6 px-3 hover:bg-red-700 rounded">
                        <h1 className="text-2xl font-bold text-white">
                            Watchly
                        </h1>
                    </a>
                </div>

                <div className="flex">
                    <NavButton label="Favorites" />
                    <NavButton label="Watchlist" />
                </div>
            </nav>
        </header>
    );
}