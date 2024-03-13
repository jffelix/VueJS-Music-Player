<template>
    <div>
        <!-- <div>
            <h2>PlayerControls Component</h2>
        </div> -->
        <div>
            <PrevButton v-on:click="prevSong"/>
        </div>
        <div>
            <PlayButton 
                v-on:addTime="addTime"
                v-on:resetTime="resetTime"
                :songList="this.songList"
                :songIndex="this.songIndex"
            />
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
    props: {
        songList: Array,
        songIndex: Number
    },
    emits: ["addItem", "subtractItem", "startTimer", "stopTime"],
    methods: {
        prevSong() {
            this.$emit("subtractItem");
        },
        nextSong() {
            this.$emit("addItem");
        },
        addTime() {
            this.$emit("startTimer");
        },
        resetTime() {
            this.$emit("stopTime");
        }
    }
}
</script>