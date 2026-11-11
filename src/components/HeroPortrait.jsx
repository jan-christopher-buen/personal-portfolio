export default function HeroPortrait() {
  return (
    <div className="hero-portrait">
      <img
        className="hero-cutout"
        src="/images/jan-christopher-buen-cutout.png"
        alt="Jan Christopher Buen"
        width="720"
        height="1008"
        fetchPriority="high"
        decoding="async"
      />
    </div>
  )
}
