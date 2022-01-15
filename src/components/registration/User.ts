export default interface User {
    id: number;
    name: string;
    type: UserType;
    ratingHistory: number[];
    ratingAverage: number;
}

enum UserType {
    PRIVATE = "PRIVATE" ,
    RESTAURANT = "RESTAURANT",
}