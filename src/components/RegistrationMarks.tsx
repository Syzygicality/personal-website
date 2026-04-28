export default function RegistrationMarks() {
  return (
    <div className="hidden sm:flex gap-4">
      <svg width="67" height="67" viewBox="0 0 40 40" className="border border-black">
        <path d="M0 0h40v40H0z" fill="none" />
        <path d="M6 6L34 34M34 6L6 34" stroke="black" strokeWidth="0.5" />
        <circle cx="20" cy="20" r="8" fill="none" stroke="black" strokeWidth="0.5" />
        <circle cx="20" cy="20" r="2" fill="black" />
      </svg>
      <svg width="67" height="67" viewBox="0 0 40 40" className="border border-black">
        <path d="M0 0h40v40H0z" fill="none" />
        <g stroke="black" strokeWidth="0.4">
          <path d="M0 10h40M0 20h40M0 30h40" />
          <path d="M10 0v40M20 0v40M30 0v40" />
        </g>
        <rect x="20" y="20" width="10" height="10" fill="black" />
        <rect x="10" y="10" width="10" height="10" fill="black" />
        <rect x="30" y="0" width="10" height="10" fill="black" />
        <rect x="0" y="30" width="10" height="10" fill="black" />
      </svg>
      <svg width="67" height="67" viewBox="0 0 40 40" className="border border-black">
        <path d="M0 0h40v40H0z" fill="none" />
        <path d="M4 10V4h6M30 4h6v6M36 30v6h-6M10 36H4v-6" fill="none" stroke="black" strokeWidth="1" />
        <circle cx="20" cy="20" r="1.5" fill="black" />
      </svg>
      <svg width="67" height="67" viewBox="0 0 40 40" className="border border-black">
        <path d="M0 0h40v40H0z" fill="none" />
        <path d="M20 0v40M0 20h40" stroke="black" strokeWidth="0.5" />
        <circle cx="20" cy="20" r="10" fill="black" />
      </svg>
    </div>
  )
}
