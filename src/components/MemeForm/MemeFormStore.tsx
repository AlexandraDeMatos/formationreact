import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../store/store'
import MemeFormUnconnected from './MemeForm'
import { update } from '../../store/slices/current'

const MemeFormStore = () => {
    const meme = useSelector((s:RootState) => s.current.meme)
    const images = useSelector((s:RootState) => s.ressources.images)
    const dispatch = useDispatch<AppDispatch>()
  return (
    <MemeFormUnconnected images={images} meme={meme} onMemeChange={(meme) => {
        dispatch(update(meme));
    }}/>
  )
}

export default MemeFormStore