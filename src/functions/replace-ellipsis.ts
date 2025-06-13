export const replaceEllipsis = (s: string): string => {
  return s.replace(/(?<!\.)\.\.\.(?!\.)/g, '…')
}
