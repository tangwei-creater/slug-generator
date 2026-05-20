import type { Metadata } from "next";
import { Header, Footer, RelatedTools } from "@/components/Layout";
import SlugTool from "@/components/SlugTool";

export const metadata: Metadata = {
  title: "Kebab Case Converter - Convert Text to kebab-case | SlugGenerator.tools",
  description:
    "Convert any text to kebab-case format. Ideal for CSS class names, URL slugs, file names, and programming conventions. Free online tool.",
  alternates: { canonical: "https://sluggenerator.tools/kebab-case-converter" },
};

export default function KebabCaseConverter() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Kebab Case Converter
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Convert any text to kebab-case format. Used for CSS class names,
              URL slugs, and file naming conventions.
            </p>
          </div>

          <SlugTool placeholder="e.g. myVariableName or My Component Title" />

          <section className="w-full max-w-3xl mx-auto mt-16 prose prose-gray">
            <h2>What Is Kebab Case?</h2>
            <p>
              Kebab case (also called kebab-case, dash-case, or lisp-case) is a
              naming convention where words are separated by hyphens and all
              letters are lowercase. For example,
              <code>my-variable-name</code> or <code>user-profile-page</code>.
            </p>

            <h2>Kebab Case vs Other Naming Conventions</h2>
            <ul>
              <li>
                <strong>Kebab case</strong>: <code>my-variable-name</code> —
                used in URLs, CSS, HTML attributes
              </li>
              <li>
                <strong>Camel case</strong>: <code>myVariableName</code> — used
                in JavaScript, Java
              </li>
              <li>
                <strong>Snake case</strong>: <code>my_variable_name</code> —
                used in Python, Ruby, databases
              </li>
              <li>
                <strong>Pascal case</strong>: <code>MyVariableName</code> —
                used in C#, React components
              </li>
            </ul>

            <h2>Where to Use Kebab Case</h2>
            <ul>
              <li>CSS class names and IDs</li>
              <li>URL slugs and file names</li>
              <li>HTML data attributes</li>
              <li>npm package names</li>
              <li>Git branch names</li>
              <li>Docker container names</li>
            </ul>
          </section>

          <RelatedTools current="/kebab-case-converter" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
