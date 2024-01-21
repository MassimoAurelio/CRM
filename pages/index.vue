<script setup lang="ts">
import type { ICard, IColumn } from '~/components/kanban/kanban.types';
import { useKanbanQuery } from '@/components/kanban/useKanbanQuery'

useSeoMeta({
    title: "Home | CRM System"
})

const dragCardRef = ref<ICard | null>(null)
const sourceColumnRef = ref<IColumn | null>(null)

const { data, isLoading, refetch } = useKanbanQuery()
</script>

<template>
    <div class="p-10">
        <h1 class="font-bolt text-2x1 mb-10">CRM System</h1>
    </div>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
        <UiCard class="mb-3 ml-5 mr-5" draggable="true">
            <UiCardHeader role="button"> name card </UiCardHeader>
            <UiCardContent> Компания </UiCardContent>
            <UiCardFooter> Date </UiCardFooter>
        </UiCard>
    </div>
</template>