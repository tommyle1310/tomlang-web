import { Card, CardContent } from '../ui/card'
import { CircularProgressbar } from 'react-circular-progressbar'
import { useNavigate } from 'react-router-dom';

const ContinueCourses = () => {
  const navigate = useNavigate()
  return (
    <Card>
      {/* <AspectRatio ratio={9 / 14}> */}
      <CardContent className="fc gap-4 justify-center p-3 " onClick={() => navigate('/course/abc')}>
        <div className="mx-auto w-20 h-20 ">
          <CircularProgressbar value={50} text={`${10}/${20}`} />
        </div>
        <div className="txt-2 flex flex-wrap text-primary-500 font-bold">GGGgggGG Language</div>
        <div className="txt-1 text-start"><span>20</span> classes &bull; <span className='text-info-500'>Easy</span></div>
      </CardContent>
      {/* </AspectRatio> */}
    </Card>
  )
}

export default ContinueCourses
