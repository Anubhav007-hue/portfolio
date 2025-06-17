export interface Experience{
    id:number;
    position:string;
    company:string;
    startDate:string;
    endDate:string;
    description:string;
    skills:string[]; // <--- Change this to array of strings
}