import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b border-gray-300">
        <div className="text-2xl font-bold">DailyCals AI</div>
        <Link 
            href="/download" 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
            Download
        </Link>
    </nav>
  );
};