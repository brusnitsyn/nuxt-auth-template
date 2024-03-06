<script setup lang="ts">
import { toast } from 'vue-sonner'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const pinResetFormSchema = toTypedSchema(z.object({
    pin: z.array(z.coerce.string()).length(5)
}))

const { handleSubmit: handlePinReset, setValues: setValuesPinReset, meta: metaPinReset } = useForm({
    validationSchema: pinResetFormSchema,
})

const onPinReset = handlePinReset((value) => {
    toast('Востановление прошло успешно', {
        description: `Введенный код: ${value.pin}`,
        action: {
            label: 'Ok',
            onClick: () => console.log('Ok'),
        },
    })
})

const disableSubmit = computed(() => !metaPinReset.value.valid)
</script>

<template>
    <form id="login-pin-form" @submit.prevent="onPinReset">
        <FormField v-slot="{ componentField }" name="pin">
            <FormItem>
                <FormControl class="flex justify-center">
                    <PinInput placeholder="○" class="flex gap-2 items-center mt-1" otp type="number"
                        :name="componentField.name" @update:model-value="(arrStr) => {
                        setValuesPinReset({
                            pin: arrStr.filter(Boolean),
                        })
                    }">
                        <PinInputInput v-for="(id, index) in 5" :key="id" :index="index" />
                    </PinInput>
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <div class="mt-6">
            <Button type="submit" class="w-full" :disabled="disableSubmit">
                Далее
            </Button>
        </div>
    </form>
</template>