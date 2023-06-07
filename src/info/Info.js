import self from "../img/self.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(147, 149, 196), rgb(228, 161, 117)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Sebastian",
    lastName: "Morales",
    initials: "/", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Backend Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the CO'
        },
        {
            emoji: "💼",
            text: "Systems Engineer"
        },
        {
            emoji: "📧",
            text: "cheviotin200@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/SebastianMoralesDuque",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/sebas-dev/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
    ],
    bio: "Hello! I'm Sebas, a student of Systems Engineering. I'm passionate about the world of technology and I'm excited to learn and grow in this field. I am currently studying at the University and I love exploring different aspects of computer science. I believe that artificial intelligence has tremendous potential, and I'm thrilled to contribute to its advancement in the future. I'm actively seeking opportunities to apply my knowledge and skills, so you should definitely consider me for your next project or team!",
    skills:
        {
            proficientWith: ['React', 'Django', 'FastAPI', 'Postgresql', 'MariaDB', 'Github', 'Tailwind', 'Docker'],
            exposedTo: ['Python', 'Java',]
        }
    ,
    hobbies: [
        {
            label: 'Technology',
            emoji: '🖥️'
        },
        {
            label: 'Yoga',
            emoji: '🧘‍♂️'
        },
        {
            label: 'Reading',
            emoji: '📖'
        },
        {
            label: 'Socializing',
            emoji: '🕺'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Chatbot",
            source: "https://github.com/SebastianMoralesDuque/chatbot_django_react", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock5
        },
        {
            title: "License plate recognition",
            source: "https://github.com/SebastianMoralesDuque/reconocimiento-placa",
            image: mock2
        },
        {
            title: "Crud Tasks",
            source: "https://github.com/SebastianMoralesDuque/crud_tasks",
            image: mock3
        },
        {
            title: "Project 4",
            source: "https://github.com/SebastianMoralesDuque",
            image: mock4
        }
    ]
}