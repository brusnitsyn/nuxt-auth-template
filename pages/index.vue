<script setup lang="ts">
const router = useRouter()

const toAuthorizePage = () => {
    router.push({ name: 'auth' })
}
</script>

<template>
    <div class="mt-12">
        <Button @click="toAuthorizePage()">Authorize</Button>
    </div>
</template>