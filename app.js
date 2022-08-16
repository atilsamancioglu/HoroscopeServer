
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const horoscopes = [
    {
        horoscopeId: 1,
        name: "Aries",
        imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/aries.png",
        description: "This is a day for pursuing pleasure and making sure that you get a break from whatever work you have been caught up in to be with people and socialize. It is important to get out, especially with those who are important to you, if possible. You may have left them out of things recently, so today be with them wholeheartedly; share yourself with them, give the best of yourself, and you will get the best in return."
    },
    {
        horoscopeId: 2,
        name: "Taurus",
        imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/taurius.png",
        description: "The celestial lineup today is quite harmonious, but you may find that it is just a little too genteel for your taste. However, it would be a good time to really get to know how you feel about someone special, or how they feel about you. Although feelings can be turned on and off like a tap in your case, today you may still find out something very interesting."
    },
    {
        horoscopeId: 3,
        name:"Gemini",
        imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/gemini.png",
        description: "The energy of the planetary aspect today is wonderful for giving you a feeling of deep security concerning a meaningful relationship. This is a time to whisper sweet nothings, to talk about times gone by, and to look forward to what you can both share in the future. It is a good time to reaffirm how you feel and to treat each other with extra gentleness."
    },
    {
        horoscopeId: 4,
        name: "Cancer",
        imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/cancer.png",
        description: "Today you will consolidate all the romantic gains you have made over the past weeks. There is a very comforting and solid energy in the air. It is a great time to share feelings in a sensitive and moving way. There is a real flow, and the vibrations are wonderful for creating a great mood of harmony. Perhaps you wont feel so much passion, but simply that it is good to be together."
    },
    {
        horoscopeId: 5,
        name: "Leo",
        imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/leo.png",
        description: "There is a very sweet and gentle energy in the air today that has the ability to make you feel very wanted and needed. It is more down-to-earth and will help literally ground the relationship. It is a wonderful day just to be together and share everything, whether it is food, talk, music, an outing, or just the idea of doing nothing in particular."
    },
    {
        horoscopeId: 6,
        name: "Virgo",
        imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/virgo.png",
        description: "There is something almost secretive about love and romance today. Whether people are aware of a certain relationship that you are involved in or not, it will be of special significance. There is time to share things together in a particularly endearing way. It could be a good occasion to buy your dearest one a present that sums up how you feel about them. This will surely bring a smile to their face."
    },
    {
        horoscopeId: 7,
        name: "Libra",
        imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/libra.png",
        description: "This is a great day to socialize and be with those friends who are the mainstays of your life, if possible. If you have been suffering a little from the stresses and strains of life, then this is the time to relax in their company and just be grateful to share such good companionship. It is also a good time to make friends, as they will probably end up becoming very important to you."
    },
    {
        horoscopeId: 8,
        name: "Scorpio",
        imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/scorpio.png",
        description: "Sometimes it can be the small things of life that mean so much, not the big events. Today is a time when perhaps nothing extremely exciting will happen, yet you feel really understood and just happy that you are in the relationship you are in. Perhaps nothing earth shattering is going on, yet it feels very secure and just so good to be where you are right now."
    },
    {
        horoscopeId: 9,
        name: "Sagittarius",
        imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/sagittarius.png",
        description: "Conversations may not be that wide-ranging today, but there is the chance to share some wonderfully tender feelings and very sweet memories. There is a sense of nostalgia and sentiment about events that you will remember for some time. It may be a great time for a get-together to celebrate old times and old friends, so get out your address book and make some phone calls."
    },
    {
        horoscopeId: 10,
        name: "Capricorn",
        imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/capricorn.png",
        description: "This could be a very harmonious day. You will enjoy some wonderful moments, especially if planned in advance. It is a great time to share with someone special exactly how you feel, and to reminisce about old times. It is good for buying presents or showing your affection with a gift of some kind. If you enjoy good company, then this occasion will stay in your mind for some time."
    },
    {
        horoscopeId: 11,
        name: "Aquarius",
        imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/aquarius.png",
        description: "The celestial alignment gives today quite an earthy appeal. The day may not be your cup of tea in some ways, as it lacks the elements of passion and fire, but it will be memorable for bringing the ability to trust another with some of your deepest and most tender feelings. This brings a warm glow to your heart that will not be easily extinguished."
    },
    {
        horoscopeId: 12,
        name: "Pisces",
        imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/pisces.png",
        description: "Although perhaps not the promise of paradise, todays heavenly configuration brings you some interesting thoughts about your latest romantic conquest. This is a great day to get to know each other in a very tangible and down-to-earth way. No idle talk or showing off, just being present with each other. This will do more to cement your relationship at the moment."
    }
]


