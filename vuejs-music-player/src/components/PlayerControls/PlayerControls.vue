<template>
    <div>
        <!-- <div>
            <h2>PlayerControls Component</h2>
        </div> -->
        <div>
            <PrevButton v-on:click="prevSong"/>
        </div>
        <div>
            <PlayButton v-on:click="playSong"/>
        </div>
        <div>
            <NextButton v-on:click="nextSong"/>
        </div>
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
    },
    emits: ["addItem", "subtractItem"],
    methods: {
        prevSong() {
            this.$emit("subtractItem");
        },
        playSong() {
            console.log("you clicked Play!");
        },
        nextSong() {
            this.$emit("addItem");
        }
    }
}
</script>