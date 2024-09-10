import SearchInput from "@/components/SearchInput"
import NavItem from "./NavItem"
import { Link, useNavigate } from "react-router-dom"
import { AuthForm } from "@/routes/AuthForm"

const NavWeb = () => {
    const navigate = useNavigate()
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
                    <NavItem click={() => { }} icon={<i className="fa-solid fa-heart"></i>} title="Wish List" />
                    <NavItem click={() => { navigate('/courses') }} icon={<i className="fa-solid fa-person-chalkboard"></i>} title="My Courses" />
                    <NavItem click={() => { }} icon={<i className="fa-solid fa-cart-shopping"></i>} title="Cart" />
                    <AuthForm />
                </div>
            </div>
        </div>
    )
}

export default NavWeb
