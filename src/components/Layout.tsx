
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="py-6">
        {/* Navigation ici */}
      </header>
      <main className="container">{children}</main>
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Lady Haya. Tous droits réservés.
      </footer>
    </>
  );
}