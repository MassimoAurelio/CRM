<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query'
import { v4 as uuid } from 'uuid'
import { defineProps } from 'vue'
import { COLLECTION_DEALS, DB_ID } from '@/app.constanst'
import type { IDeal } from '~/types/deals.types'

</script>