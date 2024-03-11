<script setup lang="ts">
const { signIn } = useAuth()
const activeAuthTab = ref('login')
const changeTab = (tabName: string) => {
    activeAuthTab.value = tabName
}
definePageMeta({ middleware: "guest-only", auth: { authenticatedRedirectTo: "/" } })
</script>

<template>
    <div class="h-full flex items-center justify-center">
        <Tabs v-bind:modelValue="activeAuthTab" class="w-full max-w-sm">
            <TabsContent value="login">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <div class="flex items-center text-xl gap-x-1">
                                <span>Рады снова видеть Вас!</span>
                                <Icon name="fluent-emoji:waving-hand" size="28" />
                            </div>
                        </CardTitle>
                        <CardDescription>Войдите в свой аккаунт!</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="grid grid-rows-auto gap-y-2">
                            <Button variant="outline" class="w-full" @click="signIn('yandex')">
                                <div class="flex items-center gap-x-2">
                                    <Icon name="Yandex" size="18" />
                                    Войти с Яндекс ID
                                </div>
                            </Button>
                            <Button variant="outline" class="w-full" @click="signIn('google')">
                                <div class="flex items-center gap-x-2">
                                    <Icon name="devicon:google" size="18" />
                                    Войти с Google
                                </div>
                            </Button>
                        </div>
                        <div class="inline-flex items-center justify-center w-full relative">
                            <hr class="w-full h-px my-6 bg-gray-200 border-0 dark:bg-gray-700">
                            <span
                                class="absolute px-3 pb-1 text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">или</span>
                        </div>
                        <FormLoginSegment />
                    </CardContent>
                    <CardFooter class="flex flex-col justify-center px-6 pb-6">
                        <span class="text-sm">Забыли свой пароль? <Button variant="link" @click="changeTab('reset')">Мы
                                поможем</Button></span>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="register">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <div class="flex items-center text-xl gap-x-1">
                                <span>Давайте зарегистрируемся!</span>
                                <Icon name="fluent-emoji:handshake" size="28" />
                            </div>
                        </CardTitle>
                        <CardDescription>Заполните остальные поля и мы продолжим.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FormRegisterSegment />
                    </CardContent>
                    <CardFooter class="flex justify-center px-6 pb-6">
                        <span class="text-sm">Забыли свой пароль? <Button variant="link" @click="changeTab('reset')">Мы
                                поможем</Button></span>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="reset">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <div class="flex items-center text-xl gap-x-1">
                                <span>Восстановление доступа</span>
                            </div>
                        </CardTitle>
                        <CardDescription>Укажите адрес электронной почты</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FormResetEmailSegment @changeTabTo="value => changeTab(value)" />
                    </CardContent>
                    <CardFooter class="flex justify-center px-6 pb-6">
                        <span class="text-sm">Вспомнили пароль? <Button variant="link" @click="changeTab('login')">Мы
                                вернем Вас назад</Button></span>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="reset-pin">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <div class="flex items-center text-xl gap-x-1">
                                <Icon name="ep:back" class="text-normal cursor-pointer" @click="changeTab('reset')" />
                                <span>Восстановление доступа</span>
                            </div>
                        </CardTitle>
                        <CardDescription>Мы отправили на Вашу почту код, введите его</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FormResetPinSegment />
                    </CardContent>
                    <CardFooter class="flex justify-center px-6 pb-6">
                        <span class="text-sm">Вспомнили пароль? <Button variant="link" @click="changeTab('login')">Мы
                                вернем Вас назад</Button></span>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    </div>
</template>