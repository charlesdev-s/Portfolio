// Portfolio Direction C — Brutalist Mono / Developer Terminal
// Heavy borders, monospace everywhere, ASCII visual language. Lime accent.
// White paper + ink black + a single neon. README-style structure.
import { createContext, useContext } from 'react'
import { PORTFOLIO } from './data'

const P = PORTFOLIO

const C_COLORS = {
  bg: '#f5f4ef',
  paper: '#ffffff',
  ink: '#0a0a0a',
  inkSoft: '#2a2a2a',
  mute: '#5c5c5c',
  rule: '#0a0a0a',
  ruleSoft: 'rgba(10,10,10,0.18)',
  accent: '#c7f284', // lime
  accentDeep: '#9ed44a',
  warn: '#ff6a3d',
}
const C_MONO = "'JetBrains Mono', ui-monospace, 'Courier New', monospace"
const C_DISP = "'Space Mono', 'JetBrains Mono', monospace"

// Mobile flag flows through context so every section can adapt without prop drilling.
const MobileCtx = createContext(false)
const useM = () => useContext(MobileCtx)

// hard-edged "card" with thick border
const cBox = (extra = {}) => ({
  background: C_COLORS.paper,
  border: `1.5px solid ${C_COLORS.ink}`,
  borderRadius: 0,
  ...extra,
})

