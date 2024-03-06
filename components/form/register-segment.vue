<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const registerFormSchema = toTypedSchema(z.object({
    email: z.string().max(255),
    login: z.string().min(2).max(50),
    password: z.string().max(255),
    password_confirm: z.string().max(255)
}))

const { handleSubmit: handleRegister, meta: metaRegister } = useForm({
    validationSchema: registerFormSchema,
})

const onRegister = handleRegister((values) => {

})

const disableSubmit = computed(() => !metaRegister.value.valid)
</script>

<template>
    <form id="register-form" @submit.prevent="onRegister">
        <FormField v-slot="{ componentField }" name="password">
            <FormItem>
                <FormLabel>Пароль</FormLabel>
                <FormControl>
                    <Input type="password" placeholder="Ваш пароль" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="login">
            <FormItem>
                <FormLabel>Логин</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="Ваш логин" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
            <FormItem>
                <FormLabel>Пароль</FormLabel>
                <FormControl>
                    <Input type="password" placeholder="Ваш пароль" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <div class="mt-6">
            <Button type="submit" class="w-full" :disable="disableSubmit">
                Войти
            </Button>
        </div>
    </form>
</template>