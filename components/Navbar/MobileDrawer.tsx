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
      <DrawerContent mt="75px" className="text-2xl">
        <DrawerBody p={0} className="flex flex-col">
          <Link
            href="/"
            className={`mr-8 link whitespace-nowrap ${
              isHome ? "selected-link" : ""
            }`}
          >
            Home
          </Link>

          <Link href="/calendar" className="mr-8 flex items-center">
            <span className={`link  ${isCalendar ? "selected-link" : ""}`}>
              Calendar
            </span>
          </Link>

          <Link href="/materials" className="mr-8 flex items-center">
            <span className={`link  ${isMaterials ? "selected-link" : ""}`}>
              Materials
            </span>
          </Link>

          <Link
            href="/pay"
            className={`mr-8  link whitespace-nowrap ${
              isPay ? "selected-link" : ""
            }`}
          >
            Pay
          </Link>

          <Link href="/photos" className="mr-8 flex items-center">
            <span className={`link  ${isPhotos ? "selected-link" : ""}`}>
              Photos
            </span>
          </Link>

          <Link href="/merch" className="mr-8 flex items-center">
            <span className={`link  ${isMerch ? "selected-link" : ""}`}>
              Merch
            </span>
          </Link>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
