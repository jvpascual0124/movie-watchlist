export default function HeroBanner() {
    return (
        <header className="flex flex-col items-center justify-center text-center py-12">
            <img src="/hero-banner.png" alt="Hero Banner" />
            <p className="text-4xl font-bold text-white">Your Personal Movie Hub</p>
            <p className="text-3xl font-bold text-white">Save Favorites & Build Your Watchlist!</p>
        </header>
    );
}