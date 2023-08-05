import { BaseCompetition } from './competition.model';
import { Service, Inject } from 'typedi';
import  CompetitionRepository  from './competitions.repository';

@Service()
class CompetitionService {
  @Inject()
  private readonly competitionRepo: CompetitionRepository;

  async create(info: BaseCompetition) {
    const competition = await this.competitionRepo.create(info);
    return competition;
  }

  async findAll() {
    const result = await this.competitionRepo.findAll();
    return result;
  }

  async findOne(uid: string) {
    return await this.competitionRepo.findOne(uid);
  }

  async remove(uid: string) {
    return await this.competitionRepo.remove(uid);
  }
}

export default CompetitionService;
