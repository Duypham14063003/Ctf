import { Inject, Service } from 'typedi';
import { LevelService } from './level.service';
import catchAsync from '../../common/utils/catch-error';
import { Request, Response } from 'express';
import { BaseLevel } from './level.model';
import { ParticipantService } from '../participants/participant.service';
@Service()
export class LevelController {
  @Inject()
  private readonly levelService: LevelService;

  @Inject()
  private readonly participantService: ParticipantService;

  create = catchAsync(async (req: Request, res: Response) => {
    const { name, description } = req.body;
    const { competitionId } = req.params;
    await this.levelService.create(
      competitionId,
      new BaseLevel(name, description)
    );
    return res.status(201).json({ message: 'success' });
  });

  checkAnswer = catchAsync(async (req: Request, res: Response) => {
    const { uid } = JSON.parse(req.headers.user as string);
    const { competitionId, levelId } = req.params;
    const { secret } = req.body;
    const participant = await this.participantService.findOne(competitionId, uid);
    if (participant.currentLevel != levelId) {
      return res.status(400).json({message: 'this is not your level'})
    }

    if (await this.levelService.checkAnswer(uid, competitionId, Number(levelId), secret)) {
      return res.status(200).json({ message: 'correct' });
    }
    return res.status(200).json({ message: 'incorrect' });
  });
}
