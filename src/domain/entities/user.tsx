export interface Information {
    message:     string;
    status_code: number;
    data:        DetailData[];
}

export interface DetailData {
    user_id: string;
    name:    string;
    email:   string;
}
