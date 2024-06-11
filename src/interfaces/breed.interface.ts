import { MinMax } from "./minMax.interface"

export interface Breed {
    name: string
    description: string
    life: MinMax
    male_weight: MinMax
    female_weight: MinMax
    hypoallergenic: boolean
}