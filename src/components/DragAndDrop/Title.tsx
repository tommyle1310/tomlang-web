import { DRAG_DISPLAY } from '@/lib/constants/variables'
import { Input } from '../ui/input'
import { Skeleton } from '../ui/skeleton'

const Title = ({ type = DRAG_DISPLAY }: { type?: string }) => {
    return (
        <div className={`ic ${type === DRAG_DISPLAY ? 'p-3 gap-2' : 'p-10  gap-4'} rounded-md bg-white `}>
            {type === DRAG_DISPLAY ?
                <Skeleton className={`p-2 w-10 aspect-square bg-slate-300  rounded-sm`} />

                :
                <div className={`aspect-square rounded-md w-20 bg-slate-200 cursor-pointer hover:duration-300 hover:bg-slate-300 text-slate-500 border cc`}><i className="fa-solid fa-plus"></i></div>
            }
            <div className="fc gap-2">
                {type === DRAG_DISPLAY ?
                    <>
                        <Skeleton className={`p-2 h-3 w-10 bg-slate-300  rounded-sm`} />
                        <Skeleton className={`p-2 h-3 w-16 bg-slate-300  rounded-sm`} />
                    </>
                    :
                    <>
                        <Input />
                        <Input />
                    </>
                }
            </div>
        </div>
    )
}

export default Title
