export interface MapItem {
    id: number;
    title: string;
    description: string;
    creationDate: Date;
    expiryDate: Date;
    imageUrl: string;
    location: Location;
}

export interface Location {
    latitude: number;
    longitude: number;
    name?: string;
}
