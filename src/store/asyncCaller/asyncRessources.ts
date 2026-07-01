import { createAsyncThunk } from "@reduxjs/toolkit";
import { RESOURCES, REST_URL } from "../../config/constanteRest";

export const initialRessourcesLoad = createAsyncThunk('ressources/load', async() => {
    const pri = fetch(`${REST_URL}${RESOURCES.images}`).then(r=>r.json())
    const prm = fetch(`${REST_URL}${RESOURCES.memes}`).then(r=>r.json())
    const prall = await Promise.all([pri, prm])
    return {images:await prall[0], memes: await prall[1]}
})

initialRessourcesLoad();