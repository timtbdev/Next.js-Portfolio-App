import { Separator } from "@radix-ui/react-separator";
import { format, parseISO } from "date-fns";
import React, { FC } from "react";
import BackButton from "./back-button";
import InfoBarDetailDesktop from "./info-bar/info-bar-desktop";
import InfoBarDetailMobile from "./info-bar/info-bar-mobile";

interface Props {
  title: string;
  description: string;
  date: string;
  authorImage: string;
  authorName: string;
  category: string;
  readTime: number;
}

const BlogPostDetailHeading: FC<Props> = ({
  title,
  description,
  date,
  authorImage,
  authorName,
  category,
  readTime,
}) => {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-10 sm:px-4 md:px-0">
      <div className="flex items-center space-x-4">
        <BackButton />
      </div>
      <h1 className="font-display mt-4 mb-4 max-w-3xl text-left text-4xl font-medium text-ellipsis text-neutral-900 sm:mb-0 sm:text-4xl sm:leading-[1.25]">
        {title}
      </h1>
      <Separator
        orientation="horizontal"
        className="my-2 hidden h-[1px] w-full max-w-3xl bg-gray-200 sm:block"
      />
      <InfoBarDetailDesktop
        authorImage={authorImage}
        authorName={authorName}
        date={date}
        category={category}
        readTime={readTime}
        className="hidden sm:flex"
      />
      <InfoBarDetailMobile
        authorImage={authorImage}
        authorName={authorName}
        date={date}
        category={category}
        readTime={readTime}
        className="sm:hidden"
      />
      <p className="text-md line-clamp-3 max-w-3xl py-4 text-gray-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
};

export default BlogPostDetailHeading;
