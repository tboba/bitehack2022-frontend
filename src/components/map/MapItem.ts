export interface MapItem {
    id: number;
    title: string;
    description: string;
    creationDate: Date;
    expiryDate: Date;
    imageUrl: string;
    location: Location;
    author?: Author;
}

interface Author {
    id?: number;
    name?: string;
    type?: string;
    ratingHistory?: number[];
    ratingAverage?: number;
    phoneNumber?: string;
    email?: string;
}
export interface Location {
    latitude: number;
    longitude: number;
    name?: string;
}
