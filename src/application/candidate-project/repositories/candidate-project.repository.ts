import { CandidateProject } from '@prisma/client';
import { CreateCandidateProjectDto } from '../dto/create-candidate-project.dto';
import { UpdateCandidateProjectDto } from '../dto/update-candidate-project.dto';

export abstract class CandidateProjectRepository {
  abstract create(
    project: CreateCandidateProjectDto,
  ): Promise<CandidateProject>;
  abstract findAll();
  abstract findById(id: number): Promise<CandidateProject>;
  abstract findByName(name: string): Promise<CandidateProject>;
  abstract update(id: number, project: UpdateCandidateProjectDto);
  abstract delete(id: number): Promise<string>;
}
