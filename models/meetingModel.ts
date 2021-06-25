interface Meeting {
  meeting_id: number;
  date: string;
  assignmentId: number[];
}

interface IMeetingService {
  addMeeting(meeting: Meeting): Meeting;
  deleteMeeting(meeting_id: number): void;
  getAllMeeting(): Meeting[];
  getByID(meeting_id: number): Meeting;
}
