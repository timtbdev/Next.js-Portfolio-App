import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { MusicIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Spotify } from "react-spotify-embed";

interface Props {
  className?: string;
  title?: string;
  description?: string;
  playlistUrl?: string;
}

const Playlist = ({
  className,
  title = "My Daily Running Playlist",
  description = "I run in the morning, and this is what I listen to.",
  playlistUrl = "https://open.spotify.com/playlist/28OAQven2H4fLmFsNEeVcY?si=z7Bj-mocSuGi2vd2CN0sFQ",
}: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "group bg-background animate-pulse rounded-full",
          className,
        )}
        aria-label="Loading theme"
      >
        <div className="bg-accent size-5 rounded-full" />
      </Button>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "group hover:bg-accent/50 rounded-full transition-colors",
            className,
          )}
          aria-label="Open playlist"
        >
          <MusicIcon className="text-foreground group-hover:text-accent-foreground size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          </div>
          {description && (
            <DialogDescription className="text-md">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="relative mt-4">
          {isLoading && (
            <div className="bg-background/80 absolute inset-0 flex items-center justify-center">
              <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent" />
            </div>
          )}
          <Spotify
            className="w-full"
            link={playlistUrl}
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Playlist;
