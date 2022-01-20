<template>
    <div class="col-md-4">
  <div class="border rounded shadow m-2" @click="goToBlogPage">
      <img
        :src="blog.imgUrl"
        class="rounded selectable project-image"
        alt=""
      />
    </div>

    </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import {useRouter} from "vue-router"
export default {
    props: {
        blog: {
            type: Object,
            required: true,
        },
    },
    setup(props){
        const router = useRouter();
        return {
            router,
            async goToBlogPage(){
                router.push({
                    name: "BlogPage",
                    params: {id: props.blog.id},
                });
            },
coverImg: computed(() => `url(${props.blog.imgUrl})`)
        }
    }
}
</script>


<style lang="scss" scoped>
.project-image {
  background-size: cover;
  object-fit: contain;
  height: 100%;
  width: 100%;
}

.cover-image {
  // NOTE the variable used here needs to already be formatted for css before you try to use it here
  background-image: v-bind(coverImg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 50vh;
}

.creator-image {
  height: 3rem;
  width: 3rem;
}
</style>