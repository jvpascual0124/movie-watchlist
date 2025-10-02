export default function NavButton({ label }) {
    return (
        <a
            href="#!"
            className="py-7 px-4 font-bold text-white hover:bg-red-600 transition-colors duration-200"
        >
            {label}
        </a>
    );
}