app.get('/horoscope-detail/:horoscopeId', (req, res) => {

    const horoscopeId = parseInt(req.params.horoscopeId)
    const horoscope = horoscopes.find(horoscope => horoscope.horoscopeId == horoscopeId)

    const model = {
        pageTitle: 'Astro Detail',
        components: [
            {
                type: 'featuredImage',
                data: {
                    imageUrl: horoscope.imageUrl
                }
            },
            {
                type: 'textRow',
                data: {
                    text: horoscope.description
                }
            },
            /*
            {
                type: 'textRow',
                data: {
                    text: horoscope.name
                }
            }
            */

        ]
    }

    res.json(model)

})


app.get('/horoscope-listing', (req, res) => {

    const model = {
        pageTitle: 'Horoscopes',
        components: [
            {
                type: "featuredImage",
                data: {
                    imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/featured.png"
                }
            },
            {
                type: "carousel",
                data: {
                    items: horoscopes.map(horoscope => {
                        return {
                            horoscopeId: horoscope.horoscopeId,
                            imageUrl: horoscope.imageUrl
                        }   
                    }),
                    action: {
                        type: "sheet",
                        destination: "horoscopeDetail"
                    }
                },
            },
           
            {
                type: "list", 
                data: {
                    rows: [
                        {
                            id: 1,
                            name: "Aries",
                            imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/aries.png",
                            description: "You get many of your ideas from television or movies, which is fine, but just make sure that you integrate these concepts with a grain of salt. Remember that these depictions are fantasy, not reality. It is important to distinguish the two."
                        },
                        {
                            id: 2,
                            name: "Taurus",
                            imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/taurius.png",
                            description: "Other people are more likely to join your bandwagon than try to oppose it, so use this to your advantage. You have the ability to persuade others quite easily. This is a good time to gather support for a project that you are considering."
                        },
                        {
                            id: 3,
                            name:"Gemini",
                            imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/gemini.png",
                            description: "So many ideas are likely to cross your path that you will become quite overwhelmed by the thought of having to decide one way or another. Remember that everything is not set in stone forever. You can always change your mind."
                        },
                        {
                            id: 4,
                            name: "Cancer",
                            imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/cancer.png",
                            description: "Approach your work with humor and a positive attitude. Others will listen to you and believe what you say simply because you have a smile on your face as you say it. Your poise and good manners are valuable assets; so, dont let them go to waste."
                        },
                        {
                            id: 5,
                            name: "Leo",
                            imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/leo.png",
                            description: "Instead of trying to eliminate and focus, this is a day when you need to expand and include. Be open to all possibilities. Orchestrate a brainstorming session. Gather many people with a wide range of viewpoints. The perfect answer will come."
                        },
                        {
                            id: 6,
                            name: "Virgo",
                            imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/virgo.png",
                            description: "Your high energy and good-natured spirit are in high demand. People will be open to your viewpoints and willing to give your expansive perspective a try. Even if your idea is a shot in the dark, there is a very good chance it will succeed."
                        },
                        {
                            id: 7,
                            name: "Libra",
                            imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/libra.png",
                            description: "Your general mood has shifted from exclusive to inclusive, and this is a good thing. Prosperity will come to you as a result of this switch in attitude. Open yourself up to more ideas of this nature and you will find success in the workplace."
                        },
                        {
                            id: 8,
                            name: "Scorpio",
                            imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/scorpio.png",
                            description: "Think about what you can bring to the workplace today instead of what you can take away from it. Share your knowledge and your inspiration instead of forcibly sucking other people of theirs. What you give will automatically come back to you tenfold."
                        },
                        {
                            id: 9,
                            name: "Sagittarius",
                            imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/sagittarius.png",
                            description: "Tension may exist in the workplace between you and another person, but most likely, this isnt because you disagree on something. This tension comes simply because you dont fully understand each other. Your ideas are more similar than you think."
                        },
                        {
                            id: 10,
                            name: "Capricorn",
                            imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/capricorn.png",
                            description: "Connect with people who are thinking big. They wont be hard to spot on a day like today. These are the people who are thinking positive, who are happy, and who arent afraid to take a major risk. These are your allies. Align with them at this time."
                        },
                        {
                            id: 11,
                            name: "Aquarius",
                            imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/aquarius.png",
                            description: "Consider enrolling in a class or working toward a degree. Higher learning is on your mind today, as well it should be. You stand to gain a great deal in the workplace if you commit to education in some way, shape, or form. Entertain all options."
                        },
                        {
                            id: 12,
                            name: "Pisces",
                            imageUrl: "https://raw.githubusercontent.com/atilsamancioglu/HoroscopeImagesForSDUI/main/pisces.png",
                            description: "Your intentions are good and you certainly are on the right track, but at the same time, you may be a bit shortsighted. You need to think of things in the long-term if you want to be truly successful. Expand your thinking."
                        }

                    ], 
                    action: {
                        type: "push", 
                        destination: "horoscopeDetail"
                    } 
                }
            }
        ]
    }

    res.json(model)
})

app.listen(8080, () => {
    console.log('Server is running...')
})