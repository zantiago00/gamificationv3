export default function TrendBubble({ icon: Icon, label, badge, badgeColor = 'bg-red-500', style }) {
  return (
    <div
      className="rounded-xl bg-white px-4 py-2 shadow-lg text-sm font-medium flex gap-2 items-center animate-bounce"
      style={style}
      aria-hidden="true"
    >
      {Icon && <Icon size={18} className="text-primary" />}
      <span>{label}</span>
      {badge && (
        <span className={`text-white ${badgeColor} rounded-md px-1 text-xs`}>{badge}</span>
      )}
    </div>
  )
}
