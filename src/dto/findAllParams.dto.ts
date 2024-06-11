import { Type } from "class-transformer";
import { IsInt, IsOptional, Max, Min } from "class-validator";

export class FindAllParams {
    @IsInt()
    @Type(() => Number)
    @Min(1)
    @Max(10)
    @IsOptional()
    limit: number
}