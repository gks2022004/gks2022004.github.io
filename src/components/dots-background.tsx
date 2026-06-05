import BerserkMark from "@/components/berserk-mark";

export default function DotsBackground() {
  return (
    <div aria-hidden className="ink-bg">
      <div className="ink-bg__glow" />
      <BerserkMark />
      <div className="ink-bg__hatch" />
      <div className="ink-bg__vignette" />
      <div className="ink-bg__grain" />
    </div>
  );
}
