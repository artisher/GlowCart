
import { DestktopMenu } from "./DestktopMenu"
import { HamburgerMenu } from "./HamburgerMenu"


export const Menu = () => {
  return (
    <div className="">
      {/* دسکتاپ */}
      <div className="hidden lg:block">
        <DestktopMenu />
      </div>

      {/* موبایل */}
      <div className="block lg:hidden">
        <HamburgerMenu />
      </div>
    </div>
  )
}
