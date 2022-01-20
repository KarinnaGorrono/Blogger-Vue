<template>
    <div class="component">
<h1>SOMETHIN SOMETHIN HONNAAAAY</h1>
<p>{{blog}}</p>

    </div>
</template>


<script>

import { useRoute } from "vue-router";
import { blogsService } from '../services/BlogsService';
import { AppState } from "../AppState"
import { computed } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { logger } from '../utils/Logger';

export default {
    setup(){
        const route = useRoute();
        onMounted(()=>{
            let blogId = route.params.id
            logger.log(blogId)
            blogsService.getBlogById(blogId)
            // TODO get this blogs le comments
        })

        return {
            blog: computed(()=> AppState.activeBlog)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>