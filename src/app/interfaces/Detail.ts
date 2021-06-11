export interface Detail{
    id?: number;
    parentId: number;
    type: string; //question, check, image
    header: string;
    header2?: string;
    answer?: string;
    answer2?: string;
    checked?: boolean;
}