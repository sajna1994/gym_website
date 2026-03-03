import { 
    FaBolt, 
    FaDumbbell, 
    FaHeart, 
    FaLeaf, 
    FaRunning, 
    FaUsers,
    FaBullseye,  // Replacing FaTarget with FaBullseye
    FaCrown,
    FaHandsHelping,
    FaFire,       // Alternative for intensity
    FaClock,      // Alternative for precision
    FaRocket      // Alternative for performance
} from 'react-icons/fa'
import { SiOpenaigym } from 'react-icons/si'

export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]

export const programs = [
    {
        id: 1,
        icon: <FaDumbbell />,
        title: "Strength Elite",
        info: "Master compound lifts and build functional strength with our progressive overload system.",
        path: "/programs/strength-elite"
    },
    {
        id: 2,
        icon: <FaHeart />,
        title: "Cardio Fusion",
        info: "High-intensity interval training that maximizes fat burn and cardiovascular endurance.",
        path: "/programs/cardio-fusion"
    },
    {
        id: 3,
        icon: <FaRunning />,
        title: "Athletic Performance",
        info: "Speed, agility, and power training designed for peak athletic performance.",
        path: "/programs/athletic"
    },
    {
        id: 4,
        icon: <FaBolt />,
        title: "Elite Conditioning",
        info: "Advanced metabolic conditioning for those seeking the ultimate fitness challenge.",
        path: "/programs/elite-conditioning"
    }
]

export const values = [
    {
        id: 1,
        icon: <FaBullseye />,  // Changed from FaTarget to FaBullseye
        title: "Precision",
        desc: "Every workout is meticulously designed for optimal results, ensuring you hit your targets efficiently."
    },
    {
        id: 2,
        icon: <FaHeart />,
        title: "Passion",
        desc: "We bring unwavering enthusiasm to every session, inspiring you to push beyond your limits."
    },
    {
        id: 3,
        icon: <FaUsers />,
        title: "Community",
        desc: "Together we rise. Our supportive environment fosters growth and lasting connections."
    },
    {
        id: 4,
        icon: <FaLeaf />,
        title: "Balance",
        desc: "Holistic approach combining strength, flexibility, and mental wellness for complete transformation."
    }
]

export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "For optimal results at MYO FITNESS STUDIO, we recommend 3-5 sessions per week, combining strength training with cardio. Our expert trainers will help you create a personalized schedule based on your goals and fitness level."
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "The best time to workout is whenever you can be consistent! MYO FITNESS STUDIO is open 24/7, allowing you to train at your peak performance hours. Morning workouts can boost metabolism, while evening sessions help relieve stress."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "Our expertly designed sessions range from 45-60 minutes, maximizing efficiency without compromising results. Each workout is carefully structured to provide the perfect balance of intensity and recovery."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Absolutely! Proper warm-up is crucial for performance and injury prevention. Our trainers guide you through dynamic warm-ups that prepare your body for the upcoming workout and enhance your results."
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "For comprehensive fitness, we recommend both! MYO FITNESS STUDIO's programs integrate strength and cardio training for optimal results. Our Elite Conditioning program perfectly combines both elements."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Weight training is essential for building strength, improving bone density, and boosting metabolism. Our trainers teach proper form and progressively increase intensity to ensure safe and effective results."
    }
]

export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "MYO FITNESS STUDIO transformed my life. The trainers' expertise and the supportive community pushed me beyond what I thought possible. I've never been stronger or more confident!",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "The precision in programming at MYO is unmatched. Every workout is purposeful, and the results speak for themselves. Down 20 pounds and gained serious muscle in just 3 months!",
        job: "Software Engineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "As a lecturer, I need energy and focus. MYO's balanced approach to fitness has improved my stamina and mental clarity. The 24/7 access fits perfectly with my busy schedule.",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "The community at MYO is incredible! Everyone supports each other's journey. The trainers genuinely care about your progress and push you to achieve your personal best.",
        job: "Marketing Director",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "From beginner to advanced, MYO meets you where you are. The progressive programming ensures continuous improvement without plateaus. Best fitness decision I've ever made!",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]

export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'Perfect for beginners starting their fitness journey with essential guidance',
        price: 29.99,
        features: [
            {feature: 'Access to Gym Floor', available: true},
            {feature: 'Basic Equipment Training', available: true},
            {feature: 'Locker Room Access', available: true},
            {feature: 'Mobile App Access', available: true},
            {feature: 'Group Classes', available: true},
            {feature: 'Personal Trainer Sessions', available: false},
            {feature: 'Nutrition Consultation', available: false},
            {feature: 'Recovery Zone Access', available: false},
            {feature: 'Premium Equipment Access', available: false},
            {feature: '24/7 Concierge Support', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'Ideal for dedicated fitness enthusiasts seeking comprehensive training',
        price: 49.99,
        features: [
            {feature: 'Access to Gym Floor', available: true},
            {feature: 'Basic Equipment Training', available: true},
            {feature: 'Locker Room Access', available: true},
            {feature: 'Mobile App Access', available: true},
            {feature: 'Group Classes', available: true},
            {feature: 'Personal Trainer Sessions (2/month)', available: true},
            {feature: 'Nutrition Consultation', available: true},
            {feature: 'Recovery Zone Access', available: true},
            {feature: 'Premium Equipment Access', available: false},
            {feature: '24/7 Concierge Support', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'Ultimate fitness experience with premium amenities and personalized service',
        price: 89.99,
        features: [
            {feature: 'Access to Gym Floor', available: true},
            {feature: 'Basic Equipment Training', available: true},
            {feature: 'Locker Room Access', available: true},
            {feature: 'Mobile App Access', available: true},
            {feature: 'Group Classes', available: true},
            {feature: 'Personal Trainer Sessions (4/month)', available: true},
            {feature: 'Nutrition Consultation', available: true},
            {feature: 'Recovery Zone Access', available: true},
            {feature: 'Premium Equipment Access', available: true},
            {feature: '24/7 Concierge Support', available: true}
        ]
    }
]

const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')

export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]