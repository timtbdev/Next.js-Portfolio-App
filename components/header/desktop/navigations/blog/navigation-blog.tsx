import categories from "@/config/category";
import { CategoryType } from "@/types";
import { memo } from "react";
import { RiTailwindCssFill as TailwindCssIcon } from "react-icons/ri";
import { SiShadcnui as ShadcnUiIcon } from "react-icons/si";
import CategoryLink from "./category-link";
import MoreCategoryLink from "./more-category-link";

interface CategoryBackgroundProps {
  category: CategoryType;
}

const CategoryBackground = ({ category }: CategoryBackgroundProps) => {
  const Background = category.background;
  return Background ? <Background /> : null;
};

const NavigationBlog = memo(() => {
  return (
    <div
      className="grid w-[1024px] grid-cols-[70%_30%] divide-x divide-neutral-200"
      role="navigation"
      aria-label="Blog categories"
    >
      <div className="grid grid-cols-2 gap-4 p-4">
        <CategoryLink
          href={`/blog/category/${categories[0].slug}`}
          title={categories[0].name}
          description={categories[0].description}
          background={<CategoryBackground category={categories[0]} />}
          gradientColor={categories[0].gradientColor}
        />

        <div className="flex flex-col gap-4">
          <CategoryLink
            href={`/blog/category/${categories[1].slug}`}
            title={categories[1].name}
            description={categories[1].description}
            background={<CategoryBackground category={categories[1]} />}
            gradientColor={categories[1].gradientColor}
            className="h-56"
          />
          <div className="grid grow grid-rows-2 gap-4">
            <CategoryLink
              href={`/blog/category/${categories[2].slug}`}
              title={categories[2].name}
              description={categories[2].description}
              icon={<TailwindCssIcon className="size-6" />}
              gradientColor={categories[2].gradientColor}
            />
            <CategoryLink
              href={`/blog/category/${categories[3].slug}`}
              title={categories[3].name}
              description={categories[3].description}
              icon={<ShadcnUiIcon className="size-4" />}
              gradientColor={categories[3].gradientColor}
            />
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <p className="mb-2 text-xs text-neutral-500 uppercase">
          More categories
        </p>
        <div className="grid grid-cols-1 gap-2">
          {categories.slice(4).map((category) => {
            const Icon = category.icon;
            return Icon ? (
              <MoreCategoryLink
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                title={category.name}
                description={category.description}
                icon={
                  <Icon className="size-4 text-neutral-700 group-hover:text-[var(--hover-color)]" />
                }
              />
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
});

NavigationBlog.displayName = "NavigationBlog";

export default NavigationBlog;
