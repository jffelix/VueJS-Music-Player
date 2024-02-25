<template>
    <div>
        <button v-on:click="pressNext()">Next</button>
    </div>
</template>

<script>

export default {
    name: "NextButton",
    methods: {
        pressNext() {
            // console.log('You pressed Next!')
        }
    }
}

</script>