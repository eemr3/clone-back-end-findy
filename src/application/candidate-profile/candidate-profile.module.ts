import { Module } from '@nestjs/common';
import { CandidateProfileService } from './candidate-profile.service';
import { CandidateProfileController } from './candidate-profile.controller';
import { CandidateProfileRepository } from './repository/candidate-profile.repository';
import { CandidateProfileInMemoryRepository } from 'src/common/repositories/candidate-profile/candidate-profile-in-memory.repository';
import { CandidateProfile } from './entities/candidate-profile.entity';
import { CandidateProfileSQLiteRepository } from 'src/common/repositories/candidate-profile/candidate-profile-sqlite-repository';

@Module({
  controllers: [CandidateProfileController],
  providers: [CandidateProfileService, CandidateProfileSQLiteRepository, CandidateProfile]
})
export class CandidateProfileModule { }
