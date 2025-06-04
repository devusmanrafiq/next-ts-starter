import twc from 'tw-classnames';

function Container({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <section className={twc('mx-auto max-w-screen-4xl p-5', className)}>{children}</section>;
}

export default Container;
