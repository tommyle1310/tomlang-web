import SearchInput from "@/components/SearchInput"
import NavItem from "./NavItem"
import { Link } from "react-router-dom"
import { AuthForm } from "@/routes/AuthForm"

const NavWeb = () => {
    return (
        <div className=" max-lg:hidden mx-auto max-w-screen-lg text-primary-500 font-bold">
            <div className="p-3 jb">
                <div className="flex items-center">
                    <Link to={'/'} className="bg-blue-300 w-20 h-20"></Link>
                    <div className="p-2">
                        <SearchInput />
                    </div>
                </div>
                <div className="flex items-center">
                    <NavItem click={() => { }} icon={'.'} title="Wish list" />
                    <NavItem click={() => { }} icon={'.'} title="Cart" />
                       <AuthForm /> 
                </div>
            </div>
        </div>
    )
}

export default NavWeb
