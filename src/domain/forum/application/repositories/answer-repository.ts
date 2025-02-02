/* eslint-disable no-unused-vars */
import type { Answer } from '../../enterprise/entities/answer';

export interface AnswerRepository {
	create(answer: Answer): Promise<void>;
}
