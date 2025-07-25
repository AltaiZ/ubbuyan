import { Button } from "../ui/button";
import { getBranchDetail } from "@/sdk/queries/auth";
import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/utils";
import { MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react";
import { icons } from "./icons";
import ErxesLogo from "./erxes-logo";

const Footer = async () => {
  const { branchDetail, name } = await getBranchDetail();
  const { email, phoneNumber, links, address } = branchDetail || {};

  return (
    <footer className="pt-12">
      {!!branchDetail && (
        <div className="bg-[rgb(16,91,171)] text-white">
          <div className="container py-6 flex flex-col items-center text-center">
            <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
              <Col title="Location">
                <FooterLink href={`/`} target="_blank">
                  <MapPinIcon className="h-5 w-5" />
                  <span className="ml-2" style={{ whiteSpace: "pre-line" }}>
                    {address || "Ulaanbaatar, Mongolia"}
                  </span>
                </FooterLink>
              </Col>

              <Col title="Email">
                {!!email && (
                  <FooterLink href={"mailto:" + email} target="_blank">
                    <MailIcon className="h-5 w-5 mr-2" />
                    {email}
                  </FooterLink>
                )}
                {!!phoneNumber && (
                  <FooterLink href={"tel:" + phoneNumber} target="_blank">
                    {phoneNumber}
                  </FooterLink>
                )}
              </Col>

              <Col title="Follow">
                <div className="flex justify-center gap-3">
                  {Object.keys(links || {}).map((link) =>
                    !!links[link] ? (
                      <SocialLink href={links[link]} icon={link} key={link}>
                        {link}
                      </SocialLink>
                    ) : null
                  )}
                </div>
              </Col>
            </div>
          </div>
        </div>
      )}

      <div className="py-4 text-sm text-white bg-[rgb(16,91,171)] text-center">
        <div className="text-white mb-5">
          © {new Date().getFullYear()} <span>{name}</span>
        </div>
        <div className="text-white mb-10">
          <Button
            className="px-1 text-primary hover:no-underline font-normal h-7"
            variant="link"
            asChild
          >
            <Link
              href="https://erxes.mn/"
              target="_blank"
              className="text-white"
            >
              Powered by.
              <ErxesLogo className="ml-1 h-7 w-14 fill-white text-white" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};

const Col = ({
  title,
  children,
}: React.PropsWithChildren & { title: string }) => {
  return (
    <div className="text-center">
      <h3 className="font-semibold pt-4 pb-2 capitalize">{title}</h3>
      {children}
    </div>
  );
};

const FooterLink = (
  props: React.PropsWithChildren &
    LinkProps & { className?: string; target?: string }
) => (
  <Button
    asChild
    className={cn(
      "px-0 h-8 flex justify-center items-center text-white font-normal",
      props.className
    )}
    variant="link"
  >
    <Link {...props} />
  </Button>
);

const SocialLink = (
  props: React.PropsWithChildren &
    LinkProps & { className?: string; icon: string }
) => (
  <Button
    asChild
    className={cn("text-xl shadow-none text-white", props.className)}
    size="icon"
    variant="social"
  >
    <Link {...props}>{icons[props.icon as keyof typeof icons]}</Link>
  </Button>
);

export default Footer;
