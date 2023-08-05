import { Inject, Service } from 'typedi';
import catchAsync from '../../common/utils/catch-error';
import { Request, Response } from 'express';
import { ParticipantService } from './participant.service';

@Service()
export class ParticipantController {
  @Inject()
  private readonly participantService: ParticipantService;

  register = catchAsync(async (req: Request, res: Response) => {
    const { competitionId } = req.params;
    const { uid } = JSON.parse(req.headers.user as string);
    await this.participantService.register(competitionId, uid);
    return res.status(200).json({ message: 'success' });
  });

  findOne = catchAsync(async (req: Request, res: Response) => {
    const { competitionId, uid } = req.params;
    const participant = await this.participantService.findOne(
      competitionId,
      uid
    );
    return res.status(200).json(participant);
  });
}
