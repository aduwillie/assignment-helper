import { buildMeeting } from "../models";
import { Meeting } from "../models/meeting";
import { meetingRepository } from "../repositories";
export declare const makeMeetingService: (deps: {
    meetingBuilder: typeof buildMeeting;
    meetingRepository: typeof meetingRepository;
}) => {
    createMeeting: (week: string, year: number) => Promise<Meeting>;
    updateMeeting: (ref: string, meeting: Meeting) => Promise<Meeting>;
};
