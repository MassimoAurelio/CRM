<script setup lang="ts">
import { useAuthStore, useIsLoadingStore } from '#imports';

const isAuthStore = useAuthStore()
const isLoadingStore = useIsLoadingStore()
const router = useRouter()

const logout = async () => {
    isLoadingStore.set(true)
    await account.deleteSession("current")
    isAuthStore.clear()
    await router.push('/login')
    isLoadingStore.set(false)
}
</script>

<template>
    <aside class="px-5 py-8 bg-card h-full relative w-full">
        <NuxtLink to="/" class="mb-10 block">
            <NuxtImg src="/OpenAI.dark.svg" width="100px" class="mx-auto" />
        </NuxtLink>

        <button class="absolute top-2 right-3 transition-colors hover:text-purple-400" @click="logout">
            <Icon name="line-md:logout" color="white" size="20" />
        </button>
        <LayoutMenu />
    </aside>
</template>



