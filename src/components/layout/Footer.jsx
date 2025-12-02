export default function Footer(){
  return (
    <footer className="border-t border-white/10 py-8 text-center text-xs text-slate-400">
      <div className="mx-auto max-w-6xl px-4">
        © {new Date().getFullYear()} CookBook · Crafted with flavor and code
      </div>
    </footer>
  )
}
