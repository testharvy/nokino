export type formValues = {
    genres: string[],
    years: number[]
}

export const options = [
    { label: "Комедия", value: "comedy" },
    { label: "Драма", value: "drama" },
    { label: "Фантастика", value: "scifi" }
];
export const genres = ["comedy", "drama", "scifi"];
export const years = [2000,2020];
export const initalFilters:formValues = {
    genres: genres,
    years: years
};