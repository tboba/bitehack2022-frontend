export interface MapItem {
    id: number;
    title: string;
    description: string;
    creationDate: Date;
    expiryDate: Date;
    imageUrl: string;
    location: Location;
}

interface Location {
    latitude: number;
    longitude: number;
}
