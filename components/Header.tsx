import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

export function Header() {
    return (
        <header>
            <HeaderDesktop />
            <HeaderMobile />
        </header>
    )
}
