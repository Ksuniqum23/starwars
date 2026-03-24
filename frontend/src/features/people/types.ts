export interface Person {
    entityId: number;
    id: string;
    name: string;
    heightCm: number;
    massKg: number;
    birthYearBBY: number;
    gender: 'male' | 'female';
    homeworld: {
        entityId: number;
        id: string;
        name: string;
    };
    films: Array<{
        entityId: number;
        id: string;
        title: string;
        episode: number;
    }>;
    species: any[];
    vehicles: Array<{
        entityId: number;
        id: string;
        name: string;
    }>;
    starships: Array<{
        entityId: number;
        id: string;
        name: string;
    }>;
    meta: {
        isForceUser: boolean;
        isJedi: boolean;
        isSith: boolean;
        faction: string;
    };
}

export interface PeopleState {
    persons: Person[];
    loading: boolean;
    error: string | null;
    active: string | null;
}

export interface PeopleResponse {
    page: number;
    limit: number;
    total: number;
    pages: number;
    results: {
        id: string;
        name: string;
        heightCm:  number;
        massKg:  number;
        birthYearBBY: number;
        gender: 'male' | 'female';
        homeworld: {
            entityId: number;
            id: string;
            name: string;
        }
        [key: string]: any;
    }[];
}
