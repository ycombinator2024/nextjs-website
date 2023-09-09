import Link from "next/link";
import { useRouter } from "next/router";

export default function WebNav() {
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
    <div className="hidden ml:flex items-center">
      <ol className="flex flex-nowrap items-center">
        <li>
          <Link
            href="/"
            className={`mr-8 link whitespace-nowrap ${
              isHome ? "selected-link" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link href="/calendar" className="mr-8 flex items-center">
            <span className={`link  ${isCalendar ? "selected-link" : ""}`}>
              Calendar
            </span>
          </Link>
        </li>
        <li>
          <Link href="/materials" className="mr-8 flex items-center">
            <span className={`link  ${isMaterials ? "selected-link" : ""}`}>
              Materials
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/pay"
            className={`mr-8  link whitespace-nowrap ${
              isPay ? "selected-link" : ""
            }`}
          >
            Pay
          </Link>
        </li>
        <li>
          <Link href="/photos" className="mr-8 flex items-center">
            <span className={`link  ${isPhotos ? "selected-link" : ""}`}>
              Photos
            </span>
          </Link>
        </li>
        <li>
          <Link href="/merch" className="mr-8 flex items-center">
            <span className={`link  ${isMerch ? "selected-link" : ""}`}>
              Merch
            </span>
          </Link>
        </li>
      </ol>
    </div>
  );
}
