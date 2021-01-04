export function HalfPage({ side, className, children }) {

  // <div className={`skw-page__half skw-page__half--${(pageNumber%2 == 0) ? "right" : "left"} ${className ? className : ""}`}>
  return (
    <div className={`skw-page__half skw-page__half--${side} ${className ? className : ""}`}>
      <div className="skw-page__skewed">
        <div className="skw-page__content">{children}</div>
      </div>
    </div>
  )
}


