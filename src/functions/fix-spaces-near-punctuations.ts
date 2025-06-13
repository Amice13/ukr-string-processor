const spaceBeforePunctuationPattern = / +([.,:;?!)%])/g
const spaceBeforePunctuationPattern2 = / +(")(?=[,.;!?])/g
const noSpaceAfterPunctuationPattern = /([;!,]+(?!\n|$))(?! )/g
const noSpaceAfterPunctuationPattern2 = /(?<=[а-яєіїґёa-z])([.,)\]]+)(?![^(a-zа-яєіїґёa\s\n,\d'." ]| |$)/gi
const noSpaceAfterPunctuationPattern3 = /(?<=[^А-ЯЄІЇҐЁ][А-ЯЄІЇҐЁ])(\.)(?=[А-ЯЄІЇҐЁ][^А-ЯЄІЇҐЁ])/g
const noSpaceAfterPunctuationPattern4 = /(?<=[БВГҐДЖЗКЛМНПРСТФХЦЧШЩ])(\.)(?![\s\n,\d"'. ])/g
const noSpaceAfterPunctuationPattern5 = /(?<=\n)(-)(?=[а-яєіїґ])/g
const removeSpaceAfterPunctuationPattern = /([[(])\s+/g
const removeSpaceAfterPunctuationPattern2 = /([#№])\s+(?=\d)/g
const noSpacesBeforePunctuationPattern = /([^ ])((?<!\])[(#№])/g
const spaceBeforeQuotes = / (",)/g
const spaceAfterQuotes = /(:") /g

export const fixSpacesNearPunctuations = (s: string): string => {
  s = s.replace(spaceBeforePunctuationPattern, '$1')
  s = s.replace(spaceBeforePunctuationPattern2, '$1')
  s = s.replace(noSpaceAfterPunctuationPattern, '$1 ')
  s = s.replace(noSpaceAfterPunctuationPattern2, '$1 ')
  s = s.replace(noSpaceAfterPunctuationPattern3, '$1 ')
  s = s.replace(noSpaceAfterPunctuationPattern4, '$1 ')
  s = s.replace(noSpaceAfterPunctuationPattern5, '$1 ')
  s = s.replace(removeSpaceAfterPunctuationPattern, '$1')
  s = s.replace(removeSpaceAfterPunctuationPattern2, '$1')
  s = s.replace(noSpacesBeforePunctuationPattern, '$1 $2')
  s = s.replace(spaceBeforeQuotes, '$1')
  s = s.replace(spaceAfterQuotes, '$1')
  return s
}
