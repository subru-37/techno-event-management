import ParticipantExtras from '../models/ParticipantExtras';
import UUID from '../UUID';

export interface ParticipantExtrasRepository {
  create(participantExtras: ParticipantExtras): Promise<boolean>;

  find(
    organizationId: UUID,
    eventId: UUID,
    participantId: UUID,
    participantExtraId: UUID,
  ): Promise<ParticipantExtras[] | null>;

  findAll(organizationId: UUID, eventId: UUID): Promise<ParticipantExtras | null>;

  update(participantExtras: ParticipantExtras): Promise<ParticipantExtras>;

  delete(id: string): Promise<void>;
}

export default ParticipantExtrasRepository;
