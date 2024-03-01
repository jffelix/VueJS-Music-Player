// problem is every import or require adds "./media" and series of numbers to filepath

// probably can't store an mp3 in an object


import Starlight from "../../public/sampleSongs/Martin Garrix, Dubvision ft. Shaun Farrugia - Starlight (Keep Me Afloat) (Extended Mix).mp3"
// const Starlight = require("../sampleSongs/FISHER x Kita Alexander - Atmosphere (Extended Mix).mp3")

import Atmosphere from "../../public/sampleSongs/FISHER x Kita Alexander - Atmosphere (Extended Mix).mp3"
// const Atmosphere = require("./sampleSongs/FISHER x Kita Alexander - Atmosphere (Extended Mix).mp3")

import MoveYourBody from "../../public/sampleSongs/Öwnboss & Sevek - Move Your Body (Extended Mix).mp3"

// // import album covers here
// import StarlightCover from "../sampleAlbumCovers/Martin Garrix - Starlight.jpg"

const testData = [
    {
        song: "Atmosphere",
        artist: "FISHER",
        songFile: Atmosphere,
        albumCoverFile: "sampleAlbumCover2.png"
    },
    {
        song: "Move Your Body",
        artist: "Ownboss & Sevek",
        songFile: MoveYourBody,
        albumCoverFile: "sampleAlbumCover.png"
    },
    {
        song: "Starlight",
        artist: "Martin Garrix & Dubvision",
        songFile: Starlight,
        albumCoverFile: "sampleAlbumCover.png"
    }
]

export default testData