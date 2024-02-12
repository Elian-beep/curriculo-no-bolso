import { IAward } from "./IAward"
import { ICertification } from "./ICertification"
import { IProfessional } from "./IProfessional"

export interface ISimpleCurriculum {
    id?: number,
    title: string
    completeName: string,
    email: string,
    phone: string,
    linkedin?: string
}

export interface ICurriculum extends ISimpleCurriculum {
    academics?: IAcademic[],
    professionals?: IProfessional[],
    certifications?: ICertification[],
    awards?: IAward[],
}