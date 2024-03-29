import "./hamburger-animated.styles.css";
import twc from "tw-classnames";

function HamburgerAnimatedIcon({ isActive = false }: { isActive: boolean }) {
  return (
    <div className={twc("hamburger", isActive && "is-active")} id="hamburger-1">
      <span className="line" />
      <span className="line" />
      <span className="line" />
    </div>
  );
}

export default HamburgerAnimatedIcon;
