import twc from 'tw-classnames';

import './hamburger-animated.styles.css';

function HamburgerAnimatedIcon({ isActive = false }: { isActive: boolean }) {
  return (
    <div className={twc('hamburger', isActive && 'is-active')} id='hamburger-1'>
      <span className='line' />
      <span className='line' />
      <span className='line' />
    </div>
  );
}

export default HamburgerAnimatedIcon;
