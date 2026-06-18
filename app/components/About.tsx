const skills = [
  {
    heading: '분야',
    items: ['기획', '촬영', '편집', '음향', '모션그래픽', '라이브 송출'],
  },
  {
    heading: '툴',
    items: ['Premiere Pro', 'After Effects', 'Photoshop', 'Higgsfield', 'CapCut'],
  },
  {
    heading: '장비',
    items: ['SONY A7S III', 'EOS 5D Mark IV', 'DJI RS 4 Pro', 'Nanlite Alien', 'SENNHEISER MKH-416'],
  },
];

interface AboutProps {
  name: string;
  photo?: string;
}

export default function About({ name }: AboutProps) {
  return (
    <section
      className="px-6 md:px-16 py-20 md:py-28"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl flex flex-col lg:flex-row gap-16 lg:gap-32">
        {/* Identity */}
        <div className="lg:w-2/5 reveal">
          <p
            className="text-[10px] tracking-[0.35em] uppercase mb-6"
            style={{ color: 'var(--accent)' }}
          >
            About
          </p>
          <h2
            className="mb-4 leading-[1.05]"
            style={{
              fontFamily: 'var(--font-playfair, Georgia, serif)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: 'var(--foreground)',
              fontWeight: 500,
            }}
          >
            {name}
          </h2>
          <p
            className="text-[11px] tracking-[0.3em] uppercase mb-8"
            style={{ color: 'var(--muted)' }}
          >
            영상 콘텐츠 제작자
          </p>
          <p
            className="text-sm leading-[1.9]"
            style={{ color: 'var(--muted)', maxWidth: '36ch' }}
          >
            영상 한 편을 만들 때 기획부터 촬영, 편집, 음향까지 직접 챙깁니다.
            인터뷰, 예능, 모션그래픽, AI 광고 등 장르를 가리지 않고,
            클라이언트가 전하고 싶은 이야기를 영상으로 풀어냅니다.
          </p>
        </div>

        {/* Skills */}
        <div
          className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-14 reveal"
          style={{ transitionDelay: '120ms' }}
        >
          {skills.map((group) => (
            <div key={group.heading}>
              <h3
                className="text-[9px] tracking-[0.45em] uppercase mb-5"
                style={{ color: 'var(--accent)' }}
              >
                {group.heading}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs tracking-wide"
                    style={{ color: 'var(--foreground)', opacity: 0.65 }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
