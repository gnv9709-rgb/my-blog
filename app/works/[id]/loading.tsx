export default function Loading() {
  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh' }}>
      {/* Header skeleton */}
      <div
        style={{
          height: '64px',
          borderBottom: '1px solid var(--border)',
          background: 'rgba(5,5,5,0.94)',
        }}
      />

      {/* Media skeleton */}
      <div
        className="skeleton w-full"
        style={{ paddingBottom: '56.25%', background: 'var(--surface)' }}
      />

      {/* Info skeleton */}
      <div className="px-6 md:px-16 py-16 md:py-20 max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left */}
        <div className="lg:w-2/5 space-y-4">
          <div
            className="skeleton"
            style={{ height: '10px', width: '80px', background: 'var(--surface)', borderRadius: '2px' }}
          />
          <div
            className="skeleton"
            style={{ height: '48px', width: '70%', background: 'var(--surface)', borderRadius: '2px' }}
          />
          <div
            className="skeleton"
            style={{ height: '10px', width: '120px', background: 'var(--surface)', borderRadius: '2px' }}
          />
        </div>

        {/* Right */}
        <div className="lg:w-3/5 space-y-6">
          {[1, 2].map((i) => (
            <div key={i} className="space-y-2">
              <div
                className="skeleton"
                style={{ height: '9px', width: '60px', background: 'var(--surface)', borderRadius: '2px' }}
              />
              <div
                className="skeleton"
                style={{ height: '14px', width: '90%', background: 'var(--surface)', borderRadius: '2px' }}
              />
              <div
                className="skeleton"
                style={{ height: '14px', width: '75%', background: 'var(--surface)', borderRadius: '2px' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Nav skeleton */}
      <div
        className="px-6 md:px-16 py-12 flex justify-between"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="space-y-2">
          <div className="skeleton" style={{ height: '9px', width: '40px', background: 'var(--surface)', borderRadius: '2px' }} />
          <div className="skeleton" style={{ height: '14px', width: '120px', background: 'var(--surface)', borderRadius: '2px' }} />
        </div>
        <div className="space-y-2 items-end flex flex-col">
          <div className="skeleton" style={{ height: '9px', width: '40px', background: 'var(--surface)', borderRadius: '2px' }} />
          <div className="skeleton" style={{ height: '14px', width: '120px', background: 'var(--surface)', borderRadius: '2px' }} />
        </div>
      </div>
    </div>
  );
}
