/* eslint-disable @next/next/no-img-element */
export default function BerserkMark() {
  return (
    <div aria-hidden className="berserk-mark">
      {/* black brand for light mode */}
      <img
        src="/beserk-black.png"
        alt=""
        className="berserk-mark__img berserk-mark__img--light"
      />
      {/* red brand for dark mode */}
      <img
        src="/Berserk-Logo.png"
        alt=""
        className="berserk-mark__img berserk-mark__img--dark"
      />
    </div>
  );
}
