import { Inject, Service } from 'typedi';
import { ProfileService } from './profile.service';
import catchAsync from '../../common/utils/catch-error';
import { Request, Response } from 'express';
import { Profile } from './profile.model';

@Service()
export class ProfileController {
  @Inject()
  private readonly profileService: ProfileService;

  saveProfile = catchAsync(async (req: Request, res: Response) => {
    const user = JSON.parse(req.headers.user as string);
    const {name, uid, email, picture} = user;
    await this.profileService.saveProfile(uid, new Profile(name, email, picture));
    res.status(200).send({ message: 'success' });
  });
}
