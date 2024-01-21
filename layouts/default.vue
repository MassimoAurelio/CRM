<script setup>
import { account } from '@/utils/appwrite'
import { useAuthStore, useIsLoadingStore } from '@/store/auth.store'


const isAuthStore = useAuthStore()
const isLoadingStore = useIsLoadingStore()
const router = useRouter()

onMounted(async () => {
    try {
        const user = await account.get()
        if (user) isAuthStore.set(user)
    } catch (error) {
        router.push('/login')
    }
    finally {
        isLoadingStore.set(false)
    }

})
</script>

<template>
    <LayoutLoader v-if="isLoadingStore.isLoading" />
    <section v-else :class="{ grid: isAuthStore.isAuth }" style="min-height: 100vh">
        <LayoutSidebar v-if="isAuthStore.isAuth" />
        <div>
            <slot />
        </div>
    </section>
</template>



<style scoped>
.grid {
    display: grid;
    grid-template-columns: 1fr 6fr;
}
</style>