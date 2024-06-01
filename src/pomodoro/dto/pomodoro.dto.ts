import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class PomodoroSessionDto {
	@IsOptional()
	@IsBoolean()
	isCompleted: number;
}

export class PomodoroRoundDto {
	@IsNumber()
	totalSeconds: number;

	@IsOptional()
	@IsBoolean()
	isCompleted: number;
}
