import { v4 as uuid } from "uuid";
import {
  cprogramming,
  cricket,
  quizOne,
  pythonprogramming,
  mathquiz,
} from "../../assets";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes = [
  {
    _id: "1",
    title: "Basic General Knowledge Quiz 1",
    totalScore: 75,
    quizImage: quizOne,
    categoryName: "General Knowledge",
    description: "Quizes based on General Knowledge",
    mcqs: [
      {
        _id: "1",
        question: "Which is the largest tiger reserve in India?",
        options: ["Nagarjuna", "Manas", "Pench", "Corbett"],
        answer: "Nagarjuna",
      },
      {
        _id: "2",
        question:
          "Which is the earliest Engineering Educational Institution in India?",
        options: [
          "Birla Institute of Technology and Science, Pilani",
          "I.I.T., Kharagpur",
          "Roorkee Engineering College (I.I.T. Roorkee)",
          "BHU (IT), Varanasi",
        ],
        answer: "Roorkee Engineering College (I.I.T. Roorkee)",
      },
      {
        _id: "3",
        question: "Which is the first national park established in India?",
        options: [
          "Velvadan National Park",
          "Periyar National Park",
          "Bandipur National Park",
          "Corbett National Park",
        ],
        answer: "Corbett National Park",
      },
      {
        _id: "4",
        question:
          "Which of the following is the first missile which has been developed in India?",
        options: ["Akash", "Prithvi", "Agni", "Trishul"],
        answer: "Prithvi",
      },
      {
        _id: "5",
        question: "Which one of the following is the highest mountain peak?",
        options: ["Nanga Parbat", "Nanda Devi", "K 2", "Kanchanjunga"],
        answer: "K 2",
      },
    ],
  },

  {
    _id: "1",
    title: "Basic General Knowledge Quiz 2",
    totalScore: 75,
    quizImage: quizOne,
    categoryName: "General Knowledge",
    description: "Quizes based on General Knowledge",
    mcqs: [
      {
        _id: "1",
        question: "Where was the first Engineering College of India located?  ",
        options: ["Bombay", "Roorkee", "Varanasi", "Calcutta"],
        answer: "Roorkee",
      },
      {
        _id: "2",
        question: "Which Indian state has a Large number of Loksabha Seats?",
        options: ["Madhya pradesh", "Uttar Pradesh", "Tamilnadu", "Rajasthan"],
        answer: "Uttar Pradesh",
      },
      {
        _id: "3",
        question: "The Presiding Chairman of the Lok Sabha is the following",
        options: [
          "Prime Minister",
          "President",
          "Vice President",
          "Elected from the Lok Sabha Members",
        ],
        answer: "Elected from the Lok Sabha Members",
      },
      {
        _id: "4",
        question: "District Judges in a State are appointed by the",
        options: [
          "Governor",
          "Prime Minister",
          "Financial Minister",
          "Chief Judge",
        ],
        answer: "Governor",
      },
      {
        _id: "5",
        question:
          "Which of the following is not a basic feature of the Indian Constitution?",
        options: [
          "Federal Government",
          "Presidential Government",
          "Parliamentary Government",
          "Independence of Judiciary",
        ],
        answer: "Presidential Government",
      },
    ],
  },

  {
    _id: "2",
    title: "C Programming",
    totalScore: 75,
    quizImage: cprogramming,
    categoryName: "Programming",
    description: "Quizes based on C Programming",
    mcqs: [
      {
        _id: "1",
        question: "By default a real number is treated as a",
        options: ["float", "double", "long double", "far double"],
        answer: "double",
      },
      {
        _id: "2",
        question:
          "Which of the following function sets first n characters of a string to a given character?",
        options: ["strinit()", "strnset()", "strset()", "strcset()"],
        answer: "strnset()",
      },
      {
        _id: "3",
        question:
          "The keyword used to transfer control from a function back to the calling function is",
        options: ["switch", "goto", "go back", "return"],
        answer: "return",
      },
      {
        _id: "4",
        question:
          "What will be the output of the following arithmetic expression ?  5+3*2%10-8*6",
        options: ["-37", "-42", "-32", "-28"],
        answer: "-37",
      },
      {
        _id: "5",
        question:
          "Which of the following characters is used to make a line break on the screen?",
        options: ["t", "a", "r", "n"],
        answer: "n",
      },
    ],
  },

  {
    _id: "2",
    title: "Python Programming",
    totalScore: 75,
    quizImage: pythonprogramming,
    categoryName: "Programming",
    description: "Quizes based on Python Programming",
    mcqs: [
      {
        _id: "1",
        question: "Is Python code compiled or interpreted?",
        options: [
          "Python code is both compiled and interpreted",
          "Python code is neither compiled nor interpreted",
          "Python code is only compiled",
          "Python code is only interpreted",
        ],
        answer: "Python code is neither compiled nor interpreted",
      },
      {
        _id: "2",
        question: "Which keyword is used for function in Python language?",
        options: ["Function", "Def", "Fun", "Define"],
        answer: "Def",
      },
      {
        _id: "3",
        question:
          "Which of the following character is used to give single-line comments in Python?",
        options: ["//", "#", "!", "/*"],
        answer: "#",
      },
      {
        _id: "4",
        question: "In which language is Python written?",
        options: ["C++", "C", "Java", "None of these"],
        answer: "C",
      },
      {
        _id: "5",
        question: "What are the two main types of functions in Python?",
        options: [
          "System function",
          "Custom function",
          "Built-in function & User defined function",
          "User function",
        ],
        answer: "Built-in function & User defined function",
      },
    ],
  },

  {
    _id: "3",
    title: "Aptitude Quiz",
    totalScore: 75,
    quizImage: mathquiz,
    categoryName: "science and technology",
    description: "Quizes based on Aptitude",
    mcqs: [
      {
        _id: "1",
        question: "Which one of the following is not a prime number?",
        options: ["31", "61", "71", "91"],
        answer: "91",
      },
      {
        _id: "2",
        question:
          "Which one of the following numbers is exactly divisible by 11? ",
        options: ["235641", "245642", "315624", "415624"],
        answer: "415624",
      },
      {
        _id: "3",
        question: "The sum of first 45 natural numbers is: ",
        options: ["1035", "1280", "2070", "1289"],
        answer: "1035",
      },
      {
        _id: "4",
        question: "Which of the following number is divisible by 24 ?",
        options: ["35718", "63810", "537804", "3125736"],
        answer: "3125736",
      },
      {
        _id: "5",
        question: "The smallest 6 digit number exactly divisible by 111 is: ",
        options: ["111111", "110011", "100011", "110101"],
        answer: "100011",
      },
    ],
  },

  {
    _id: "4",
    title: "Cricket Quiz",
    totalScore: 75,
    quizImage: cricket,
    categoryName: "Sports",
    description: "Quizes based on Cricket",
    mcqs: [
      {
        _id: "1",
        question: "The term ‘Beamer’ is associated with:",
        options: ["Football", "Hockey", "Cricket", "Chess"],
        answer: "Cricket",
      },
      {
        _id: "2",
        question:
          "What is the distance between the popping crease and the stumps on a cricket pitch?",
        options: ["2½ feet  ", "3 feet", "3 ½ feet", "4 feet"],
        answer: "4 feet",
      },
      {
        _id: "3",
        question: "What is the maximum permitted length of a cricket bat?",
        options: ["32 inch", "34 inch", "36 inch", "38 inch"],
        answer: "38 inch",
      },
      {
        _id: "4",
        question:
          "Which of the following Twenty-20 Cricket Rules is not correctly stated?",
        options: [
          "Each inning has a time limit of 75 minutes. For every over bowled after that, the batting side gets extra 6 runs",
          "If a batsman fails to reach the crease within 90 seconds after the fall of wicket, the bowling side gets 5 penalty runs",
          "A bowler can bowl a maximum of 6 overs per innings",
          "Fielding restrictions are applicable for the first six overs of the innings",
        ],
        answer: "A bowler can bowl a maximum of 6 overs per innings",
      },
      {
        _id: "5",
        question: "Which of the following terms is used only in cricket?",
        options: ["Goal", "Centre forward", "Slip", "Net"],
        answer: "Slip",
      },
    ],
  },
];
