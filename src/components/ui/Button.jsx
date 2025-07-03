export default function Button({ variant = 'default', className = '', ...props }) {
  const variants = {
    default: 'bg-primary text-white hover:bg-primary/90',
  }
  const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2';
  return (
    <button
      className={`${base} ${variants[variant] ?? ''} ${className}`}
      {...props}
    />
  )
}
