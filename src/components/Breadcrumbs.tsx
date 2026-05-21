import { Link } from "@/i18n/navigation";
import { JsonLd } from "./JsonLd";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

const siteUrl = "https://sluggenerator.app";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: "Home", href: "/" }, ...items];

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.href ? { item: `${siteUrl}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-4">
        {allItems.map((item, i) => (
          <span key={i}>
            {i > 0 && <span className="mx-1.5">/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="text-blue-600 hover:text-blue-800"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-gray-600">{item.name}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
