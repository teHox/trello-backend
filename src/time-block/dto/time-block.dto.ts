import { IsNumber, IsOptional, IsString } from 'class-validator';

export class TimeBlockDto {
	@IsOptional()
	@IsString()
	name: string;

	@IsOptional()
	@IsString()
	color?: string;

	@IsOptional()
	@IsNumber()
	duration: number;

	@IsNumber()
	@IsOptional()
	order: number;
}
