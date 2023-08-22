import {useQuery} from "react-query";
import {getCharacters} from "../services/rickAndMortyServices.js";

export const UseGetAllCharacters = () => {
    return useQuery({
        queryKey: ['get-characters'],
        queryFn: getCharacters,
        retry: false,
        refetchOnWindowFocus: true
    })
}