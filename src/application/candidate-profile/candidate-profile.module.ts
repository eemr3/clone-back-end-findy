import { Module } from '@nestjs/common';
import { CandidateProfileController } from './candidate-profile.controller';
import { CandidateProfileService } from './candidate-profile.service';
import { CandidateProfile } from './entities/candidate-profile.entity';
import { CandidateProfilePostgresRepository } from '../../common/repositories/candidate-profile/candidate-profile-postgres-repository';
import { CandidateProfileRepository } from '../../application/candidate-profile/repository/candidate-profile.repository';
import { CandidateProfileSQLiteRepository } from '../../common/repositories/candidate-profile/candidate-profile-sqlite-repository';
@Module({
  controllers: [CandidateProfileController],
  providers: [
    CandidateProfileService,
    {
      provide: CandidateProfileRepository,
      useClass: CandidateProfileSQLiteRepository,
    },
    CandidateProfile,
  ],
})
export class CandidateProfileModule {}
