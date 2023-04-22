import { CreateCandidateUserDto } from '../../../application/candidate-user/dto/create-cadidate-user.dto';
import { UpdateCandidateUserDto } from '../../../application/candidate-user/dto/update-cadidate-user.dto';
import { CandidateUser } from '../../../application/candidate-user/entities/candidate-user.entity';
import { CandidateUserRepository } from '../../../application/candidate-user/repositories/candidate-user.repository';
import { PrismaService } from '../../../config/database/prisma/prisma.service';
import { CandidateUserSerialize } from '../../serializers/candidate-user.serialize';
export declare class CandidateUserSqliteRepository implements CandidateUserRepository {
    private readonly prisma;
    private readonly candidateUserSerialize;
    constructor(prisma: PrismaService, candidateUserSerialize: CandidateUserSerialize);
    create(candidate: CreateCandidateUserDto): Promise<CandidateUser>;
    findAll(): Promise<any[]>;
    findById(id: number): Promise<import(".prisma/client").CandidateUser & {
        CandidateProfile: import(".prisma/client").CandidateProfile;
    }>;
    findByEmail(email: string): Promise<CandidateUser>;
    update(id: number, cadidate: UpdateCandidateUserDto): Promise<CandidateUser>;
    remove(id: number): Promise<void>;
}
