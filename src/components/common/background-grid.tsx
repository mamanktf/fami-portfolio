export default function BackgroundGrid() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow */}
      <div
        className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: "var(--glow)",
        }}
      />

    </div>
  );
}