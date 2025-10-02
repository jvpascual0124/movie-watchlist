import NavButton from "./NavButton";

export default function Header() {
    return (
        <nav className="flex items-center justify-between bg-gray-900 shadow">
            {/* Logo / Title */}
            <div>
                <a href="" className="flex items-center p-4">
                    <img
                        src="/logo.png"
                        alt="Watchly Logo"
                        className="w-13 h-12 mx-2"
                    />
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