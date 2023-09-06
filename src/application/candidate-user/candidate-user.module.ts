import { Module } from '@nestjs/common';
import { MailService } from 'src/mails/mail.service';
import { CandidateUserSqliteRepository } from '../../common/repositories/candidate-user/candidate-user-sqlite.repository';
import { CandidateUserSerialize } from '../../common/serializers/candidate-user.serialize';
import { CandidateUserController } from './candidate-user.controller';
import { CandidateUserService } from './candidate-user.service';
import { CandidateUserRepository } from './repositories/candidate-user.repository';

const modeProduction = process.env.MODE_PRODUCTION;
@Module({
  imports: [],
  controllers: [CandidateUserController],
  providers: [
    CandidateUserService,
    CandidateUserSerialize,
    MailService,
    {
      provide: CandidateUserRepository,
      useClass: CandidateUserSqliteRepository,
    },
  ],
})
export class CandidateUserModule {}
