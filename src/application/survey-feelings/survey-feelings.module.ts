import { Module } from '@nestjs/common';
import { SurveyFeelingsSqliteRepository } from 'src/common/repositories/survey-feelings/survey-feelings-sqlite.repository';
import { SurveyFeelingsSerialize } from 'src/common/serializers/survey-feelings.serialize';
import { SurveyFeelingsRepository } from './repositories/survey-feelings.repository';
import { SurveyFeelingsController } from './survey-feelings.controller';
import { SurveyFeelingsService } from './survey-feelings.service';

const modeProduction = process.env.MODE_PRODUCTION;
@Module({
  controllers: [SurveyFeelingsController],
  providers: [
    SurveyFeelingsService,
    SurveyFeelingsSerialize,
    {
      provide: SurveyFeelingsRepository,
      useClass: SurveyFeelingsSqliteRepository,
    },
  ],
})
export class SurveyFeelingsModule {}
