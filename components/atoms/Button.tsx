interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
  }
  
  export default function Button({ children, className = '', ...rest }: ButtonProps) {
    return (
      <button
        className={`bg-lime-500 hover:bg-green-600 text-white text-sm font-bold py-2 px-4 rounded-md w-full ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
  
