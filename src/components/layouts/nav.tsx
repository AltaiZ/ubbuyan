import TransparentNavbar from "./navbar-top.transparent";
import Logo from "./logo";
import CartTrigger from "../cart/cart-trigger";
import CurrentUser from "@/containers/auth/current-user";
import Links from "./Links";
import MenuTrigger from "./MenuTrigger";
import { getConfig } from "@/sdk/queries/auth";

const NavTop = async () => {
  const { config } = await getConfig();
  return (
    <TransparentNavbar>
      <Logo />
      <nav className="hidden md:flex md:flex-row md:flex-nowrap relative items-center">
        <div className="hidden md:flex md:flex-row md:flex-nowrap gap-4 inline-flex items-center text-primary-foreground">
          <Links desktop domain={config?.pdomain} />
        </div>
      </nav>
      <div className="hidden md:flex gap-3">
        <CartTrigger />
        <CurrentUser />
      </div>

      <MenuTrigger domain={config?.domain} />
    </TransparentNavbar>
  );
};

export default NavTop;
