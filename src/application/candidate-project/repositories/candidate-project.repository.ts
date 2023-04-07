import { CandidateProject, Roles, Stack } from '@prisma/client';
import { CreateCandidateProjectDto } from '../dto/create-candidate-project.dto';
import { UpdateCandidateProjectDto } from '../dto/update-candidate-project.dto';
import {
  CandidateProjectResponse,
  CandidateUser,
} from '../../../models/candidate-project';

export abstract class CandidateProjectRepository {
  abstract create(
    project: CreateCandidateProjectDto,
    user: CandidateUser,
  ): Promise<CandidateProject>;
  abstract findAll(): Promise<CandidateProjectResponse[]>;
  abstract findById(id: number): Promise<CandidateProject>;
  abstract findByName(name: string): Promise<CandidateProject>;
  abstract update(
    id: number,
    project: UpdateCandidateProjectDto,
  ): Promise<void>;
  abstract delete(id: number): Promise<{ message: string }>;
  abstract findAllRolesProject(): Promise<Roles[]>;
  abstract findByIdRoleProject(id: number): Promise<Roles>;
  abstract findAllSkillsProject(): Promise<Stack[]>;
  abstract findByIdSkillProject(id: number): Promise<Stack>;
}
