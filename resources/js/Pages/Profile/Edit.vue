<script setup>
import UpdateInfo from './Sections/UpdateInfo.vue';

defineProps({
    user: Object,
    status: String
})
</script>

<template>
    <Head title="- Profile"></Head>
    <UpdateInfo :user="user" :status="status"/>
</template>
