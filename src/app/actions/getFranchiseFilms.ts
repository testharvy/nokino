import {Film, FilmActor} from "@/app/films/types";

export async function getFranchiseFilms(franchiseId:string, currentFilmId:string = ''):Promise<Film[]>{
    return fetch(`http://localhost:3001/films`).then(res=>{
        return res.json();
    }).then(res=>{

        return res.filter((item:Film)=>{
            console.log('franchiseId',franchiseId)
            console.log('currentFilmId',currentFilmId)
            if(currentFilmId == item.id){
                return false
            }
            return item.franchise == franchiseId
        });
    })
}