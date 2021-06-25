class MeetingService {
    constructor(meetings) {
        this.meetings = meetings;
    }
    get nextID() {
        return (MeetingService._lastId += 1);
    }
    addMeeting(meeting) {
        meeting.meeting_id = this.nextID;
        this.meetings.push(meeting);
        return meeting;
    }
    getAllMeeting() {
        return this.meetings;
    }
    getByID(meeting_id) {
        let filtered = this.meetings.filter((data) => data.meeting_id == meeting_id);
        if (filtered.length) {
            return filtered[0];
        }
        else {
            return null;
        }
    }
    deleteMeeting(meeting_id) {
        let toDelete = this.getByID(meeting_id);
        let indexToDelete = this.meetings.indexOf(toDelete);
        this.meetings.splice(indexToDelete, 1);
    }
}
MeetingService._lastId = 0;
