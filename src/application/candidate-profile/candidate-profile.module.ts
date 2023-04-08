import { Module } from '@nestjs/common';
import { CandidateProfileSQLiteRepository } from 'src/common/repositories/candidate-profile/candidate-profile-sqlite-repository';
import { CandidateProfileController } from './candidate-profile.controller';
import { CandidateProfileService } from './candidate-profile.service';
import { CandidateProfile } from './entities/candidate-profile.entity';

@Module({
  controllers: [CandidateProfileController],
  providers: [CandidateProfileService, CandidateProfileSQLiteRepository, CandidateProfile]
})
export class CandidateProfileModule { }
