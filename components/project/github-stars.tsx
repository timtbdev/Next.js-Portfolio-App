"use client";

import { getGitHubStars } from "@/actions/github";
import { Skeleton } from "@/components/ui/skeleton";
import AndroidIcon from "@/icons/android-icon";
import { Separator } from "@radix-ui/react-separator";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { FC, Suspense } from "react";
import { FaGithub } from "react-icons/fa";
import { RiNextjsFill as NextJsIcon } from "react-icons/ri";

interface Props {
  url: string;
  repo: string;
  className?: string;
  category?: string;
}

const GithubStars: FC<Props> = ({ repo, url, className, category }) => {
  const { data: stars, error } = useQuery({
    queryKey: ["github-stars", repo],
    queryFn: async () => {
      const data = await getGitHubStars(repo);
      return data.stars;
    },
    enabled: !!repo,
  });

  return (
    <div
      className="group flex flex-col items-center justify-end p-4"
      role="region"
      aria-label="GitHub repository information"
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${repo} on GitHub`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 278 115"
          className="h-28 [mask-image:linear-gradient(black_60%,transparent)]"
          aria-hidden="true"
        >
          <path
            fill="#F3F4F6"
            d="M43.645 94.298a.93.93 0 00-.93-.314l-5.633 1.323-4.283-3.892c-.523-.476-1.493-.094-1.551.61l-.483 5.766-5.024 2.871a.93.93 0 00.101 1.663l5.335 2.241 1.176 5.665a.931.931 0 001.614.419l3.78-4.382 5.752.632a.928.928 0 00.896-1.406l-3-4.949 2.378-5.275a.93.93 0 00-.13-.973h.002zM245.335 83.358a.93.93 0 00-.783-.592l-5.763-.524-2.834-5.046c-.345-.617-1.386-.561-1.664.089l-2.28 5.318-5.674 1.136a.929.929 0 00-.429 1.61l4.353 3.811-.674 5.748a.932.932 0 00.418.888.933.933 0 00.981.018l4.971-2.962 5.258 2.416a.933.933 0 00.974-.123.93.93 0 00.32-.928l-1.282-5.642 3.922-4.254a.928.928 0 00.184-.964h.002zM179.794 54.486a.747.747 0 00-.546-.568l-4.507-1.145-1.612-4.363c-.196-.533-1.029-.62-1.332-.14l-2.482 3.932-4.646.185a.748.748 0 00-.544 1.224l2.973 3.575-1.261 4.476a.746.746 0 00.995.897l4.319-1.724 3.868 2.583a.742.742 0 00.788.025.745.745 0 00.372-.696l-.304-4.64 3.65-2.88a.746.746 0 00.268-.742l.001.001zM63.153 50.99a.547.547 0 00-.4-.415l-3.299-.838-1.18-3.194c-.143-.39-.753-.454-.975-.102l-1.816 2.878-3.401.135a.547.547 0 00-.399.896l2.176 2.617-.922 3.276a.547.547 0 00.728.657l3.162-1.262 2.83 1.89a.542.542 0 00.578.02.546.546 0 00.272-.51l-.223-3.397 2.672-2.108a.547.547 0 00.196-.543zM276.153 40.212a.547.547 0 00-.4-.416l-3.299-.838-1.179-3.194c-.144-.39-.754-.454-.976-.102l-1.816 2.878-3.401.135a.547.547 0 00-.399.896l2.176 2.617-.922 3.276a.545.545 0 00.728.656l3.162-1.261 2.831 1.89a.547.547 0 00.849-.49l-.223-3.397 2.672-2.108a.546.546 0 00.196-.543h.001zM118.612 86.789a.747.747 0 00-.736-.281l-4.565.886-3.318-3.26c-.405-.398-1.196-.122-1.265.442l-.568 4.615-4.125 2.148a.746.746 0 00.03 1.339l4.213 1.966.768 4.587a.749.749 0 001.283.386l3.172-3.4 4.6.687a.748.748 0 00.763-1.101l-2.254-4.068 2.075-4.161a.75.75 0 00-.074-.786h.001z"
          ></path>
          <g clipPath="url(#clip0_2_53)">
            <g className="transition-transform duration-300 group-hover:-translate-y-2">
              <path
                fill="#FCD34D"
                d="M157.474 52.227a2.126 2.126 0 00-1.714-1.445l-13.09-1.9-5.854-11.864c-.714-1.45-3.097-1.45-3.811 0l-5.854 11.86-13.09 1.901a2.126 2.126 0 00-1.175 3.624l9.471 9.231-2.238 13.037c-.136.798.19 1.603.844 2.08a2.137 2.137 0 002.239.16l11.707-6.156 11.707 6.157a2.13 2.13 0 002.239-.162c.654-.476.983-1.28.844-2.08l-2.238-13.036 9.472-9.23c.58-.565.787-1.412.538-2.18l.003.003z"
              ></path>
              <path
                stroke="#F59E0B"
                strokeOpacity="0.2"
                strokeWidth="1.407"
                d="M156.804 52.44l-.002.002a1.421 1.421 0 01-.359 1.457h-.001l-9.472 9.231-.265.259.063.364 2.238 13.037h0a1.416 1.416 0 01-1.401 1.662c-.229 0-.453-.053-.66-.163h-.001l-11.707-6.157-.328-.172-.327.172-11.707 6.156s0 0 0 0c-.477.25-1.06.209-1.499-.107a1.422 1.422 0 01-.563-1.392s0 0 0 0l2.238-13.036.062-.364-.265-.259-9.471-9.23-.001-.001a1.422 1.422 0 01.787-2.424s0 0 0 0l13.09-1.9.366-.054.163-.331 5.854-11.86v-.001c.211-.428.698-.696 1.275-.696.576 0 1.063.268 1.274.696h0l5.854 11.863.164.332.366.053 13.089 1.901h.001c.532.078.977.452 1.145.963z"
              ></path>
            </g>
            <g
              filter="url(#filter0_d_2_53)"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-2"
            >
              <path
                fill="#FCD34D"
                d="M204.253 70.898a1.642 1.642 0 00-1.111-1.33l-9.707-3.203-2.863-9.814c-.348-1.2-2.162-1.52-2.9-.511l-6.046 8.24-10.217-.31a1.643 1.643 0 00-1.381 2.6l5.969 8.297-3.452 9.62a1.643 1.643 0 00.363 1.696 1.651 1.651 0 001.682.424l9.736-3.115 8.083 6.257a1.643 1.643 0 002.647-1.292l.046-10.222 8.447-5.754a1.64 1.64 0 00.702-1.586l.002.003z"
              ></path>
              <path
                stroke="#F59E0B"
                strokeOpacity="0.2"
                strokeWidth="1.407"
                d="M203.556 70.993h-.002a.938.938 0 01-.4.906l-.001.001-8.447 5.754-.306.208-.002.37-.046 10.222h0a.934.934 0 01-1.101.92.925.925 0 01-.411-.181h0l-8.084-6.257-.292-.227-.353.113-9.734 3.114h-.001a.94.94 0 01-1.169-1.212s0 0 0 0l3.452-9.62.125-.348-.216-.3-5.969-8.296-.001-.001a.938.938 0 01.79-1.485s0 0 0 0l10.217.31.369.01.219-.298 6.046-8.24h.001c.173-.237.512-.365.906-.296.394.07.669.306.751.587v.001l2.863 9.814.104.355.351.116 9.707 3.203s0 0 0 0a.94.94 0 01.634.757z"
              ></path>
            </g>
            <g
              filter="url(#filter1_d_2_53)"
              className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-2"
            >
              <path
                fill="#FCD34D"
                d="M99.793 64.177a1.672 1.672 0 00-1.525-.886l-10.402.316-6.156-8.392c-.751-1.026-2.598-.7-2.953.52l-2.915 9.99-9.882 3.261a1.672 1.672 0 00-.416 2.968l8.6 5.859.046 10.406c.004.637.367 1.216.939 1.496a1.68 1.68 0 001.756-.181l8.23-6.37 9.912 3.171a1.674 1.674 0 001.712-.431 1.669 1.669 0 00.37-1.726l-3.515-9.795 6.077-8.446c.373-.516.418-1.201.12-1.762l.002.002z"
              ></path>
              <path
                stroke="#F59E0B"
                strokeOpacity="0.2"
                strokeWidth="1.407"
                d="M99.671 65.937l-6.077 8.446 3.515 9.795a1.669 1.669 0 01-1.283 2.21 1.661 1.661 0 01-.8-.053l-9.911-3.17-8.23 6.369m22.786-23.597l-25.48 22.282c.003.637.366 1.216.938 1.496a1.68 1.68 0 001.756-.181m22.786-23.597a1.67 1.67 0 00.194-1.604l-.194 1.604zM76.885 89.534l-.43-.557m.43.557l-.43-.556h0m0 0l8.23-6.37.292-.226.352.112 9.912 3.171h0a.97.97 0 00.99-.25m-19.775 3.562a.97.97 0 01-1.562-.762s0 0 0 0l-.047-10.406-.001-.37-.306-.208-8.6-5.858h-.001a.968.968 0 01.241-1.719s0 0 0 0l9.883-3.261.35-.116.105-.355 2.915-9.99h0c.085-.292.37-.535.774-.607.405-.071.756.06.935.305v.001l6.157 8.392.219.298.37-.011 10.401-.315s0 0 0 0a.968.968 0 01.882.51h-.001a.968.968 0 01-.069 1.02v.001l-6.078 8.446-.216.3.125.349 3.515 9.794v.001a.965.965 0 01-.214 1m0 0l.506.488-.506-.489s0 0 0 0zM65.544 71.954l8.6 5.859-8.6-5.859z"
              ></path>
            </g>
          </g>
          <path
            fill="#F3F4F6"
            d="M22.645 48.298a.93.93 0 00-.93-.314l-5.633 1.323-4.283-3.892c-.523-.476-1.493-.094-1.551.61l-.483 5.766-5.025 2.87a.93.93 0 00.102 1.664l5.335 2.241 1.177 5.665a.93.93 0 001.613.419l3.78-4.382 5.752.632a.93.93 0 00.896-1.406l-3-4.949 2.378-5.275a.93.93 0 00-.13-.973h.002zM215.708 37.32a.93.93 0 00-.564-.802l-5.327-2.26-1.158-5.67c-.141-.693-1.149-.958-1.612-.424l-3.796 4.367-5.749-.65a.93.93 0 00-.901 1.402l2.981 4.958-2.396 5.267a.93.93 0 001.055 1.291l5.638-1.303 4.268 3.907a.93.93 0 001.554-.606l.502-5.764 5.034-2.852a.928.928 0 00.47-.862l.001.001zM64.276 18.888a.93.93 0 00-.564-.802l-5.327-2.26-1.157-5.67c-.141-.694-1.15-.959-1.613-.424l-3.795 4.367-5.75-.652a.93.93 0 00-.9 1.403l2.98 4.959-2.396 5.266a.93.93 0 001.055 1.291l5.638-1.303 4.268 3.907a.931.931 0 001.553-.605l.504-5.765 5.034-2.852a.93.93 0 00.47-.862v.002zM159.97 8.486a.747.747 0 00-.546-.568l-4.507-1.145-1.612-4.363c-.196-.533-1.029-.62-1.332-.14l-2.482 3.933-4.647.184a.747.747 0 00-.544 1.224l2.973 3.575-1.261 4.476a.75.75 0 00.219.758c.212.19.514.243.777.138l4.319-1.723 3.868 2.583a.742.742 0 00.788.025.745.745 0 00.372-.696l-.305-4.64 3.651-2.88a.746.746 0 00.268-.742l.001.001zM112.612 25.155a.747.747 0 00-.736-.281l-4.565.886-3.318-3.26c-.405-.398-1.196-.122-1.265.442l-.568 4.615-4.125 2.148a.747.747 0 00.03 1.34l4.213 1.965.768 4.587a.749.749 0 001.283.386l3.172-3.4 4.6.687a.748.748 0 00.763-1.101L110.61 30.1l2.075-4.161a.75.75 0 00-.074-.786h.001z"
          ></path>
          <defs>
            <filter
              id="filter0_d_2_53"
              width="68.311"
              height="68.416"
              x="152.837"
              y="48.557"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></feColorMatrix>
              <feOffset dy="10"></feOffset>
              <feGaussianBlur stdDeviation="8.441"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2_53"
              ></feBlend>
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_2_53"
                result="shape"
              ></feBlend>
            </filter>
            <filter
              id="filter1_d_2_53"
              width="68.936"
              height="69.042"
              x="47.931"
              y="47.721"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></feColorMatrix>
              <feOffset dy="10"></feOffset>
              <feGaussianBlur stdDeviation="8.441"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2_53"
              ></feBlend>
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_2_53"
                result="shape"
              ></feBlend>
            </filter>
            <clipPath id="clip0_2_53">
              <path
                fill="#fff"
                d="M0 0H149.139V81H0z"
                transform="translate(59.93 21)"
              ></path>
            </clipPath>
          </defs>
        </svg>
      </Link>
      <Suspense fallback={<Skeleton className="h-4 w-20" />}>
        <div
          className="flex items-center gap-x-2"
          role="status"
          aria-live="polite"
        >
          <span
            className="inline-flex items-center gap-x-1 text-sm font-medium text-gray-600"
            aria-label={`${stars} ${stars === 1 ? "Star" : "Stars"} on GitHub`}
          >
            <FaGithub className="size-4" aria-hidden="true" />
            {stars} {stars === 1 ? "Star" : "Stars"}
          </span>
          <Separator
            orientation="vertical"
            className="h-4 w-[1px] bg-gray-600"
            aria-hidden="true"
          />
          {category === "Next.js" && (
            <span
              className="inline-flex items-center gap-x-1 text-sm font-medium text-gray-600"
              aria-label="Next.js project"
            >
              <NextJsIcon className="size-4" aria-hidden="true" /> {category}
            </span>
          )}
          {category === "Android" && (
            <span
              className="inline-flex items-center gap-x-1 text-sm font-medium text-gray-600"
              aria-label="Android project"
            >
              <AndroidIcon className="size-4" aria-hidden="true" /> {category}
            </span>
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default GithubStars;
