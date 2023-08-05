import { Inject, Service } from 'typedi';
import { LevelRepository } from './level.repository';
import { BaseLevel } from './level.model';
import { hashAnswer } from '../../common/utils/hash-answer';
import * as bcrypt from 'bcrypt';
import { ParticipantRepository } from '../participants/participant.repository';
import { ParticipantService } from '../participants/participant.service';

@Service()
export class LevelService {
  @Inject()
  private readonly levelRepository: LevelRepository;
  @Inject()
  private readonly participantRepo: ParticipantRepository;
  @Inject()
  private readonly participantService: ParticipantService;

  async create(competitionId: string, info: BaseLevel) {
    info.secret = await hashAnswer(info.secret);
    return await this.levelRepository.create(competitionId, info);
  }

  async checkAnswer(
    userId: string,
    competitionId: string,
    levelId: number,
    secret: string
  ) {
    const level = await this.levelRepository.findOne(competitionId, levelId);
    const uid = secret.split('.')[0];
    secret = secret.split('.')[1];
    const isCorrect = await bcrypt.compare(secret, level.secret);
    if (isCorrect && uid == userId) {
      await this.participantRepo.addLevel(competitionId, userId, levelId);
    }
    return isCorrect;
  }
}
