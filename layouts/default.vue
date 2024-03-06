<script setup lang="ts">
const router = useRouter()
const routeName = computed(() => router.currentRoute.value.name)
</script>

<template>
    <div class="h-screen max-h-screen grid grid-rows-[auto_1fr]">
        <div class="sticky inset-x-0 p-4">
            <div>
                Route name: {{ routeName }}
            </div>
        </div>
        <div class="px-4 py-2">
            <NuxtPage />
        </div>
    </div>
</template>