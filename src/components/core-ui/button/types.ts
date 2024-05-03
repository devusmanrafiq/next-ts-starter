export interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'default' | 'text';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  wrapperClassName?: string;
  loading?: boolean;
}
