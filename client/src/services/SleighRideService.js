const baseURL = "http://localhost:5000/api/";

export const getQuestions = () => {
    return(
        fetch(baseURL + "quiz")
        .then(res => res.json())
    )
}

export const getJokes = () => {
    return(
        fetch(baseURL + "jokes")
        .then(res => res.json())
    )
}
