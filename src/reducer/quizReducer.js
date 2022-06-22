const initialQuizState = {
  category: [],
  quiz: {},
  quizes: [],
  score: 0,
  questionAnswers: {},
  isLoading: true,
  isFeching: true,
  currentQuestion: {},
};

const quizReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_QUIZ":
      return { ...state, quiz: payload, isFeching: false };
    case "SET_CATEGORY":
      return { ...state, category: payload };

    case "SET_GET_QUIZ":
      return { ...state, quizes: payload };

    case "SET_QUESTION":
      return { ...state, currentQuestion: payload, isLoading: false };
    case "SET_SCORE":
      return { ...state, score: state.score + 15 };
    case "SET_QUESTION_ANSWERS":
      const { questionId, value } = payload;
      return {
        ...state,
        questionAnswers: {
          ...state.questionAnswers,
          [questionId]: value,
        },
      };
    default:
      return state;
  }
};

export { initialQuizState, quizReducer };
