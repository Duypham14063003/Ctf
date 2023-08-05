import { Inject, Service } from 'typedi';
import { ParticipantRepository } from './participant.repository';

@Service()
export class ParticipantService {
  @Inject()
  private readonly participantRepository: ParticipantRepository;

  public async register(competitionId: string, uid: string) {
    return await this.participantRepository.register(competitionId, uid);
  }

  public async findOne(competitionId: string, uid: string) {
    return await this.participantRepository.findOne(competitionId, uid);
  }
}
