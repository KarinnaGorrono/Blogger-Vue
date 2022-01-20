import { AppState } from "../AppState";

const { api } = require("./AxiosService");


class ProfilesService {
    async getProfile(id) {
        const res = await api.get()
    }
}

export const profilesService = new ProfilesService