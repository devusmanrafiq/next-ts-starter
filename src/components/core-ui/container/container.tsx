import twc from 'tw-classnames';

function Container({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <section className={twc('container-max px-8 sm:px-12 lg:px-24 2xl:px-64', className)}>{children}</section>;
}

export default Container;
