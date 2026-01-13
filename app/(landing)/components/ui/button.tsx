type TButtonProps = {
  // Membuat tipe props untuk komponen Button custom
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "dark" | "ghost"; // Disetting opsional, krn sudah ada default value nya "primary"
  size?: "normal" | "small";
} & React.ButtonHTMLAttributes<HTMLButtonElement>; // Menggabungkan tipe props khusus dngn atribut button HTML yg dipunya React

export default function Button({
  children,
  className,
  variant = "primary", // Default value "primary"
  size = "normal",
  ...props // Untuk menggunakan atribut button HTML yg dipunya React
}: TButtonProps) {
  const baseStyles =
    "inline-flex gap-2 duration-300 justify-center items-center cursor-pointer hover:scale-105";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/85",
    dark: "bg-dark text-white hover:bg-dark/85",
    ghost: "bg-transparent hover:bg-gray-100 text-dark",
  };

  const sizes = {
    normal: "py-4 px-9",
    small: "py-[10px] px-7",
  };

  return (
    <button
      // ${className} untuk custom className tambahan jika ada
      // [variant] dan [size] mengizinkan developer untuk memilih style berdasarkan props variant dan size yang tersedia di const variants dan sizes
      className={`${className} ${baseStyles} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
}
