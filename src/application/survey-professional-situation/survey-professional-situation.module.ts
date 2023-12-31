import { Module } from '@nestjs/common';

import { SurveyProfessionalSituationSqliteRepository } from '../../common/repositories/survey-professional-situation/survey-professional-situation-sqlite.repository';
import { SurveyProfessionalSituationRepository } from './repositories/survey-professional-situation.repository';
import { SurveyProfessionalSituationController } from './survey-professional-situation.controller';
import { SurveyProfessionalSituationService } from './survey-professional-situation.service';

const modeProduction = process.env.MODE_PRODUCTION;
@Module({
  controllers: [SurveyProfessionalSituationController],
  providers: [
    SurveyProfessionalSituationService,
    {
      provide: SurveyProfessionalSituationRepository,
      useClass: SurveyProfessionalSituationSqliteRepository,
    },
  ],
})
export class SurveyProfessionalSituationModule {}
