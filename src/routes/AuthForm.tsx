import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const data = [
    {
        goal: 400,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 239,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 349,
    },
]

export function AuthForm() {
    const [isLogin, setIsLogin] = React.useState(true)

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <div className="flex items-center cursor-pointer p-2 hover:bg-gray-200 rounded">Log in / Sign up</div>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-md:max-w-screen-sm max-w-sm fc gap-6 font-sans py-16">
                    <DrawerHeader className="p-0">
                        <DrawerTitle className="text-xl font-bold">WELCOME {isLogin ? 'BACK!' : null}</DrawerTitle>
                        <DrawerDescription>{isLogin ? `Don't have an account?` : 'Already have an account?'}<Button variant={'link'} onClick={() => setIsLogin(!isLogin)} className="text-primary-500">{isLogin ? 'Sign up' : 'Log in'}</Button></DrawerDescription>
                    </DrawerHeader>
                    {isLogin ? (
                        // Login
                        <div className="fc gap-6 mx-auto max-sm:px-4 w-full">
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" placeholder="Email" />
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" placeholder="password" />
                            </div>
                        </div>
                    ) : (
                        // Sign up
                        <div className="fc gap-6 mx-auto max-sm:px-4 w-full">
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" placeholder="Email" />
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" placeholder="Password" />
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="confirm-password">Confirm password</Label>
                                <Input type="password" id="confirm-password" placeholder="Confirm your password" />
                            </div>
                        </div>
                    )}



                    <DrawerFooter className="p-0 max-sm:px-4">
                        <Button className='rounded-lg bg-primary-500 text-white'>{isLogin ? 'Sign in' : 'Sign up'}</Button>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer >
    )
}