function CLabel({ children, color = C_COLORS.ink, size = 11, style }) {
  return (
    <div
      style={{
        fontFamily: C_MONO,
        fontSize: size,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color,
        fontWeight: 600,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

function CSection({ tag, title, kicker, children, id, bg = C_COLORS.bg, last }) {
  const m = useM()
  return (
    <section
      id={id}
      style={{
        background: bg,
        padding: m ? '56px 20px' : '100px 72px',
        borderTop: `1.5px solid ${C_COLORS.ink}`,
        borderBottom: last ? `1.5px solid ${C_COLORS.ink}` : 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: m ? 24 : 36 }}>
        <div
          style={{
            background: C_COLORS.ink,
            color: C_COLORS.accent,
            padding: '5px 12px',
            fontFamily: C_MONO,
            fontSize: m ? 11 : 12,
            letterSpacing: '0.1em',
            fontWeight: 600,
            whiteSpace: 'nowrap',
          }}
        >
          {tag}
        </div>
        <div style={{ flex: 1, height: 1, background: C_COLORS.ink }} />
        {!m && (
          <div style={{ fontFamily: C_MONO, fontSize: 11, color: C_COLORS.mute, letterSpacing: '0.1em' }}>
            {`// ${tag.split('/')[0].trim()}.md`}
          </div>
        )}
      </div>
      <h2
        style={{
          fontFamily: C_DISP,
          fontSize: m ? 30 : 52,
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.025em',
          color: C_COLORS.ink,
          margin: '0 0 16px',
          maxWidth: 980,
        }}
      >
        {title}
      </h2>
      {kicker && (
        <p
          style={{
            fontFamily: C_MONO,
            fontSize: m ? 13 : 15,
            lineHeight: 1.65,
            color: C_COLORS.inkSoft,
            maxWidth: 640,
            margin: m ? '0 0 36px' : '0 0 56px',
            textWrap: 'pretty',
          }}
        >
          {kicker}
        </p>
      )}
      {children}
    </section>
  )
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function CHero() {
  const m = useM()
  return (
    <section style={{ background: C_COLORS.bg, padding: 0, position: 'relative' }}>
      {/* top bar — terminal */}
      <div
        style={{
          background: C_COLORS.ink,
          color: C_COLORS.accent,
          padding: m ? '9px 16px' : '10px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: m ? 10 : 16,
          flexWrap: 'wrap',
          fontFamily: C_MONO,
          fontSize: 11,
          letterSpacing: '0.05em',
        }}
      >
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 12, height: 12, borderRadius: 999, background: '#ff5f57' }} />
          <span style={{ width: 12, height: 12, borderRadius: 999, background: '#febc2e' }} />
          <span style={{ width: 12, height: 12, borderRadius: 999, background: '#28c840' }} />
        </div>
        {!m && <span style={{ color: 'rgba(199,242,132,0.5)' }}>~/portfolio</span>}
        <span style={{ color: C_COLORS.accent }}>$ cat README.md</span>
        <div style={{ flex: 1 }} />
        <span style={{ color: 'rgba(199,242,132,0.6)' }}>v2.0.0</span>
      </div>

      <nav
        style={{
          padding: m ? '16px 20px' : '20px 72px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 10,
          flexWrap: 'wrap',
          borderBottom: `1.5px solid ${C_COLORS.ink}`,
        }}
      >
        <div style={{ fontFamily: C_DISP, fontWeight: 700, fontSize: m ? 17 : 20, color: C_COLORS.ink }}>
          @{P.github}
          <span style={{ color: C_COLORS.accentDeep }}>_</span>
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {(m ? ['work', 'contact'] : ['work', 'skills', 'exp', 'contact']).map((l) => (
            <a
              key={l}
              href={`#${l}-c`}
              style={{
                fontFamily: C_MONO,
                fontSize: 12,
                color: C_COLORS.ink,
                padding: '8px 14px',
                border: `1.5px solid ${C_COLORS.ink}`,
                textDecoration: 'none',
                fontWeight: 600,
                letterSpacing: '0.05em',
              }}
            >
              ./{l}
            </a>
          ))}
          <a
            href={P.resume}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: C_MONO,
              fontSize: 12,
              color: C_COLORS.ink,
              background: C_COLORS.accent,
              padding: '8px 14px',
              border: `1.5px solid ${C_COLORS.ink}`,
              textDecoration: 'none',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            ./resume.pdf →
          </a>
        </div>
      </nav>

      <div style={{ padding: m ? '40px 20px 48px' : '72px 72px 80px', position: 'relative' }}>
        {/* status row */}
        <div style={{ display: 'flex', gap: m ? 10 : 16, marginBottom: m ? 32 : 44, flexWrap: 'wrap' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 14px',
              border: `1.5px solid ${C_COLORS.ink}`,
              background: C_COLORS.accent,
              fontFamily: C_MONO,
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: 999, background: C_COLORS.ink }} />
            STATUS: open_to_work = true
          </div>
          <div style={{ padding: '6px 14px', border: `1.5px solid ${C_COLORS.ink}`, fontFamily: C_MONO, fontSize: 12, fontWeight: 600 }}>
            LOCALE: ph_PH (UTC+8)
          </div>
          {!m && (
            <div style={{ padding: '6px 14px', border: `1.5px solid ${C_COLORS.ink}`, fontFamily: C_MONO, fontSize: 12, fontWeight: 600 }}>
              BUILD: stable
            </div>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1.6fr 1fr', gap: m ? 36 : 60, alignItems: 'end' }}>
          <div>
            <div style={{ fontFamily: C_MONO, fontSize: 13, color: C_COLORS.mute, marginBottom: 10 }}># ./hi.sh</div>
            <h1
              style={{
                fontFamily: C_DISP,
                fontSize: m ? 52 : 108,
                fontWeight: 700,
                lineHeight: 0.92,
                letterSpacing: '-0.045em',
                color: C_COLORS.ink,
                margin: '0 0 20px',
              }}
            >
              CHARLES
              <br />
              <span
                style={{
                  background: C_COLORS.accent,
                  padding: '0 12px',
                  display: 'inline-block',
                  boxShadow: `${m ? 4 : 6}px ${m ? 4 : 6}px 0 ${C_COLORS.ink}`,
                }}
              >
                GAMIDO.
              </span>
            </h1>
            <p
              style={{
                fontFamily: C_MONO,
                fontSize: m ? 14 : 16,
                lineHeight: 1.7,
                color: C_COLORS.inkSoft,
                margin: '30px 0 36px',
                maxWidth: 580,
                textWrap: 'pretty',
              }}
            >
              <span style={{ color: C_COLORS.mute }}>{`/**`}</span>
              <br />
              <span style={{ color: C_COLORS.mute }}>{' * '}</span>Full-stack &amp; mobile developer.
              <br />
              <span style={{ color: C_COLORS.mute }}>{' * '}</span>I build end-to-end products in React Native,
              <br />
              <span style={{ color: C_COLORS.mute }}>{' * '}</span>Python and C# — with a math habit and
              <br />
              <span style={{ color: C_COLORS.mute }}>{' * '}</span>an opinion about data quality.
              <br />
              <span style={{ color: C_COLORS.mute }}>{' */'}</span>
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href="#work-c"
                style={{
                  fontFamily: C_MONO,
                  fontSize: 14,
                  fontWeight: 600,
                  background: C_COLORS.ink,
                  color: C_COLORS.accent,
                  padding: '14px 24px',
                  border: `1.5px solid ${C_COLORS.ink}`,
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                  boxShadow: `4px 4px 0 ${C_COLORS.accent}`,
                }}
              >
                ./view-work →
              </a>
              <a
                href="#contact-c"
                style={{
                  fontFamily: C_MONO,
                  fontSize: 14,
                  fontWeight: 600,
                  background: C_COLORS.paper,
                  color: C_COLORS.ink,
                  padding: '14px 24px',
                  border: `1.5px solid ${C_COLORS.ink}`,
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                }}
              >
                ./hire-me
              </a>
            </div>
          </div>

          {/* ID card */}
          <div style={cBox({ padding: 0, boxShadow: `8px 8px 0 ${C_COLORS.ink}`, maxWidth: m ? 340 : 'none' })}>
            <div
              style={{
                background: C_COLORS.ink,
                color: C_COLORS.accent,
                padding: '10px 16px',
                fontFamily: C_MONO,
                fontSize: 11,
                letterSpacing: '0.1em',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>$ whoami</span>
              <span>ID#2026-0001</span>
            </div>
            <div
              style={{
                aspectRatio: '1/1',
                background: C_COLORS.bg,
                position: 'relative',
                borderBottom: `1.5px solid ${C_COLORS.ink}`,
                overflow: 'hidden',
              }}
            >
              {/* real headshot — kept in full colour */}
              <img
                src={P.headshot}
                alt={P.name}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 22%',
                  filter: 'contrast(1.02) saturate(1.03)',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  right: 16,
                  top: 16,
                  background: C_COLORS.accent,
                  padding: '4px 10px',
                  fontFamily: C_MONO,
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  border: `1px solid ${C_COLORS.ink}`,
                }}
              >
                v2.0
              </div>
            </div>
            <div style={{ padding: 16 }}>
              {[
                ['NAME', 'Charles Richard Gamido'],
                ['ROLE', 'Full-stack / Mobile Dev'],
                ['BASE', 'Baliuag, Bulacan, PH'],
                ['EDU', "B.S. Math (CompSci) '26"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr',
                    gap: 12,
                    padding: '5px 0',
                    borderBottom: `1px dashed ${C_COLORS.ruleSoft}`,
                    fontFamily: C_MONO,
                    fontSize: 12,
                  }}
                >
                  <span style={{ color: C_COLORS.mute, fontWeight: 600 }}>{k}</span>
                  <span style={{ color: C_COLORS.ink }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* stats — pixel boxes */}
        <div
          style={{
            marginTop: m ? 48 : 80,
            display: 'grid',
            gridTemplateColumns: m ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            border: `1.5px solid ${C_COLORS.ink}`,
          }}
        >
          {P.stats.map((s, i) => {
            const borderRight = m ? (i % 2 === 0 ? `1.5px solid ${C_COLORS.ink}` : 'none') : i < 3 ? `1.5px solid ${C_COLORS.ink}` : 'none'
            const borderTop = m && i >= 2 ? `1.5px solid ${C_COLORS.ink}` : 'none'
            return (
              <div key={i} style={{ padding: m ? '20px 20px' : '28px 28px', background: C_COLORS.paper, borderRight, borderTop, position: 'relative' }}>
                <div style={{ fontFamily: C_DISP, fontSize: m ? 38 : 52, fontWeight: 700, color: C_COLORS.ink, letterSpacing: '-0.04em', lineHeight: 1 }}>
                  {s.value}
                </div>
                <CLabel color={C_COLORS.mute} style={{ marginTop: 10, fontWeight: 500 }}>
                  {s.label}
                </CLabel>
                <div style={{ position: 'absolute', top: 10, right: 10, fontFamily: C_MONO, fontSize: 10, color: C_COLORS.ruleSoft, fontWeight: 600 }}>
                  0{i + 1}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ── ABOUT ─────────────────────────────────────────────────────────────────────
function CAbout() {
  const m = useM()
  return (
    <CSection
      tag="01 / ABOUT.MD"
      id="about-c"
      title={
        <>
          {'// '}
          <span style={{ background: C_COLORS.accent, padding: '0 8px' }}>What I actually do, day-to-day.</span>
        </>
      }
      kicker="// A working summary. Ask me about any of these; I keep receipts."
    >
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1.3fr 1fr', gap: m ? 28 : 60 }}>
        <div style={cBox({ padding: m ? 22 : 32, boxShadow: `6px 6px 0 ${C_COLORS.ink}`, overflowX: 'auto' })}>
          <div
            style={{
              fontFamily: C_MONO,
              fontSize: 11,
              color: C_COLORS.mute,
              letterSpacing: '0.1em',
              paddingBottom: 12,
              marginBottom: 18,
              borderBottom: `1px dashed ${C_COLORS.ruleSoft}`,
            }}
          >
            function whoAmI() {'{'}
          </div>
          <div style={{ fontFamily: C_MONO, fontSize: m ? 13 : 15, lineHeight: 1.8, color: C_COLORS.ink, paddingLeft: 18 }}>
            <span style={{ color: C_COLORS.mute }}>return</span> {'{'}
            <div style={{ paddingLeft: 18 }}>
              <div>
                <span style={{ color: C_COLORS.accentDeep }}>// </span>
                <span style={{ color: C_COLORS.mute }}>currently building</span>
              </div>
              <div>
                name: <span style={{ background: C_COLORS.accent }}>"Charles Richard Gamido"</span>,
              </div>
              <div>edu: "B.S. Math (CompSci) @ BulSU '26",</div>
              <div>focus: ["React Native", "Python", "C#"],</div>
              <div>lately: [</div>
              <div style={{ paddingLeft: 18 }}>
                <div>"built Niichi end-to-end (solo)",</div>
                <div>"building ARound BulSU (team of 5)",</div>
                <div>"CRM + ops for a UK sales team",</div>
              </div>
              <div>],</div>
              <div>likes: ["the boring plumbing", "honest data"],</div>
            </div>
            {'}'};
          </div>
          <div style={{ paddingLeft: 0, marginTop: 12, fontFamily: C_MONO, fontSize: m ? 13 : 15, color: C_COLORS.ink }}>
            {'}'}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            ['NOW', 'Final year B.S. Math (CompSci) @ BulSU'],
            ['STACK', 'TS, RN, Python, C#, Unity, Supabase'],
            ['OPEN', 'FT, contract, freelance — remote-first'],
            ['TIME', 'PHT / UTC+8 — flexible for EU/US'],
            ['REPLY', 'I read every message myself'],
          ].map(([k, v], i) => (
            <div
              key={k}
              style={{
                padding: '14px 0',
                borderTop: i === 0 ? `1.5px solid ${C_COLORS.ink}` : 'none',
                borderBottom: `1px solid ${C_COLORS.ruleSoft}`,
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: 16,
                alignItems: 'baseline',
              }}
            >
              <div style={{ fontFamily: C_MONO, fontSize: 11, color: C_COLORS.mute, letterSpacing: '0.15em', fontWeight: 700 }}>
                {k}
              </div>
              <div style={{ fontFamily: C_MONO, fontSize: 14, color: C_COLORS.ink, fontWeight: 500 }}>{v}</div>
            </div>
          ))}
          <a
            href="#contact-c"
            style={{
              marginTop: 24,
              padding: '16px 20px',
              background: C_COLORS.ink,
              color: C_COLORS.accent,
              fontFamily: C_MONO,
              fontSize: 13,
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '0.05em',
              textAlign: 'center',
              border: `1.5px solid ${C_COLORS.ink}`,
            }}
          >
            $ ping --hire-me
            <span style={{ animation: 'blink 1s infinite', marginLeft: 6 }}>▌</span>
          </a>
        </div>
      </div>
    </CSection>
  )
}

// ── SKILLS (tiered by honest depth) ────────────────────────────────────────────
// Tier order + display colour. Skills group under these instead of fake % bars.
const SKILL_TIERS = [
  ['primary', 'primary', C_COLORS.accent],
  ['working', 'working', 'rgba(199,242,132,0.78)'],
  ['familiar', 'familiar', 'rgba(199,242,132,0.45)'],
]

function CSkills() {
  const m = useM()
  return (
    <CSection
      tag="02 / SKILLS.SH"
      id="skills-c"
      bg={C_COLORS.paper}
      title="Tools, grouped by how deep I actually go."
      kicker="// $ cat skills.txt | sort --by-depth"
    >
      <div style={cBox({ padding: m ? 18 : 28, background: C_COLORS.ink, boxShadow: `8px 8px 0 ${C_COLORS.accent}` })}>
        <div style={{ fontFamily: C_MONO, fontSize: 11, color: 'rgba(199,242,132,0.7)', marginBottom: 18, letterSpacing: '0.1em' }}>
          $ cat skills.txt | sort --by-depth
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 20 : 28 }}>
          {Object.entries(P.skills).map(([cat, items]) => (
            <div key={cat}>
              <div
                style={{
                  fontFamily: C_MONO,
                  fontSize: 13,
                  color: C_COLORS.accent,
                  fontWeight: 700,
                  marginBottom: 10,
                  paddingBottom: 8,
                  letterSpacing: '0.05em',
                  borderBottom: `1px dashed rgba(199,242,132,0.2)`,
                }}
              >
                ▸ {cat.toUpperCase()}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7, fontFamily: C_MONO, fontSize: 12.5 }}>
                {SKILL_TIERS.map(([tier, label, color]) => {
                  const names = items.filter(([, t]) => t === tier).map(([n]) => n)
                  if (!names.length) return null
                  return (
                    <div key={tier} style={{ display: 'grid', gridTemplateColumns: m ? '74px 1fr' : '84px 1fr', gap: m ? 8 : 12, alignItems: 'baseline' }}>
                      <span style={{ color, fontWeight: 700, letterSpacing: '0.04em' }}>{label}</span>
                      <span style={{ color: '#e8e8e8', lineHeight: 1.5, textWrap: 'pretty' }}>{names.join(', ')}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 22,
            paddingTop: 14,
            borderTop: `1px dashed rgba(199,242,132,0.2)`,
            fontFamily: C_MONO,
            fontSize: 11,
            color: 'rgba(199,242,132,0.5)',
            letterSpacing: '0.05em',
          }}
        >
          {`// primary = daily driver · working = used in real projects · familiar = built with it, ramp fast`}
        </div>
      </div>
    </CSection>
  )
}

// ── PROJECTS ──────────────────────────────────────────────────────────────────
function CProjectGallery({ p, accent }) {
  const m = useM()
  const w = m ? 92 : 130
  return (
    <div
      style={{
        padding: m ? 20 : 28,
        background: C_COLORS.bg,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        position: 'relative',
        borderTop: m ? `1.5px solid ${C_COLORS.ink}` : 'none',
      }}
    >
      <div style={{ position: 'absolute', top: 16, right: 20, fontFamily: C_MONO, fontSize: 10, color: C_COLORS.mute, letterSpacing: '0.1em' }}>
        FIG_{p.id.toUpperCase()}
      </div>

      {p.cover ? (
        <>
          <div style={{ width: '100%', border: `3px solid ${C_COLORS.ink}`, boxShadow: `6px 6px 0 ${accent}`, overflow: 'hidden', background: '#fff' }}>
            <img src={p.cover} alt={`${p.name} — app overview`} style={{ width: '100%', display: 'block' }} />
          </div>
          <div style={{ marginTop: 4, fontFamily: C_MONO, fontSize: m ? 10 : 11, color: C_COLORS.mute, letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center' }}>
            {p.coverCaption || p.name}
          </div>
        </>
      ) : (
        <>
          <div style={{ display: 'flex', gap: m ? 8 : 12, justifyContent: 'center', alignItems: 'flex-end' }}>
            {p.shots.slice(0, 3).map((sh, j) => (
              <div
                key={j}
                style={{
                  width: w,
                  aspectRatio: '9/19.5',
                  borderRadius: 18,
                  overflow: 'hidden',
                  background: '#000',
                  border: '3px solid #0a0a0a',
                  transform: j === 1 ? 'translateY(-20px)' : 'none',
                  boxShadow: j === 1 ? `6px 6px 0 ${accent}` : `4px 4px 0 ${C_COLORS.ink}`,
                }}
              >
                <img src={sh.src} alt={sh.cap} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
          <div style={{ marginTop: 14, fontFamily: C_MONO, fontSize: m ? 10 : 11, color: C_COLORS.mute, letterSpacing: '0.1em', display: 'flex', gap: m ? 8 : 14 }}>
            {p.shots.slice(0, 3).map((sh, j) => (
              <div key={j} style={{ width: w, textAlign: 'center', textTransform: 'uppercase' }}>
                {sh.cap}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// Proof strip — repo / live demo / video buttons in the card.
// Fill p.repo / p.demo / p.video in data.js to wire real links. If a repo
// exists but is private, set p.repoPrivate to surface an honest "on request" tag.
function ProofLinks({ p, accent }) {
  const btn = (filled) => ({
    fontFamily: C_MONO,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.04em',
    color: C_COLORS.ink,
    background: filled ? accent : C_COLORS.paper,
    border: `1.5px solid ${C_COLORS.ink}`,
    padding: '7px 12px',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  })
  const links = [
    p.demo && { k: 'live demo ↗', h: p.demo, filled: true },
    p.repo && { k: 'repo ↗', h: p.repo, filled: false },
    p.video && { k: 'watch ▶', h: p.video, filled: false },
  ].filter(Boolean)

  if (!links.length && !p.repoPrivate) return null

  return (
    <div
      style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: '12px 20px',
        background: C_COLORS.bg,
        borderBottom: `1.5px solid ${C_COLORS.ink}`,
      }}
    >
      {links.map((l) => (
        <a key={l.k} href={l.h} target="_blank" rel="noreferrer" style={btn(l.filled)}>
          {l.k}
        </a>
      ))}
      {p.repoPrivate && !p.repo && (
        <span
          style={{
            fontFamily: C_MONO,
            fontSize: 12,
            color: C_COLORS.mute,
            border: `1.5px dashed ${C_COLORS.ruleSoft}`,
            padding: '7px 12px',
            whiteSpace: 'nowrap',
          }}
        >
          {'// repo private — walkthrough on request'}
        </span>
      )}
    </div>
  )
}

function CProjectCard({ p, i }) {
  const m = useM()
  return (
    <div style={cBox({ marginBottom: 32, padding: 0, boxShadow: `8px 8px 0 ${i === 0 ? C_COLORS.accent : C_COLORS.warn}` })}>
      {/* header */}
      <div
        style={{
          background: C_COLORS.ink,
          color: C_COLORS.accent,
          padding: '12px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 10,
          flexWrap: 'wrap',
          fontFamily: C_MONO,
          fontSize: 12,
          letterSpacing: '0.05em',
        }}
      >
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ color: 'rgba(199,242,132,0.6)' }}>~/projects/{p.id}</span>
          <span style={{ background: i === 0 ? C_COLORS.accent : C_COLORS.warn, color: C_COLORS.ink, padding: '2px 8px', fontWeight: 700 }}>
            {p.tag.toUpperCase()}
          </span>
        </div>
        <span>{p.period}</span>
      </div>

      <ProofLinks p={p} accent={i === 0 ? C_COLORS.accent : C_COLORS.warn} />

      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1.2fr 1fr', gap: 0 }}>
        <div style={{ padding: m ? 22 : 36, borderRight: m ? 'none' : `1.5px solid ${C_COLORS.ink}` }}>
          <h3 style={{ fontFamily: C_DISP, fontSize: m ? 34 : 56, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.035em', color: C_COLORS.ink, margin: '0 0 8px' }}>
            {p.name}
            <span style={{ fontSize: m ? 16 : 22, marginLeft: 8, color: C_COLORS.mute, letterSpacing: '0' }}>.app</span>
          </h3>
          <div style={{ fontFamily: C_MONO, fontSize: 14, color: C_COLORS.inkSoft, marginBottom: 6, letterSpacing: '0.02em' }}>{p.role}</div>
          <p
            style={{
              fontFamily: C_MONO,
              fontSize: m ? 14 : 16,
              fontWeight: 500,
              color: C_COLORS.ink,
              lineHeight: 1.4,
              margin: '20px 0 28px',
              paddingLeft: 14,
              borderLeft: `3px solid ${i === 0 ? C_COLORS.accent : C_COLORS.warn}`,
            }}
          >
            "{p.headline}"
          </p>

          {[
            ['PROBLEM', p.problem],
            ['APPROACH', p.approach],
          ].map(([k, v]) => (
            <div key={k} style={{ marginBottom: 20 }}>
              <CLabel size={11} color={C_COLORS.mute} style={{ marginBottom: 6 }}>{`> ${k}`}</CLabel>
              <p style={{ fontFamily: C_MONO, fontSize: 13.5, lineHeight: 1.65, color: C_COLORS.ink, margin: 0, textWrap: 'pretty' }}>{v}</p>
            </div>
          ))}

          <div>
            <CLabel size={11} color={C_COLORS.mute} style={{ marginBottom: 8 }}>{'> HIGHLIGHTS'}</CLabel>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', fontFamily: C_MONO, fontSize: 13.5, lineHeight: 1.6 }}>
              {p.outcomes.map((o, j) => (
                <li key={j} style={{ display: 'flex', gap: 10, color: C_COLORS.ink, padding: '3px 0' }}>
                  <span style={{ color: i === 0 ? C_COLORS.accentDeep : C_COLORS.warn, fontWeight: 700 }}>[x]</span>
                  <span style={{ textWrap: 'pretty' }}>{o}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: 24, paddingTop: 16, borderTop: `1px dashed ${C_COLORS.ruleSoft}`, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {p.tech.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: C_MONO,
                  fontSize: 11,
                  color: C_COLORS.ink,
                  fontWeight: 600,
                  padding: '4px 10px',
                  border: `1.5px solid ${C_COLORS.ink}`,
                  background: C_COLORS.bg,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <CProjectGallery p={p} accent={i === 0 ? C_COLORS.accent : C_COLORS.warn} />
      </div>
    </div>
  )
}

function CMoreProjects() {
  const m = useM()
  if (!P.moreProjects?.length) return null
  return (
    <div style={{ marginTop: 12 }}>
      <CLabel size={11} color={C_COLORS.mute} style={{ marginBottom: 14 }}>{'// also built'}</CLabel>
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 16 : 24 }}>
        {P.moreProjects.map((mp, i) => (
          <div key={i} style={cBox({ padding: m ? 20 : 24, boxShadow: `5px 5px 0 ${C_COLORS.ink}` })}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
              <h4 style={{ fontFamily: C_DISP, fontSize: m ? 20 : 24, fontWeight: 700, color: C_COLORS.ink, margin: 0, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                {mp.name}
              </h4>
              <span style={{ fontFamily: C_MONO, fontSize: 11, color: C_COLORS.accentDeep, fontWeight: 600, whiteSpace: 'nowrap' }}>{mp.year}</span>
            </div>
            <div style={{ fontFamily: C_MONO, fontSize: 12, color: C_COLORS.inkSoft, marginTop: 4, marginBottom: 12 }}>{mp.kind}</div>
            <p style={{ fontFamily: C_MONO, fontSize: 13, lineHeight: 1.6, color: C_COLORS.ink, margin: '0 0 14px', textWrap: 'pretty' }}>{mp.blurb}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {mp.tech.map((t) => (
                <span key={t} style={{ fontFamily: C_MONO, fontSize: 11, color: C_COLORS.ink, fontWeight: 600, padding: '3px 9px', border: `1.5px solid ${C_COLORS.ink}`, background: C_COLORS.bg }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CWork() {
  return (
    <CSection tag="03 / WORK.JSON" id="work-c" title="Selected work." kicker="// Two featured builds — then a few more from the lab.">
      {P.projects.map((p, i) => (
        <CProjectCard key={p.id} p={p} i={i} />
      ))}
      <CMoreProjects />
    </CSection>
  )
}

// ── EXPERIENCE ────────────────────────────────────────────────────────────────
// Stable pseudo-hash per commit row (no Math.random — keeps render deterministic).
function commitHash(i) {
  return (0xc0ffee + i * 0x9e3779b1).toString(36).slice(-4)
}

function CExperience() {
  const m = useM()
  return (
    <CSection tag="04 / EXPERIENCE.LOG" id="exp-c" bg={C_COLORS.paper} title="Roles + receipts." kicker="// $ git log --pretty=full --since='2022-07-01'">
      <div style={cBox({ padding: 0 })}>
        {P.experience.map((e, i) => (
          <div
            key={i}
            style={{
              padding: m ? '22px 20px' : '28px 32px',
              borderBottom: i < P.experience.length - 1 ? `1.5px solid ${C_COLORS.ink}` : 'none',
              display: 'grid',
              gridTemplateColumns: m ? '1fr' : '200px 1fr',
              gap: m ? 16 : 28,
              alignItems: 'start',
            }}
          >
            <div>
              <div style={{ fontFamily: C_MONO, fontSize: 11, color: C_COLORS.mute, fontWeight: 600, letterSpacing: '0.1em', marginBottom: 8 }}>
                commit {String(P.experience.length - i).padStart(7, '0')}
                {commitHash(i)}
              </div>
              <div
                style={{
                  display: 'inline-block',
                  padding: '3px 10px',
                  background: C_COLORS.accent,
                  fontFamily: C_MONO,
                  fontSize: 11,
                  fontWeight: 700,
                  border: `1.5px solid ${C_COLORS.ink}`,
                }}
              >
                {e.period}
              </div>
              <div style={{ fontFamily: C_MONO, fontSize: 12, color: C_COLORS.mute, marginTop: 10 }}>@ {e.where}</div>
            </div>
            <div>
              <h4 style={{ fontFamily: C_DISP, fontSize: m ? 21 : 26, fontWeight: 700, color: C_COLORS.ink, margin: '0 0 4px', letterSpacing: '-0.02em' }}>
                {e.role}
              </h4>
              <div style={{ fontFamily: C_MONO, fontSize: 13, color: C_COLORS.inkSoft, marginBottom: 14, fontWeight: 500 }}>{e.org}</div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {e.bullets.map((b, j) => (
                  <li key={j} style={{ fontFamily: C_MONO, fontSize: 13.5, lineHeight: 1.6, color: C_COLORS.ink, display: 'flex', gap: 10, textWrap: 'pretty' }}>
                    <span style={{ color: C_COLORS.accentDeep, fontWeight: 700, flex: '0 0 auto' }}>+</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* education + leadership */}
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 20 : 32, marginTop: 32 }}>
        <div style={cBox({ padding: m ? 22 : 28, boxShadow: `6px 6px 0 ${C_COLORS.ink}` })}>
          <CLabel size={11} color={C_COLORS.mute} style={{ marginBottom: 16 }}>{'> EDUCATION'}</CLabel>
          {P.education.map((ed, i) => (
            <div
              key={i}
              style={{
                paddingBottom: i < P.education.length - 1 ? 16 : 0,
                marginBottom: i < P.education.length - 1 ? 16 : 0,
                borderBottom: i < P.education.length - 1 ? `1px dashed ${C_COLORS.ruleSoft}` : 'none',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
                <h4 style={{ fontFamily: C_DISP, fontSize: 18, fontWeight: 700, color: C_COLORS.ink, margin: 0, letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                  {ed.degree}
                </h4>
                <span style={{ fontFamily: C_MONO, fontSize: 11, color: C_COLORS.accentDeep, fontWeight: 600, whiteSpace: 'nowrap' }}>{ed.year}</span>
              </div>
              <div style={{ fontFamily: C_MONO, fontSize: 13, color: C_COLORS.inkSoft, marginTop: 4 }}>{ed.school}</div>
              {ed.note && <div style={{ fontFamily: C_MONO, fontSize: 12, color: C_COLORS.mute, marginTop: 6 }}>{`// ${ed.note}`}</div>}
            </div>
          ))}
        </div>
        <div style={cBox({ padding: m ? 22 : 28, background: C_COLORS.ink, boxShadow: `6px 6px 0 ${C_COLORS.accent}` })}>
          <div style={{ fontFamily: C_MONO, fontSize: 11, color: 'rgba(199,242,132,0.7)', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 16 }}>
            {'> LEADERSHIP & EXTRAS'}
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {P.leadership.map((l, i) => (
              <li key={i} style={{ fontFamily: C_MONO, fontSize: 14, lineHeight: 1.55, color: '#e8e8e8', display: 'flex', gap: 10, textWrap: 'pretty' }}>
                <span style={{ color: C_COLORS.accent, fontWeight: 700 }}>▸</span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CSection>
  )
}

// ── CONTACT ───────────────────────────────────────────────────────────────────
function CContact() {
  const m = useM()
  const links = [
    { k: 'email', v: P.email, h: `mailto:${P.email}`, primary: true },
    { k: 'github', v: `@${P.github}`, h: P.githubUrl },
    { k: 'linkedin', v: P.linkedin, h: P.linkedinUrl },
    { k: 'upwork', v: 'hire on upwork', h: P.upworkUrl },
    { k: 'phone', v: P.phone, h: `tel:${P.phone.replace(/\s/g, '')}` },
  ]

  const Tile = ({ k, v, h, primary }) => (
    <a
      key={k}
      href={h}
      target={h.startsWith('http') ? '_blank' : undefined}
      rel={h.startsWith('http') ? 'noreferrer' : undefined}
      style={{
        ...cBox({ padding: primary ? '22px 24px' : '16px 18px' }),
        gridColumn: !m && primary ? '1 / -1' : 'auto',
        boxShadow: primary ? `5px 5px 0 ${C_COLORS.accent}` : 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        textDecoration: 'none',
        fontFamily: C_MONO,
        color: C_COLORS.ink,
      }}
    >
      <div>
        <div style={{ color: C_COLORS.mute, fontSize: 10, letterSpacing: '0.15em', marginBottom: 3 }}>
          $ ./{k}{primary ? '  — fastest' : ''}
        </div>
        <div style={{ fontWeight: 600, fontSize: primary ? 18 : 14, wordBreak: 'break-word' }}>{v}</div>
      </div>
      <div style={{ color: C_COLORS.accentDeep, fontSize: 16 }}>↗</div>
    </a>
  )

  return (
    <CSection
      tag="05 / CONTACT.SH"
      id="contact-c"
      bg={C_COLORS.bg}
      last
      title={
        <>
          $ ./hire-charles
          <span style={{ color: C_COLORS.accentDeep, animation: 'blink 1s infinite' }}>_</span>
        </>
      }
      kicker="// No contact form — reach me directly. Email is fastest, and I read every message myself. Full-time, contract or freelance — all welcome."
    >
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(2, 1fr)', gap: m ? 14 : 18 }}>
        {links.map((l) => (
          <Tile key={l.k} {...l} />
        ))}
      </div>
      {/* footer */}
      <div
        style={{
          marginTop: m ? 48 : 80,
          padding: '20px 0',
          borderTop: `1.5px solid ${C_COLORS.ink}`,
          display: 'flex',
          flexDirection: m ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: m ? 'flex-start' : 'center',
          gap: m ? 8 : 0,
          fontFamily: C_MONO,
          fontSize: 12,
        }}
      >
        <div style={{ color: C_COLORS.ink, fontWeight: 600 }}>© 2026 Charles Richard Gamido</div>
        <div style={{ color: C_COLORS.mute, letterSpacing: '0.1em' }}>Baliuag, Bulacan · Philippines</div>
      </div>
    </CSection>
  )
}

export default function PortfolioC({ mobile = false }) {
  return (
    <MobileCtx.Provider value={!!mobile}>
      <div style={{ background: C_COLORS.bg, color: C_COLORS.ink, fontFamily: C_MONO, minHeight: '100%', width: '100%', overflow: 'hidden' }}>
        <style>{`@keyframes blink { 0%, 50% { opacity: 1 } 51%, 100% { opacity: 0 } }`}</style>
        <CHero />
        <CAbout />
        <CSkills />
        <CWork />
        <CExperience />
        <CContact />
      </div>
    </MobileCtx.Provider>
  )
}
