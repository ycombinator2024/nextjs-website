import {
  Drawer,
  DrawerContent,
  Divider,
  DrawerBody,
  Text,
} from "@chakra-ui/react";

import Link from "next/link";

import { useRouter } from "next/router";

interface MobileDrawerProps {
  setIsNavOpen: (prev: boolean) => void;
  isNavOpen: boolean;
}

const LinkStyles = "mr-8 flex items-center";
export default function MobileDrawer({
  setIsNavOpen,
  isNavOpen,
}: MobileDrawerProps) {
  const router = useRouter();
  let isHome = false;
  let isCalendar = false;
  let isPay = false;
  let isPhotos = false;
  let isMerch = false;
  let isMaterials = false;
  if (router.pathname == "/") {
    isHome = true;
  }
  if (router.pathname == "/calendar") {
    isCalendar = true;
  }

  if (router.pathname == "/pay") {
    isPay = true;
  }
  if (router.pathname == "/photos") {
    isPhotos = true;
  }
  if (router.pathname == "/merch") {
    isMerch = true;
  }
  if (router.pathname == "/materials") {
    isMaterials = true;
  }
  return (
    <Drawer
      isOpen={isNavOpen}
      placement="right"
      size="full"
      onClose={() => setIsNavOpen(!isNavOpen)}
    >
      <DrawerContent mt="87px" className="text-2xl">
        <DrawerBody
          p={0}
          className="flex flex-col items-center text-3xl gap-10 mt-10"
        >
          <Link
            href="/"
            className={`mr-8  whitespace-nowrap outline-none ${
              isHome ? "text-blue" : ""
            }`}
          >
            Home
          </Link>

          <Link href="/calendar" className={LinkStyles}>
            <span className={`  ${isCalendar ? "text-blue" : ""}`}>
              Calendar
            </span>
          </Link>

          <Link href="/materials" className={LinkStyles}>
            <span className={`  ${isMaterials ? "text-blue" : ""}`}>
              Materials
            </span>
          </Link>

          <Link
            href="/pay"
            className={`mr-8   whitespace-nowrap ${isPay ? "text-blue" : ""}`}
          >
            Pay
          </Link>

          <Link href="/photos" className={LinkStyles}>
            <span className={`  ${isPhotos ? "text-blue" : ""}`}>Photos</span>
          </Link>

          <Link href="/merch" className={LinkStyles}>
            <span className={`  ${isMerch ? "text-blue" : ""}`}>Merch</span>
          </Link>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
