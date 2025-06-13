const hyphenPattern = /[‒–—―−‐]|--/g

export const unifyHyphens = (s: string): string => {
  return s.replace(hyphenPattern, '-')
}
