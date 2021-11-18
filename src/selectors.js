import { createSelector } from "reselect";

export const usersSelector = (state) => state.users.users;


// export const filteredUsersSelector = (state) => {
//     usersSelector(state).filter(user => {
//         console.log("filtering users");
//         return user.includes(state.users.search);
//     })
// }


export const filteredUsersSelector = createSelector(
    state => state.users.users,   // here users & search are deps for this func i.e when any one of them changes then it will re execute the func
    state => state.users.search,
    (users, search) => {
        return users.filter(user => {
            console.log("filtering users");
            return user.includes(search);
        })
    }
)

// Reselect implements memoization pattern
// NOTE: every functions except last fucntions provided to createserver are dependencies