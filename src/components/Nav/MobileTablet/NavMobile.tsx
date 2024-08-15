import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"


const Nav = () => {
    return (
        <div className="lg:hidden lg:max-w-screen-lg">
            <div className="jb">
                <div className=''>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div className=''>bell</div>
            </div>
            <div className="fc">
                <h3 className="text-lg font-bold">
                    Hello, <span>Tommy</span>
                </h3>
                <p>What would you like to learn today?</p>
            </div>
        </div>
    )
}

export default Nav
