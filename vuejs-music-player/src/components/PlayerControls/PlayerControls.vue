<template>
    <div>
        <h2>PlayerControls Component</h2>
        <PrevButton />
        <PlayButton />
        <NextButton />
    </div>
</template>

<script>
import NextButton from "./NextButton.vue"
import PlayButton from "./PlayButton.vue"
import PrevButton from "./PrevButton.vue"

export default {
    name: "PlayerControls",
    components: {
        PrevButton,
        PlayButton,
        NextButton
    }
}
</script>