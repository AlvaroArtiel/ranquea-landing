const BADGES = [
  { emoji: '👑', title: 'Campeón anual', desc: '1º del ranking general' },
  { emoji: '🥇', title: 'Primer lugar', desc: '1º en una mensual' },
  { emoji: '🔥', title: 'Participación', desc: 'Todas las jornadas' },
  { emoji: '📸', title: 'Primera foto', desc: 'Tu primera subida' },
]

export function MockupAchievements() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {BADGES.map((b, i) => (
        <div
          key={b.title}
          className="reveal rounded-2xl border border-[var(--leaf)] bg-[var(--leaf-soft)] p-4 flex items-center gap-3"
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          <span className="text-[26px] leading-none" aria-hidden="true">{b.emoji}</span>
          <div>
            <p className="text-[13px] font-bold text-[var(--ink)] leading-tight">{b.title}</p>
            <p className="text-[11px] text-[var(--text-muted)]">{b.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
