import { IsNumber, IsOptional } from "class-validator";

export class FindDto {
    @IsNumber()
    public limit: number
}