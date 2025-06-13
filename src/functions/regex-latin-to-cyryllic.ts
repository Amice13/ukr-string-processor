const latToCyrReplacements = [
  { pattern: /shch/ig, letter: 'щ' },
  { pattern: /zgh/ig, letter: 'зг' },
  { pattern: /kh/ig, letter: '(?:х|кг)' },
  { pattern: /kh/ig, letter: '(?:х|кг)' },
  { pattern: /ts/ig, letter: '(?:ц|тс)' },
  { pattern: /ch/ig, letter: 'ч' },
  { pattern: /sh/ig, letter: '(?:ш|сг)' },
  { pattern: /^yu/ig, letter: '(?:ю|йу|иу)' },
  { pattern: /iu/ig, letter: '(?:ю|іу|їу)' },
  { pattern: /^ya/ig, letter: '(?:я|йа|иа)' },
  { pattern: /ia/ig, letter: '(?:я|іа|їа)' },
  { pattern: /^ye/ig, letter: '(?:є|йе|іе)' },
  { pattern: /ie/ig, letter: '(?:є|йе|іе|їе)' },
  { pattern: /zh/ig, letter: '(?:ж|зг)' },
  { pattern: /^yi/ig, letter: 'ї' },
  { pattern: /y/ig, letter: '[ий]' },
  { pattern: /i/ig, letter: '[іїй]' },
  { pattern: /a/ig, letter: 'а' },
  { pattern: /b/ig, letter: 'б' },
  { pattern: /v/ig, letter: 'в' },
  { pattern: /h/ig, letter: 'г' },
  { pattern: /g/ig, letter: 'ґ' },
  { pattern: /d/ig, letter: 'д' },
  { pattern: /e/ig, letter: 'е' },
  { pattern: /z/ig, letter: 'з' },
  { pattern: /k/ig, letter: 'к' },
  { pattern: /l/ig, letter: 'л' },
  { pattern: /m/ig, letter: 'м' },
  { pattern: /n/ig, letter: 'н' },
  { pattern: /o/ig, letter: 'о' },
  { pattern: /p/ig, letter: 'п' },
  { pattern: /r/ig, letter: 'р' },
  { pattern: /s/ig, letter: 'с' },
  { pattern: /t/ig, letter: 'т' },
  { pattern: /u/ig, letter: 'у' },
  { pattern: /f/ig, letter: 'ф' },
  { pattern: /р\[іїй\]зб/ig, letter: 'різь?б' }, // Exceptions різьбяр
  { pattern: /([дтзсцлн])$/ig, letter: '$1ь?' }, // In the end of the word after д, т, з, с, ц, л, н
  { pattern: /([дтзсцлн])(с)(?=[я])/ig, letter: '$1ь?$2?' }, // In verbs before ся
  { pattern: /([дтзсцлн])([дтзсцлнр])/ig, letter: '$1ь?$2?' }, // In the middle of a word, the softness of the consonants д, т, з, с, ц, л, н is indicated by a soft sign only before hard non-sibilant consonants.
  { pattern: /л([сцчшщ])/ig, letter: 'ль?$1' }, // Exceptions гуцульський, стільчик, etc + After л before letters denoting soft consonants + After ський
  { pattern: /(н)([чш])/ig, letter: '$1ь?$1' }, // Exceptions няньчити, женьшень, etc
  { pattern: /^тм/ig, letter: 'ть?м' }, // Exceptions тьмяний
  { pattern: /([дзртцс]|дз)о/ig, letter: '$1ь?о' }, // After dental consonants in the middle of a syllable before о + р before о
  { pattern: /([дзртцслнм])(ї|\[[іи]|\(\?:[яює])/ig, letter: '$1ь?$2' } // In foreign words, the soft sign indicates the softness of dental consonants also before э, я, ю, э, э.
]

export const regexLatinToCyryllic = (s: string): RegExp => {
  for (const { pattern, letter } of latToCyrReplacements) {
    s = s.replace(pattern, letter)
  }
  return new RegExp(s, 'gi')
}
