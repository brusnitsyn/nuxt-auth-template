<script setup lang="ts">
const { session, status, cookies, signOut } = useAuth()

definePageMeta({ middleware: "auth", auth: { guestRedirectTo: "/auth" } })
</script>

<template>
    <div class="mt-12">
        <Button @click="signOut()">Sign out</Button>
        <div>
            <pre>{{ status }}</pre>
            <pre>{{ session?.user }}</pre>
            <pre>{{ cookies }}</pre>
        </div>
    </div>
</template>