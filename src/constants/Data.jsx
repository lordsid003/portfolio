import { Colors, Images } from "./Images";

export const cardItems = [
    {
        "title": "Machine Learning",
        "tech": "PyTorch, Tensorflow",
        "description": `
            Deep Learning for GenAI applications (NLP and Vision). 
            Made projects for implementation of core ML algorithms.
        `,
        "color": Colors.blue,
        "image": Images.city,
        "fontColor": "rgba(255, 255, 255, 0.55)",
        "tag": "aiml",
    },
    {
        "title": "App Development",
        "tech": "React Native, Redux",
        "description": `
            Seamless UI and efficient functionality for cross-platform applications
            using React Native. Primary Hackathon skill for me.
        `,
        "color": Colors.green,
        "image": Images.app,
        "fontColor": "rgba(0, 0, 0, 0.6)",
        "tag": "appdev"
    },
    {
        "title": "Backend Development",
        "tech": "Golang, Flask",
        "description": `
            Designing full-fledged web applications with strong backend functionality, APIs, state management & databases.
        `,
        "color": Colors.aqua,
        "image": Images.golang,
        "fontColor": "rgba(0, 0, 0, 0.6)",
        "tag": "webdev"
    },
];