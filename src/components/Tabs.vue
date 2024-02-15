<script setup>
    // import { useRoute, useRouter } from 'vue-router';
    // let route = useRoute();
    // let router = useRouter();
    // console.log(route, router);
</script>
<template>
    <div class="tabs is-centered">
        <ul>
            <li :class="{'is-active': route.path ===$route.path}" v-for="route in $router.getRoutes()"><RouterLink :to="route.path">{{ route.name }}</RouterLink></li>
        </ul>
    </div>
</template>