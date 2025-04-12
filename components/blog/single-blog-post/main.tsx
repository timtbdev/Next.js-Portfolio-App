import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Card from "@/components/ui/card";
import { format, parseISO } from "date-fns";
import { ClockIcon, UserRoundIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import readingTime from "reading-time";

interface BlogPost {
  _meta: {
    path: string;
  };
  title: string;
  description: string;
  image: string;
  author: string;
  authorAvatar: string;
  date: string;
  content: string;
}

interface Props {
  post: BlogPost;
  className?: string;
}

const SingleBlogPost: FC<Props> = ({ post, className }) => {
  const slug = post._meta.path.replace(/\.mdx?$/, "");
  const { title, description, image, author, authorAvatar, date } = post;
  const readTime = Math.ceil(
    readingTime(post.content, { wordsPerMinute: 100 }).minutes,
  );
  const url = `/blog/post/${slug}`;

  return (
    <Card
      className={`group relative flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${className}`}
    >
      <div className="relative aspect-[1200/630] overflow-hidden md:rounded-t-xl">
        <Image
          alt={title}
          width={2400}
          height={1260}
          decoding="async"
          className="blur-0 object-cover transition-transform duration-300 hover:scale-105"
          src={image}
          style={{ color: "transparent" }}
          loading="lazy"
        />
      </div>
      <Link href={url} className="group">
        <span className="absolute inset-0 z-10" aria-hidden="true" />
        <span className="sr-only">Read more about {title}</span>
      </Link>
      <div className="bg-background flex flex-1 flex-col justify-between rounded-b-lg p-6">
        <div>
          <h2 className="font-display text-accent-foreground group-hover:text-primary line-clamp-2 text-lg font-bold transition-colors">
            {title}
          </h2>
          <p className="text-foreground mt-2 line-clamp-2 text-sm">
            {description}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center -space-x-2">
              <Avatar className="size-6">
                <AvatarImage src={authorAvatar} alt={author} />
                <AvatarFallback>
                  <UserRoundIcon className="text-muted-foreground size-4" />
                </AvatarFallback>
              </Avatar>
            </div>
            <time dateTime={date} className="text-muted-foreground text-sm">
              {format(parseISO(date), "MMM dd, yyyy")}
            </time>
          </div>
          <div className="text-muted-foreground flex items-center text-sm">
            <ClockIcon className="mr-1 size-4" />
            {readTime} min read
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SingleBlogPost;
