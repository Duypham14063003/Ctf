import { Inject, Service } from 'typedi';
import { FirebaseService } from '../firebase/firebase.service';
import { collectionConstants } from '../../common/constants/collection.constant';
import { BaseLevel, Level } from './level.model';
import CompetitionRepository from './../competitions/competitions.repository';

@Service()
export class LevelRepository {
  @Inject()
  private readonly firebaseService: FirebaseService;

  @Inject()
  private readonly competitionRepo: CompetitionRepository;

  public getRef(competitionId: string) {
    return this.firebaseService.getRef(
      `${collectionConstants.COMPETITIONS}/${competitionId}`
    );
  }
    
  async create(competitionId: string, info: BaseLevel) {
    return await this.getRef(competitionId).doc().set({...info});
  }

  async findOne(competitionId: string, levelId: number, ) : Promise<Level> {
    const competition = await this.competitionRepo.findOne(competitionId);
    const level = competition.levels[levelId];
    return new Level(level.secret, level.description);
  }
}
