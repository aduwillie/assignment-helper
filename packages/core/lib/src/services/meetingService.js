var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const makeMeetingService = (deps) => {
    return {
        createMeeting: (week, year) => __awaiter(void 0, void 0, void 0, function* () {
            const meeting = deps.meetingBuilder({ week, year });
            const createdMeeting = yield deps.meetingRepository.add(meeting);
            return createdMeeting;
        }),
        updateMeeting: (ref, meeting) => __awaiter(void 0, void 0, void 0, function* () {
            const updated = yield deps.meetingRepository.update(ref, meeting);
            return updated;
        })
    };
};
//# sourceMappingURL=meetingService.js.map