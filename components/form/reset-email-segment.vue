<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const emits = defineEmits(['status', 'changeTabTo'])

const emailResetFormSchema = toTypedSchema(z.object({
    email: z.string()
}))

const { handleSubmit: handleEmailReset, meta: metaEmailReset } = useForm({
    validationSchema: emailResetFormSchema,
})

const onEmailReset = handleEmailReset((values) => {
    emits('changeTabTo', 'reset-pin')
})

const disableSumbit = computed(() => !metaEmailReset.value.valid)
</script>

<template>
    <form id="reset-email-form" @submit.prevent="onEmailReset">
        <FormField v-slot="{ componentField }" name="email">
            <FormItem>
                <FormLabel>Электронная почта</FormLabel>
                <FormControl>
                    <Input type="email" placeholder="example@mail.ru" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <div class="mt-6">
            <Button type="submit" class="w-full" :disabled="disableSumbit">
                Далее
            </Button>
        </div>
    </form>
</template>