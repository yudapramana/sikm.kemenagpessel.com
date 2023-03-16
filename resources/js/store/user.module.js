import UserService from "../services/user.service";

const initialState = {
    users: null,
    roles: null
}

export const user = {
    namespaced: true,
    state: initialState,
    actions: {
        users({ commit }) {
            return UserService.getUsers.then(
                users => {
                    console.log('users');
                    console.log(users)
                    commit('getUsersSuccess', users);
                    return Promise.resolve(users);
                },
                error => {
                    commit('getUsersFailure');
                    return Promise.reject(error);
                }
            )
        },
        roles({ commit }) {
            return UserService.getRoles.then(
                roles => {
                    console.log('roles');
                    console.log(roles)
                    commit('getRolesSuccess', roles);
                    return Promise.resolve(roles);
                },
                error => {
                    commit('getRolesFailure');
                    return Promise.reject(error);
                }
            )
        }
    },
    mutations: {
        getUsersSuccess(state, data) {
            state.users = data;
        },
        getUsersFailure(state, data) {
            state.users = null;
        },
        getRolesSuccess(state, data) {
            state.roles = data;
        },
        getRolesFailure(state, data) {
            state.roles = null;
        }
    }
}