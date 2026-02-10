<!--
 * @Author: Floppy
 * @LastEditors: Floppy
 * @Description: 
-->
<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
const modules = [Pagination, Navigation,Autoplay];
const props = defineProps({
    images: {
        type: Array<string>,
        required: true,
    },
});
</script>

<template>
    <div class="container">
        <Swiper :modules="modules" :autoplay="{ delay: 3000,disableOnInteraction: false }" :pagination="{ clickable: true }" :space-between="50" direction="horizontal">
            <SwiperSlide v-for="(item, index) in images" :key="index">
                <img :src="item" alt="Placeholder image">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                        </figure>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style scoped>
.container {
    margin: 0 auto;
    width: 100%;
    max-width: 100vw;
    padding: 0 1rem;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    width: 100%;
    max-width: 800px;
}

.card-image {
    width: 100%;
}

.image {
    width: 100%;
    height: auto;
}
</style>