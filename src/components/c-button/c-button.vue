<template>
    <button :class="['c-ui-button', `c-ui-button-${type}`]">this is c-button</button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'c-button',
    props: {
        type: {
            type: String,
            default: 'default',
        }
    },
})
</script>

