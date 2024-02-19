<template>
    <div>
        <h2>PlayerControls Component</h2>
    </div>
    <div>
        <PlayButton />
    </div>
    <div>
        <NextButton />
    </div>
</template>

<script>
import NextButton from "./NextButton.vue"
import PlayButton from "./PlayButton.vue"

export default {
    name: "PlayerControls",
    components: {
        PlayButton,
        NextButton
    }
}
</script>