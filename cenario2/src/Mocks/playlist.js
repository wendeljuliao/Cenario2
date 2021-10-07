import Image from './../Images/Industry_Baby.png'
import Image2 from './../Images/Old-Town-Road.jpg'
import Image3 from './../Images/teste2.jpg'
import Image4 from './../Images/teste.jpg'
import Image5 from './../Images/ph.jpg'

import video1 from './../musicas/Evil_Morty_Theme.mp3'
import video2 from './../musicas/INDUSTRY_BABY.mp3'
import video3 from './../musicas/Lofi_01.mp3'
import video4 from './../musicas/Lost_in_paradise.mp3'
import video5 from './../musicas/Wiosna.mp3'

const playlist = [
    {
        id: 0,
        title: "Lil Nas X",
        sub: "A melhor",
        imagem: Image,
        musicas: [
            {
                bgimg: Image4,
                id: 0,
                video: video5
            },
            {
                bgimg: Image3,
                id: 1,
                video: video4
            },
            {
                bgimg: Image2,
                id: 2,
                video: video3
            },
            {
                bgimg: Image,
                id: 3,
                video: video2
            },
            {
                bgimg: Image5,
                id: 4,
                video: video1
            }
        ]

    },
    {
        id: 1,
        title: "Playlist 2",
        sub: "A melhor 2",
        imagem: Image2,
        musicas: [
            {
                id: 0,
                video: video2
            },
            {
                id: 1,
                video: video1
            },
            {
                id: 2,
                video: video3
            },
            {
                id: 3,
                video: video4
            },
            {
                id: 4,
                video: video5
            }
        ]
    },
    {
        id: 2,
        title: "Playlist 3",
        sub: "A melhor 3",
        imagem: Image3,
        musicas: [
            {
                id: 0,
                video: video3
            },
            {
                id: 1,
                video: video2
            },
            {
                id: 2,
                video: video1
            },
            {
                id: 3,
                video: video4
            },
            {
                id: 4,
                video: video5
            }
        ]
    },
    {
        id: 3,
        title: "Playlist 4",
        sub: "A melhor 4",
        imagem: Image4,
        musicas: [
            {
                id: 0,
                video: video5
            },
            {
                id: 1,
                video: video3
            },
            {
                id: 2,
                video: video2
            },
            {
                id: 3,
                video: video4
            },
            {
                id: 4,
                video: video1
            }
        ]

    },
    {
        id: 4,
        title: "Playlist 5",
        sub: "A melhor 5",
        imagem: Image5,
        musicas: [
            {
                id: 0,
                video: video3
            },
            {
                id: 1,
                video: video4
            },
            {
                id: 2,
                video: video1
            },
            {
                id: 3,
                video: video2
            },
            {
                id: 4,
                video: video5
            }
        ]

    },


]


export default playlist