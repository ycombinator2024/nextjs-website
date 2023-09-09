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
      <DrawerContent mt="85px" className="text-2xl">
        <DrawerBody
          p={0}
          className="flex flex-col items-center text-3xl gap-10 mt-10"
        >
          <Link
            href="/"
            className={`  whitespace-nowrap text-center outline-none ${
              isHome ? "text-blue" : ""
            }`}
            onClick={() => setIsNavOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/calendar"
            className={`  ${isCalendar ? "text-blue" : ""}`}
            onClick={() => setIsNavOpen(false)}
          >
            Calendar
          </Link>

          <Link
            href="/materials"
            className={`  ${isMaterials ? "text-blue" : ""}`}
            onClick={() => setIsNavOpen(false)}
          >
            Materials
          </Link>

          <Link
            href="/pay"
            className={`  ${isPay ? "text-blue" : ""}`}
            onClick={() => setIsNavOpen(false)}
          >
            Pay
          </Link>

          <Link
            href="/photos"
            className={`  ${isPhotos ? "text-blue" : ""}`}
            onClick={() => setIsNavOpen(false)}
          >
            Photos
          </Link>

          <Link
            href="/merch"
            className={`  ${isMerch ? "text-blue" : ""}`}
            onClick={() => setIsNavOpen(false)}
          >
            Merch
          </Link>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
