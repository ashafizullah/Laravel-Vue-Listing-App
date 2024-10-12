<script setup>
import { useForm } from '@inertiajs/vue3';
import Container from '../../../Components/Container.vue';
import InputField from '../../../Components/InputField.vue';
import PrimaryBtn from '../../../Components/PrimaryBtn.vue';
import ErrorMessages from '../../../Components/ErrorMessages.vue';
import Title from '../../../Components/Title.vue';
import { ref } from 'vue';

const showConfirmPassword = ref(false)

const form = useForm({
    password: ""
})

const submit = () => {
    form.delete(route('profile.destroy'), {
        onFinish: () => form.reset(),
        onError: () => form.reset,
        preserveScroll: true
    })
}
</script>

<template>
    <Container class="mb-6">
        <div class="mb-6">
            <Title>Delete Account</Title>
            <p>Once your account is deleted, all of its resources data will be permanently deleted. This action cannot be undone.</p>
        </div>

        <ErrorMessages :errors="form.errors"/>

        <div v-if="showConfirmPassword">
            <form class="flex items-end gap-4" @submit.prevent="submit">
                <InputField label="Confirm Password" icon="key" class="w-1/2" v-model="form.password" type="password"/>

                <PrimaryBtn :disabled="form.processing">Confirm</PrimaryBtn>

                <button class="text-indigo-500 font-medium underline dark:text-indigo-400" @click="showConfirmPassword = false">Cancel</button>
            </form>
        </div>

        <button class="px-6 py-2 rounded-lg bg-red-500 text-white" v-if="!showConfirmPassword" @click="showConfirmPassword = true">
            <i class="fa-solid fa-triangle-exclamation mr-2"></i>
            Delete Account
        </button>
    </Container>
</template>
