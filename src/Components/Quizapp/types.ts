export interface QuizResponse {
    response_code:number;
    results: QuizQuestion[];
}
export interface QuizQuestion{
    category:string;
    type:Type;
    difficulty:Difficulty
    question:string
    correct_answer:string
    incorrect_answers:string
}

export enum Difficulty {
    Easy="easy",
    Hard="hard",
    Medium="medium"
}
export enum Type{
    Multiple="multiple",
    Boolean = "boolean"

}