import { clsx } from 'clsx'
export default function Button({ className, children, variant='primary', ...props }){
  const base = 'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900'
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 via-amber-400 to-rose-400 text-slate-950 hover:from-primary-400 hover:via-amber-300 hover:to-rose-300 focus:ring-amber-300',
    secondary: 'bg-white/10 text-amber-100 hover:bg-white/20 focus:ring-amber-200',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  }
  return <button className={clsx(base, variants[variant], className)} {...props}>{children}</button>
}
