export const COLORS = {
  PRIMARY: '#6c5ce7',
  DARK: '#333',
  GRAY: '#666',
  LIGHT: '#E7E7EB',
  DANGER: '#ee5253',
  SUCCESS: '#1dd1a1',
  WARNING: '#feca57',
}

const BREAKPOINTS = {
  xs: `320px`,
  sm: `768px`,
  lg: `1200px`,
}

export const mediaQueries = key => {
  return style => `@media (max-width: ${BREAKPOINTS[key]}) { ${style} }`
}
