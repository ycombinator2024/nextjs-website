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
  let isCamp = false;
  let isPhotos = false;
  let isMerch = false;
  let isMaterials = false;
  if (router.pathname == "/") {
    isHome = true;
  }
  if (router.pathname == "/calendar") {
    isCalendar = true;
  }

  if (router.pathname == "/camp") {
    isCamp = true;
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
      <DrawerContent mt="85px" className="text-2xl" bg="#f9fde6">
        <DrawerBody
          p={0}
          className="flex flex-col items-center text-3xl gap-16 mt-16"
        >
          <Link
            href="/"
            className={`  whitespace-nowrap text-center outline-none ${
              isHome ? "text-purple" : ""
            }`}
            onClick={() => setIsNavOpen(false)}
          >
            HOME
          </Link>

          <Link
            href="/calendar"
            className={`  ${isCalendar ? "text-purple" : ""}`}
            onClick={() => setIsNavOpen(false)}
          >
            CALENDAR
          </Link>

          <Link
            href="/materials"
            className={`  ${isMaterials ? "text-purple" : ""}`}
            onClick={() => setIsNavOpen(false)}
          >
            MATERIALS
          </Link>

          <Link
            href="/camp"
            className={`  ${isCamp ? "text-purple" : ""}`}
            onClick={() => setIsNavOpen(false)}
          >
            CAMP
          </Link>

          <Link
            href="/photos"
            className={`  ${isPhotos ? "text-purple" : ""}`}
            onClick={() => setIsNavOpen(false)}
          >
            PHOTOS
          </Link>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
