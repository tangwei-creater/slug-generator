import { Link } from "@/i18n/navigation";
import { Header, Footer } from "@/components/Layout";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-4 py-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            This page doesn&rsquo;t exist. Maybe you need to generate a better
            slug?
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Slug Generator
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
