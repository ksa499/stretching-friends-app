// Icon — inline-SVG wrapper. Uses window.svgIcon() from icons.js so the
// glyph tints via CSS `color` (currentColor) in every renderer.
function Icon({ name, w, h, color, style }) {
  const html = (window.svgIcon && window.svgIcon(name)) || "";
  return (
    <span
      className="icon"
      style={{ width: w, height: h ?? w, color, ...style }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

// Avatar — white circle, hairline ring, grey person glyph.
function Avatar({ size = 48 }) {
  const g = Math.round(size * 0.75);
  return (
    <div className="avatar" style={{ width: size, height: size }}>
      <Icon name="avatar-person" w={g} h={Math.round(g * 42 / 36)} />
    </div>
  );
}

Object.assign(window, { Icon, Avatar });
