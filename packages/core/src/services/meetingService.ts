import { buildMeeting } from "../models"
import { Meeting } from "../models/meeting";
import { meetingRepository } from "../repositories";

export const makeMeetingService = (deps: {
  meetingBuilder: typeof buildMeeting,
  meetingRepository: typeof meetingRepository
}) => {

  return {
    createMeeting: async (week: string, year: number) => {
      const meeting = deps.meetingBuilder({ week, year });
      const createdMeeting = await deps.meetingRepository.add(meeting);
      return createdMeeting;
    },
    updateMeeting: async (ref: string, meeting: Meeting) => {
      const updated = await deps.meetingRepository.update(ref, meeting);
      return updated;
    }
  }
}
