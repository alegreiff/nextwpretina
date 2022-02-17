import Link from "next/link";

export default function Container({ children }) {
  return (
    <div className="container mx-auto px-5">
      <Link href="/">Home</Link>
      <Link href="/pelis">Películas</Link>
      {children}
    </div>
  );
}
