import { DATA } from "@/data/resume";
import type { CSSProperties } from "react";

const LATIN_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const DEVANAGARI_LETTERS =
  "\u0905\u0906\u0907\u0908\u0909\u090A\u090B\u090F\u0910\u0913\u0914\u0915\u0916\u0917\u0918\u091A\u091B\u091C\u091D\u091F\u0920\u0921\u0922\u0924\u0925\u0926\u0927\u0928\u092A\u092B\u092C\u092D\u092E\u092F\u0930\u0932\u0935\u0936\u0937\u0938\u0939".split(
    ""
  );
const HIRAGANA_LETTERS =
  "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3092\u3093".split(
    ""
  );
const KATAKANA_LETTERS =
  "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F2\u30F3".split(
    ""
  );
const COMMON_KANJI =
  "\u65E5\u672C\u8A9E\u6771\u4EAC\u5927\u5B66\u5929\u5730\u5C71\u5DDD\u98A8\u706B\u6C34\u6728\u91D1\u571F".split(
    ""
  );

const DEFAULT_LETTERS = [
  ...LATIN_LETTERS,
  ...DEVANAGARI_LETTERS,
  ...HIRAGANA_LETTERS,
  ...KATAKANA_LETTERS,
  ...COMMON_KANJI,
];
const LETTER_COUNT = 130;

type LetterStyle = CSSProperties & {
  "--drift": string;
};

function getLetterPool() {
  const letters = `${DATA.name}${DATA.description}`
    .toUpperCase()
    .match(/[A-Z]/g);

  const latinFromProfile = letters ? Array.from(new Set(letters)) : [];

  return [...latinFromProfile, ...DEFAULT_LETTERS];
}

export default function FallingLettersBackground() {
  const pool = getLetterPool();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {Array.from({ length: LETTER_COUNT }, (_, index) => {
        const left = (index * 8.2 + (index % 4) * 3.6) % 100;
        const drift = ((index % 5) - 2) * 20;
        const duration = 6 + (index % 7) * 0.95;
        const delay = (index * 0.35) % 10;
        const size = 0.75 + (index % 4) * 0.22;
        const opacity = 0.12 + (index % 5) * 0.04;
        const style: LetterStyle = {
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `-${delay}s`,
          fontSize: `${size}rem`,
          opacity,
          "--drift": `${drift}px`,
        };

        return (
          <span
            key={`falling-letter-${index}`}
            className="falling-letter absolute select-none font-sans text-foreground"
            style={style}
          >
            {pool[index % pool.length]}
          </span>
        );
      })}
    </div>
  );
}
