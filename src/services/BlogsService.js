import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class BlogsService {

    async getBlogs(query = '') {
        const res = await api.get(`api/blogs` + query)
        logger.log(res.data)
        AppState.blogs = res.data
    }

    async getBlogById(id) {
        const res = await api.get(`api/blogs/${id}`)
        logger.log('get blog by id', res.data)
        AppState.activeBlog = res.data
    }


}

export const blogsService = new BlogsService()