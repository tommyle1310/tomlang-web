import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { courses } from "@/lib/constants/courses"
import { Link } from "react-router-dom";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useState } from "react";


const getStatusClasses = (status: string) => {
    let classes = "jb p-3 border-2 ";

    if (status === 'locked') {
        classes += "bg-gray-200 rounded-md";
    } else if (status === 'learned') {
        classes += "bg-success-100 border-success-400 cursor-pointer border-1 hover:duration-300 hover:bg-primary-100 hover:text-primary rounded-md";
    } else if (status === 'unlocked') {
        classes += "cursor-pointer hover:duration-300 hover:bg-primary-100 hover:text-primary rounded-md ";
    }

    return classes;
};

const DeleteBtn = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger><i className="fa-solid text-warning-600 text-2xl fa-circle-minus"></i></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

const DisplayBtnsAddStatus = () => {
    return (
        <div className=" w-1/6 cc max-sm:w-2/6">
            <Button><i className="fa-solid text-success-500 text-2xl fa-circle-plus"></i></Button>
            <DeleteBtn />
        </div>
    )
}

const Lesson = () => {
    const [action, setAction] = useState('ADD')

    return (
        <div className="p-3 max-w-screen-md mx-auto">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link to="/">Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Course abc</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div
                //  to='/course/lesson/new'
                className="w-full flex justify-end my-4">
                <Button
                    onClick={() => setAction(action === 'ADD' ? 'DEFAULT' : 'ADD')}
                    className={`${action === 'ADD' ? 'bg-warning-600' : 'bg-info-600'} text-white ic gap-2`}
                >
                    <i className={`fa-solid fa-circle-plus mt-1 transform transition-transform duration-200 ${action === 'ADD' ? 'rotate-45' : 'rotate-0'}`}></i>
                    {action === 'ADD' ? 'Cancel' : 'Create a lesson'}
                </Button>
            </div>

            <Tabs defaultValue="lessons" className="max-w-screen-md mx-auto">
                <TabsList className="mx-auto bg-danger-300 w-full">
                    <TabsTrigger className="w-full" value="lessons">Lessons</TabsTrigger>
                    <TabsTrigger className="w-full" value="exercises">Exercises</TabsTrigger>
                </TabsList>
                <TabsContent value="lessons" className="fc gap-3">
                    {courses.map((item, index) => (
                        item.status !== 'locked' ?
                            <div className="ic gap-2 w-full">
                                {
                                    action === 'ADD' ?
                                        <>
                                            <Link to={'/course/lesson/abc'} key={index} className={`w-5/6 flex-1 ${getStatusClasses(item.status)}`}>
                                                <div className="gap-3 ic">
                                                    <img src={item.poster} className="aspect-square w-20 max-lg:hidden rounded-md" alt={`${item.title} poster`} />
                                                    <div className="fc">
                                                        <h5 className="font-semibold text-lg">{item.title}</h5>
                                                        <h5 className="text-sm max-lg:self-end">{item.estimatedTime} min</h5>
                                                    </div>
                                                </div>
                                                {item.status === 'locked' && <div className=""><i className="fa-solid text-slate-400 fa-lock"></i></div>}
                                            </Link>
                                            <DisplayBtnsAddStatus />
                                        </>
                                        :
                                        <Link to={'/course/lesson/abc'} key={index} className={`w-full ${getStatusClasses(item.status)}`}>
                                            <div className="gap-3 ic">
                                                <img src={item.poster} className="aspect-square w-20 max-lg:hidden rounded-md" alt={`${item.title} poster`} />
                                                <div className="fc">
                                                    <h5 className="font-semibold text-lg">{item.title}</h5>
                                                    <h5 className="text-sm max-lg:self-end">{item.estimatedTime} min</h5>
                                                </div>
                                            </div>
                                            {item.status === 'locked' && <div className=""><i className="fa-solid text-slate-400 fa-lock"></i></div>}
                                        </Link>
                                }
                            </div>
                            :
                            <div className="ic gap-2 w-full">
                                {action === 'ADD' ?
                                    <>
                                        <div key={index} className={`w-5/6 flex-1 ${getStatusClasses(item.status)}`}>
                                            <div className="gap-3 ic">
                                                <img src={item.poster} className="aspect-square w-20 max-lg:hidden rounded-md" alt={`${item.title} poster`} />
                                                <div className="fc">
                                                    <h5 className="font-semibold text-lg">{item.title}</h5>
                                                    <h5 className="text-sm max-lg:self-end">{item.estimatedTime} min</h5>
                                                </div>
                                            </div>
                                            {item.status === 'locked' && <div className=""><i className="fa-solid text-slate-400 fa-lock"></i></div>}
                                        </div>
                                        <DisplayBtnsAddStatus />
                                    </>
                                    :
                                    <div key={index} className={`w-full ${getStatusClasses(item.status)}`}>
                                        <div className="gap-3 ic">
                                            <img src={item.poster} className="aspect-square w-20 max-lg:hidden rounded-md" alt={`${item.title} poster`} />
                                            <div className="fc">
                                                <h5 className="font-semibold text-lg">{item.title}</h5>
                                                <h5 className="text-sm max-lg:self-end">{item.estimatedTime} min</h5>
                                            </div>
                                        </div>
                                        {item.status === 'locked' && <div className=""><i className="fa-solid text-slate-400 fa-lock"></i></div>}
                                    </div>
                                }

                            </div>
                    ))}
                </TabsContent>
                <TabsContent value="exercises">exercises.</TabsContent>
            </Tabs>
        </div>

    )
}

export default Lesson
