import { Request, Response } from 'express';
import { Inject, Service } from 'typedi';
import catchAsync from '../../common/utils/catch-error';
import { BaseCompetition } from './competition.model';
import CompetitionService from './competitions.service';
import { Level } from '../levels/level.model';
import { hashAnswer } from '../../common/utils/hash-answer';

@Service()
class CompetitionController {
  @Inject()
  competitionService: CompetitionService;

  create = catchAsync(async (req: Request, res: Response) => {
    const {
      name,
      description,
      startTime,
      duration,
      authors,
      levels,
    } = req.body;
    const levelsConverted: Level[] = [];
    for (const level of levels) {
      levelsConverted.push(
        new Level(await hashAnswer(level.secret), level.desc)
      );
    }
    const result = await this.competitionService.create(
      new BaseCompetition(
        name,
        description,
        startTime,
        duration,
        authors,
        levelsConverted
      )
    );
    return res.status(201).send(result);
  });

  findAll = catchAsync(async (req: Request, res: Response) => {
    const result = await this.competitionService.findAll();
    return res.status(200).send(result);
  });

  findOne = catchAsync(async (req: Request, res: Response) => {
    const { uid } = req.params;
    const result = await this.competitionService.findOne(uid);
    return res.status(200).send(result);
  });

  delete = catchAsync(async (req: Request, res: Response) => {
    const { uid } = req.params;
    const result = await this.competitionService.findOne(uid);
    return res.status(200).send(result);
  });
}

export default CompetitionController;
