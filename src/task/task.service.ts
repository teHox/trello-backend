import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
	constructor(private prisma: PrismaService) {}

	async getAll(userId: string) {
		return this.prisma.task.findMany({
			where: { userId },
		});
	}

	async create(dto: TaskDto, userId: string) {
		return this.prisma.task.create({
			// @ts-ignore
			data: {
				...dto,
				user: {
					connect: {
						id: userId,
					},
				},
			},
		});
	}

	async update(dto: Partial<TaskDto>, id: string, userId: string) {
		return this.prisma.task.update({
			where: {
				userId,
				id: id,
			},
			// @ts-ignore
			data: dto,
		});
	}

	async delete(taskId: string) {
		return this.prisma.task.delete({
			where: {
				id: taskId,
			},
		});
	}
}
