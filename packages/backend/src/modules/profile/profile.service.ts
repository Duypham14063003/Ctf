import { Inject, Service } from 'typedi';
import { ProfileRepository } from './profile.repository';
import { Profile } from './profile.model';

@Service()
export class ProfileService {
  @Inject()
  private readonly profileRepo: ProfileRepository;

  public async saveProfile(userId: string, info: Profile): Promise<void> {
    await this.profileRepo.saveProfile(userId, info);
  }
}
