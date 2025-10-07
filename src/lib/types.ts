export type KindegartenFormType = {
    name?: string;
    phoneNomer?: string;
    fullName?: string;
    address?: string;
    type?: string;
    email?: string;
}
export type KindegartenType = {
    id: string,
    name: string,
    address: string,
    fullName: string,
    phoneNumber: string,
    date: string,
}

export type changedKindegartenType = {
    type: string;
    data: KindegartenFormType;
}

export type DirectorPostType = {
    firstname: string,
    lastname: string,
    phoneNumber: string
}

export type KindegartenPostType = {
    id: string;
    name: string;
    subName: string;
    email: string;
    phone: string;
    type: string;
    address: {
        country: string;
        region: string;
        city: string;
        street: string;
        house: string;
    };
    locations: {
        latitude: number;
        longitude: number;
    };
    directorId: string;
    parentKindergartenId?: string
};
export type ResponseType<T = unknown> = {
    message: string,
    success: boolean,
    data?: T | null
}