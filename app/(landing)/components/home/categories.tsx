import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Categories() {
  const categoryList = [
    {
      name: "Running",
      imgUrl: "category-running.png",
    },
    {
      name: "Tennis",
      imgUrl: "category-tennis.png",
    },
    {
      name: "Basketball",
      imgUrl: "category-basketball.png",
    },
    {
      name: "Football",
      imgUrl: "category-football.png",
    },
    {
      name: "Badminton",
      imgUrl: "category-badminton.png",
    },
    {
      name: "Swimming",
      imgUrl: "category-swimming.png",
    },
  ];

  return (
    <section id="category-section" className="container mx-auto py-20">
      <div className="relative flex justify-between">
        <h2 className="font-bold text-[24px]">Browse By Categories</h2>
        <Link href="#" className="flex text-primary gap-2 font-medium">
          <span className="self-center">See All Categories</span>
          <FiArrowRight className="self-center" />
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-12 mt-8">
        {categoryList.map((category, index) => (
          <div
            className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full h-40 aspect-square flex justify-center"
            key={index}
          >
            <div className="flex flex-col justify-center self-center items-center">
              <Image
                src={`/images/categories/${category.imgUrl}`}
                width={76}
                height={76}
                alt={category.name}
              />
              <div className="text-[20px] text-primary mt-3">
                {category.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
