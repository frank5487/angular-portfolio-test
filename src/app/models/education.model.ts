export interface EducationModel {
    school: string;
    degree: string;
    fieldOfStudy: string;
    startDate: Date;
    endDate: Date;
    descriptions?: Array<string>; 
}