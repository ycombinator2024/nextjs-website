import MobileDrawer from "./MobileDrawer";

import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { useRouter } from "next/router";

export default function MobileNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="block ml:hidden">
      <HamburgerMenu setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
      <MobileDrawer setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
    </div>
  );
}
