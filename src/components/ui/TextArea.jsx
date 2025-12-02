export default function TextArea(props){
  return (
    <textarea
      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-50 shadow-inner backdrop-blur focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400/70"
      rows={4}
      {...props}
    />
  )
}
