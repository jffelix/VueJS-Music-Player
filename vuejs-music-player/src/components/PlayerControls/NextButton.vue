<template>
    <div>
        <img 
            src="../../assets/playerControlButtons/NextButton.png"
            className="nextButtonImage"
        />
        <!-- <button v-on:click="pressNext()">Next</button> -->
    </div>
</template>

<script>

import "./NextButton.css"

export default {
    name: "NextButton",
    methods: {
        pressNext() {
            // console.log('You pressed Next!')
        }
    }
}

</script>