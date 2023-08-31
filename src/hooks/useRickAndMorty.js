import {useQuery} from "react-query";
import {getCharacters, getEpisode, getLocation} from "../services/rickAndMortyServices.js";

export const UseGetAllCharacters = (id) => {
    return useQuery({
        queryKey: ['get-characters'],
        queryFn: () => getCharacters(id),
        retry: false,
        refetchOnWindowFocus: true
    })
}

export const UseGetAllEpisode = () => {
    return useQuery({
        queryKey: ['get-episodes'],
        queryFn: getEpisode,
        retry: false,
        refetchOnWindowFocus: true
    })
}

export const UseGetAllLocation = () => {
    return useQuery({
        queryKey: ['get-location'],
        queryFn: getLocation,
        retry: false,
        refetchOnWindowFocus: true
    })
}

