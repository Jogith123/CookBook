export default function Input({ variant = 'dark', className = '', ...props }){
  const base =
    'w-full rounded-full border px-4 py-2 text-sm shadow-inner backdrop-blur focus:outline-none focus:ring-2'
  const variants = {
    dark:
      'border-white/10 bg-slate-950/70 text-amber-100 placeholder:text-slate-400 focus:border-amber-300 focus:ring-amber-400/70',
    light:
      'border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-amber-400 focus:ring-amber-300',
  }
  return (
    <input
      className={`${base} ${variants[variant] ?? variants.dark} ${className}`}
      {...props}
    />
  )
}
