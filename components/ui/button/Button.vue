<script setup lang="ts">
import { Primitive } from 'radix-vue'
import { buttonVariants } from '.'
import { cn } from '@/utils/utils'

interface Props {
 variant?: NonNullable<Parameters<typeof buttonVariants>[0]>['variant']
 size?: NonNullable<Parameters<typeof buttonVariants>[0]>['size']
 as?: string
}

withDefaults(defineProps<Props>(), {
 as: 'button',
})
</script>


<template>
  <Primitive
    :as="as"
    
    :class="cn(buttonVariants({ variant, size }), $attrs.class ?? '')"
  >
    <slot />
  </Primitive>
</template>
