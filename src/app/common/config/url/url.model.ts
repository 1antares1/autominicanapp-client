export interface IConfigUrl {
    fragments: IConfigUrlFragment;
    identity: string;
    profile: string;
    users: string;
    customers: string;
    reports: string;
}

export interface IConfigUrlFragment {
    [index: string]: string;
}
