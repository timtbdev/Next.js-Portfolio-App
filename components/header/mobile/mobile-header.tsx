import { NavigationMenu } from "@/components/ui/navigation-menu";
import { FC } from "react";
import MenuButton from "./menu-button";
import MoreMenuButton from "./more-menu-button";

interface Props {
  currentPath: string;
}

const MobileHeader: FC<Props> = ({ currentPath }) => {
  return (
    <NavigationMenu className="mx-auto w-full max-w-5xl md:hidden">
      <div className="flex h-18 w-full items-center justify-between">
        <div className="flex flex-1 justify-start">
          <MenuButton currentPath={currentPath} />
        </div>

        <div className="flex flex-1 justify-end gap-2">
          <MoreMenuButton />
        </div>
      </div>
    </NavigationMenu>
  );
};

export default MobileHeader;
