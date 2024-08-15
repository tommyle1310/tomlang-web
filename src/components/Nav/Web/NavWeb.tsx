import SearchInput from "@/components/SearchInput"
import NavItem from "./NavItem"

const NavWeb = () => {
    return (
        <div className=" max-lg:hidden text-primary-500 font-bold">
            <div className="p-3 jb">
                <div className="flex items-center">
                    <div className="bg-blue-300 w-20 h-20"></div>
                    <div className="p-2">
                        <SearchInput />
                    </div>
                </div>
                <div className="flex items-center">
                    <NavItem click={() => { }} icon={'.'} title="Wish list" />
                    <NavItem click={() => { }} icon={'.'} title="Cart" />
                    <NavItem click={() => { }} icon={'.'} title="Log in/Sign up" />
                </div>
            </div>
        </div>
    )
}

export default NavWeb
