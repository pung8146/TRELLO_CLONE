import { atom, selector } from "recoil";

// TimeConverter

// export const minuteState = atom({
//   key: "minutes",
//   default: 0,
// });

// export const hourSelector = selector<number>({
//   key: "hours",
//   get: ({ get }) => {
//     const minutes = get(minuteState);
//     return minutes / 60;
//   },
//   set: ({ set }, newValue) => {
//     const minutes = Number(newValue) * 60;
//     set(minuteState, minutes);
//   },
// });

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    todo: ["a", "b", "c", "d", "e", "f"],
    doing: [],
    done: [],
  },
});
