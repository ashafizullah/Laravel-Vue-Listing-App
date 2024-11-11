<script setup>
import Container from '../../Components/Container.vue';
import Title from '../../Components/Title.vue';
import InputField from '../../Components/InputField.vue';
import ErrorMessage from '../../Components/ErrorMessages.vue';
import PrimaryBtn from '../../Components/PrimaryBtn.vue';
import TextArea from '../../Components/TextArea.vue';
import { useForm } from '@inertiajs/vue3';

const form = useForm({
    title: null,
    description: null,
    tags: null,
    email: null,
    link: null,
    images: null,
});
</script>

<template>
    <Head title="- New Listing"></Head>
    <Container>
        <div class="mb-6">
            <Title>Create a New Listing</Title>
        </div>
        <form class="grid grid-cols-2 gap-6">
            <div class="space-y-6">
                <InputField label="Title" icon="heading" placeholder="Title" v-model="form.title" />
                <InputField label="Tags (separate with comma)" icon="tags" placeholder="one, two, three" v-model="form.tags" />
                <TextArea label="Description" icon="newspaper" placeholder="https://example.com" v-model="form.link"></TextArea>
            </div>
            <div class="space-y-6">
                <InputField label="Email" icon="at" placeholder="example@email.com" v-model="form.email" />
                <InputField label="External Link" icon="up-right-from-square" placeholder="https://example.com" v-model="form.link" />
            </div>
            <div>
                <PrimaryBtn>Create</PrimaryBtn>
            </div>
        </form>
    </Container>
</template>
