export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <h1 className="font-display text-2xl font-bold">Lumé</h1>
      <ul className="flex gap-6 font-body">
        <li><a href="#features" className="hover:text-lume-gold">Features</a></li>
        <li><a href="#about" className="hover:text-lume-gold">About</a></li>
        <li><a href="#contact" className="hover:text-lume-gold">Contact</a></li>
      </ul>
    </nav>
  );
}
