import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

const SearchButton = () => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="group bg-background hover:bg-accent active:bg-accent/50 rounded-full border-none p-4 shadow-none transition-all duration-300 active:scale-95"
    >
      <SearchIcon className="text-foreground group-hover:text-accent-foreground size-6" />
    </Button>
  );
};

export default SearchButton;
