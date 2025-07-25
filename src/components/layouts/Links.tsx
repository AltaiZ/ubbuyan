import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { getConfig } from "@/sdk/queries/auth";
import { SheetClose } from "../ui/sheet";
// import { useTranslations } from "next-intl";

const Links = ({ desktop, domain }: { desktop?: boolean; domain: string }) => {
  // const t = useTranslations("Navigation");
  const navLinks = [
    { text: "Home", url: "https://www.marketing.org.mn/" },
    { text: "About us", url: "https://www.marketing.org.mn/we" },
    { text: "Events", url: "https://www.marketing.org.mn/events" },
    { text: "Education", url: "https://www.marketing.org.mn/learning" },
    { text: "News", url: "https://www.marketing.org.mn/home" },
  ];
  return (
    <>
      {navLinks?.map((link) =>
        !desktop && link.url === "/" ? (
          <SheetClose key={link.url} asChild>
            <LinkItem {...link} />
          </SheetClose>
        ) : (
          <LinkItem {...link} key={link.url} />
        )
      )}
    </>
  );
};

const LinkItem = ({ url, text }: { url: string; text: string }) => (
  <Button
    variant="header"
    className={cn(
      "text-inherit px-4 text-black font-semibold text-sm",
      url === "/" && "font-bold"
    )}
    size="lg"
    asChild
  >
    <Link href={url || ""}>{text}</Link>
  </Button>
);

export default Links;
