const romeNumberPatternWithCyryllic = /(?<![CMIXСМІХ])(?:[MМ]{0,4}(?:[CС][MМ]|[CС]D|D?[CС]{0,3})(?:[XХ][CС]|[XХ]L|L?[XХ]{0,3})(?:[IІ]X|[IІ]V|V?[IІ]{0,3}))(?![CMIXСМІХ])/g

const letters: Record<string, string> = {
  С: 'C',
  М: 'M',
  І: 'I',
  Х: 'X'
}

const ukrainianPattern = /[СМІХ]/g

export const fixRomeNumbers = (s: string): string => {
  return s.replace(romeNumberPatternWithCyryllic, (replacement: string): string => {
    if (replacement.length < 2) return replacement
    return replacement.replace(ukrainianPattern, (letter: string): string => letters[letter])
  })
}
