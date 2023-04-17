export interface CandidateUserInterface {
  id?: number;
  name: string;
  email: string;
  password?: string;
  roles?: string;
  provider?: string;
  providerId?: string;
  confirmationToken?: string;
  expiredConfirmationToken?: Date;
  activated: boolean;
}
