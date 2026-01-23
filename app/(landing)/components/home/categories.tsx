import { getImageUrl } from "@/app/lib/api";
import { Category } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type TCategoriesProps = {
  categories: Category[];
}

export default function Categories({categories}: TCategoriesProps) {

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
        {categories.map((category) => (
          <div
            className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full h-40 aspect-square flex justify-center"
            key={category._id}
          >
            <div className="flex flex-col justify-center self-center items-center">
              <Image
                src={getImageUrl(category.imageUrl)}
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
