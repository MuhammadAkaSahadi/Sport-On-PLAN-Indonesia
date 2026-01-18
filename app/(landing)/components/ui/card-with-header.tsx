type TCardWithHeaderProps = {
  title: string;
  children: React.ReactNode;
};

export default function CardWithHeader({
  title,
  children,
}: TCardWithHeaderProps) {
  return (
    <div className="bg-white sm:w-113 p-4">
      <div className="pb-3 border-b border-gray-200">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
      {children}
    </div>
  );
}
