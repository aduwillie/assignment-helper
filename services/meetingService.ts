class MeetingService implements IMeetingService {
  private static _lastId: number = 0;

  get nextID() {
    return (MeetingService._lastId += 1);
  }

  constructor(private meetings: Meeting[]) {}

  addMeeting(meeting: Meeting): Meeting {
    meeting.meeting_id = this.nextID;
    this.meetings.push(meeting);
    return meeting;
  }

  getAllMeeting(): Meeting[] {
    return this.meetings;
  }

  getByID(meeting_id: number): Meeting {
    let filtered = this.meetings.filter(
      (data) => data.meeting_id == meeting_id
    );

    if (filtered.length) {
      return filtered[0];
    } else {
      return null;
    }
  }
  deleteMeeting(meeting_id: number): void {
    let toDelete = this.getByID(meeting_id);
    let indexToDelete = this.meetings.indexOf(toDelete);

    this.meetings.splice(indexToDelete, 1);
  }
}
