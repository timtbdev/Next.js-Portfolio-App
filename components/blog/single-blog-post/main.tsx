import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import readingTime from "reading-time";

interface Props {
  post: any;
  className?: string;
}

const SingleBlogPost: FC<Props> = ({ post, className }) => {
  const slug = post._meta.path.replace(/\.mdx?$/, "");
  const { title, description, image, author, authorAvatar, date } = post;
  const readTime = readingTime(post.content, { wordsPerMinute: 100 }).minutes;
  const url = `/blog/post/${slug}`;
  return (
    <div className="relative flex flex-col rounded-lg border border-neutral-200 transition-all hover:shadow-lg">
      <Image
        alt={title}
        width={2400}
        height={1260}
        decoding="async"
        className="blur-0 aspect-[1200/630] rounded-t-xl object-cover"
        src={image}
        style={{ color: "transparent" }}
      />
      <Link href={url}>
        <span className="absolute inset-0 z-10"></span>
        <span className="sr-only">{title}</span>
      </Link>
      <div className="flex flex-1 flex-col justify-between rounded-b-lg bg-white p-6">
        <div>
          <h2 className="font-display line-clamp-2 text-lg font-bold text-black">
            {title}
          </h2>
          <p className="mt-2 line-clamp-2 text-sm text-gray-600">
            {description}
          </p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <div className="flex items-center -space-x-2">
            <Image
              alt={author}
              loading="lazy"
              width={32}
              height={32}
              decoding="async"
              className="rounded-full"
              src={authorAvatar}
            />
          </div>
          <time dateTime={date} className="text-sm text-gray-600">
            {format(parseISO(date), "MMM dd, yyyy")}
          </time>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPost;
