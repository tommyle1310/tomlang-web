import { AuthForm } from "@/routes/AuthForm"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import NavWeb from "./Web/NavWeb"


const Nav = () => {
    return (
        <div className="p-4 max-lg:bg-primary-500 text-white">
            {/* mobile - tablet nav */}
            <div className="lg:hidden lg:max-w-screen-lg">
                <div className="jb">
                    <div className=''>

                        <Sheet key={'left'}>
                            <SheetTrigger asChild>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </SheetTrigger>
                            <SheetContent side={'left'}>
                                <SheetHeader >
                                    <Avatar className="w-24 aspect-square h-24 self-center">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <SheetTitle className="self-center">Tommy Teo</SheetTitle>
                                </SheetHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="px-2 flex items-center cursor-pointer p-2 hover:bg-gray-200 rounded relative after:-bottom-3 after:absolute after:left-0 after:w-full after:h-1 after:bg-slate-100  ">hello</div>
                                    <div className="px-2 flex items-center cursor-pointer p-2 hover:bg-gray-200 rounded relative after:-bottom-3 after:absolute after:left-0 after:w-full after:h-1 after:bg-slate-100  ">hello</div>
                                    <div className="px-2 flex items-center cursor-pointer p-2 hover:bg-gray-200 rounded relative after:-bottom-3 after:absolute after:left-0 after:w-full after:h-1 after:bg-slate-100  ">hello</div>
                                    <AuthForm />
                                </div>
                                <SheetFooter>
                                    <SheetClose asChild>
                                        <Button type="submit">Save changes</Button>
                                    </SheetClose>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
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

            {/* pc nav */}
            <NavWeb />
        </div>
    )
}

export default Nav
