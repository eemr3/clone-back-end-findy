import { Module } from '@nestjs/common';
import { CandidateProfileRepository } from 'src/application/candidate-profile/repository/candidate-profile.repository';
import { CandidateProfileSQLiteRepository } from '../../common/repositories/candidate-profile/candidate-profile-sqlite-repository';
import { CandidateProfileController } from './candidate-profile.controller';
import { CandidateProfileService } from './candidate-profile.service';
import { CandidateProfile } from './entities/candidate-profile.entity';

const modeProduction = process.env.MODE_PRODUCTION;

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
