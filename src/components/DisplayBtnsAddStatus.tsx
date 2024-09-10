import React from 'react';
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { LessonItem } from "@/lib/constants/courses";
import { ExerciseItem } from '@/lib/constants/exercises';
import { Link } from 'react-router-dom';

type DataItem = LessonItem | ExerciseItem;

interface DisplayBtnsAddStatusProps<T extends DataItem> {
    index: number;
    data: T[];
    setData: React.Dispatch<React.SetStateAction<T[]>>;
    type: 'lesson' | 'exercise';
}

const DisplayBtnsAddStatus = <T extends DataItem>({ index, data, setData, type }: DisplayBtnsAddStatusProps<T>) => {

    const handleAddData = () => {
        const newDataObj: T = {
            title: `iterm ${Math.floor(Math.random() * 1000)}`,
            poster: 'https://github.com/shadcn.png',
            estimatedTime: 30,
            ...(type === 'lesson' ? { status: 'learned' } : {}), // Only applicable for lessons
            id: `${Math.floor(Math.random() * 10000000)}`
        } as T;

        setData(prevData => {
            const newData = [...prevData];
            newData.splice(index + 1, 0, newDataObj); // Insert the new item at the index
            return newData;
        });
    };

    const handleDeleteData = () => {
        setData(prevData => {
            const newData = prevData.filter((_, i) => i !== index); // Remove item at the specified index
            return newData;
        });
    };

    return (
        <div className="w-1/6 cc max-sm:w-2/6">
            <Button onClick={handleAddData}>
                <i className="fa-solid text-success-500 text-2xl fa-circle-plus"></i>
            </Button>
            <Link to={`/course/lesson/update`} className=' mr-3'>
                <i className="fa-solid text-white text-xs bg-info-400 w-6 h-6 rounded-full cc fa-pencil"></i>
            </Link>

            <AlertDialog>
                <AlertDialogTrigger>
                    <i className="fa-solid text-warning-600 text-2xl fa-circle-minus"></i>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the item.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction
                            onClick={handleDeleteData}
                            className='bg-danger-500'
                        >
                            Delete
                        </AlertDialogAction>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default DisplayBtnsAddStatus;
