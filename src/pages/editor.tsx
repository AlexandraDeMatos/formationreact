import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, type RootState } from "../store/store"
import { useNavigate, useParams } from 'react-router';
import { useEffect } from "react";
import FlexH1Grow from "../components/layouts/FlexH1Grow/FlexH1Grow";
import MemeSVGViewer from "../components/uis/MemeSVGViewer/MemeSVGViewer";
import MemeFormStore from "../components/MemeForm/MemeFormStore";
import { clear, update } from "../store/slices/current";

const editor = () => {
    const params = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const current = useSelector((s:RootState) => s.current.meme)
    const memes = useSelector((s:RootState) => s.ressources.memes)
    const nav = useNavigate();

    useEffect(() => {
        if (params.id) {
            if (current.id !== Number(params.id)) {
                const found = memes.find((m) => m.id === Number(params.id));
                if (found) {
                    dispatch(update(found));
                } else {
                    nav('/');
                }
            }
        } else {
            dispatch(clear())
        }
    }, [params, current, dispatch, nav, memes])
  return (
    <FlexH1Grow>
        <MemeSVGViewer/>
        <MemeFormStore/>
    </FlexH1Grow>
  )
}

export default editor