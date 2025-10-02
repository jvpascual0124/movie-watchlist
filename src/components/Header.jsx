import NavButton from "./NavButton";

export default function Header() {
    return (
        <nav className="flex items-center justify-between bg-red-800 shadow">
            {/* Logo / Title */}
            <div>
                <a href="" className="flex items-center py-6 px-3 hover:bg-red-700">
                    <h1 className="text-2xl font-bold text-white">
                        Watchly
                    </h1>
                </a>
            </div>

            {/* Navigation Links */}
            <div className="flex">
                <NavButton label="Favorites" />
                <NavButton label="Watchlist" />
            </div>
        </nav>
    );
}