import FrameChar from "../Frame_Char/Frame_char";
import Framestats from "../Frame_Stats/Frame_stats";
import { useParams } from 'react-router-dom'


function Char_page() {
  const { id } = useParams()
  const userId = parseInt(id);
  console.log(userId)

  return (
    <div>
      <button><a href="/charsList" target="_self">Retour</a></button>
      <div className="main-frame">
        <FrameChar id={userId} />
        <Framestats id={userId} />
      </div>
    </div>
  )
}

export default Char_page
