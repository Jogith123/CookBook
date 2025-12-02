export default function Select({ children, ...props }){
  return (
    <select
      className="w-full rounded-full border border-amber-400/40 bg-slate-950/70 px-4 py-2 text-sm text-amber-100 shadow-inner backdrop-blur focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400/70"
      {...props}
    >
      {children}
    </select>
  )
}
