export function StarSprinkles() {
  return (
    <div className="star-sprinkles" aria-hidden="true">
      {Array.from({ length: 24 }, (_, i) => (
        <i
          key={i}
          style={{
            left: `${(i * 43 + 9) % 100}%`,
            top: `${(i * 29 + 3) % 100}%`,
            animationDelay: `${-(i % 7)}s`,
          }}
        />
      ))}
    </div>
  );
}
