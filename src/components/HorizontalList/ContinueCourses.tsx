import { Card, CardContent } from '../ui/card'
import { CircularProgressbar } from 'react-circular-progressbar'
import { useNavigate } from 'react-router-dom';

const ContinueCourses = () => {
  const navigate = useNavigate()
  return (
    <Card>
      {/* <AspectRatio ratio={9 / 14}> */}
      <CardContent className="fc gap-4 justify-center p-3 " onClick={() => navigate('/lesson')}>
        <div className="mx-auto w-20 h-20 ">
          <CircularProgressbar value={50} text={`${10}/${20}`} />
        </div>
        <div className="txt-2 flex flex-wrap">GGGgggGG Language</div>
        <div className="txt-1 text-start"><span>20</span> classes &bull; <span>Easy</span></div>
      </CardContent>
      {/* </AspectRatio> */}
    </Card>
  )
}

export default ContinueCourses
