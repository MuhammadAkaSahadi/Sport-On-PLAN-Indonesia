type TCardWithHeaderProps = {
  title: string;
  children: React.ReactNode;
};

export default function CardWithHeader({
  title,
  children,
}: TCardWithHeaderProps) {
  return (
    <div className="">
      <div className="">
        <h2 className="">{title}</h2>
      </div>
      {children}
    </div>
  );
}
