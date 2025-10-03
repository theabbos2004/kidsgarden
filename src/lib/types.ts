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