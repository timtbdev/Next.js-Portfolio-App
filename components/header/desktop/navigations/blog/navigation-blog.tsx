import categories from "@/config/category";
import { CategoryType } from "@/types";
import { memo } from "react";
import CategoryLink from "./category-link";
import MoreCategoryLink from "./more-category-link";

interface Props {
  category: CategoryType;
  className?: string;
}

const CategoryBackground = ({ category }: Props) => {
  const Background = category.background;
  return Background ? <Background /> : null;
};

const NavigationBlog = memo(() => {
  return (
    <div
      className="divide-border grid w-[1024px] grid-cols-[70%_30%] divide-x"
      role="navigation"
      aria-label="Blog categories"
    >
      <div className="grid grid-cols-2 gap-4 p-4">
        {categories
          .filter((category) => category.weight === 1)
          .map((category) => (
            <CategoryLink
              key={category.slug}
              href={
                category.slug === "/blog"
                  ? category.slug
                  : `/blog/category/${category.slug}`
              }
              title={category.name}
              description={category.description}
              icon={category.bigIcon}
              weight={category.weight}
            />
          ))}

        <div className="flex flex-col gap-4">
          <div className="grid grow grid-rows-3 gap-4">
            {categories
              .filter((category) => category.weight === 2)
              .map((category) => (
                <CategoryLink
                  key={category.slug}
                  href={
                    category.slug === "/blog"
                      ? category.slug
                      : `/blog/category/${category.slug}`
                  }
                  title={category.name}
                  description={category.description}
                  icon={category.icon}
                  weight={category.weight}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <p className="text-foreground/50 mb-2 text-xs uppercase">
          More categories
        </p>
        <div className="grid grid-cols-1 gap-2">
          {categories
            .filter((category) => category.weight === 3)
            .map((category) => {
              const Icon = category.icon;
              return Icon ? (
                <MoreCategoryLink
                  key={category.slug}
                  href={
                    category.slug === "/blog"
                      ? category.slug
                      : `/blog/category/${category.slug}`
                  }
                  title={category.name}
                  description={category.description}
                  icon={
                    <Icon className="text-foreground group-hover:text-accent-foreground size-4" />
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
