<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const emits = defineEmits(['status'])

const loginFormSchema = toTypedSchema(z.object({
    login: z.string().min(2).max(50),
    password: z.string().max(255)
}))

const { handleSubmit: handleLogin, meta: metaLogin } = useForm({
    validationSchema: loginFormSchema,
})

const onLogin = handleLogin((values) => {
    console.log(values)
})

const disableSubmit = computed(() => !metaLogin.value.valid)
</script>

<template>
    <form id="login-form" @submit.prevent="onLogin" novalidate>
        <FormField v-slot="{ componentField }" name="login" form="">
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
            <Button type="submit" class="w-full" :disabled="disableSubmit">
                Войти
            </Button>
        </div>
    </form>
</template>