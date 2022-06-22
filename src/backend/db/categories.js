import { v4 as uuid } from "uuid";
import {
  quizimage1,
  categoryOne,
  categoryTwo,
  categoryThree,
  categoryFour,
} from "../../assets";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: 1,
    categoryName: "General Knowledge",
    description: "Quizes based on General Knowledge",
    categoryImage: categoryOne,
  },
  {
    _id: 2,
    categoryName: "Programming",
    categoryDescription: "Quizzes based on Computer Programming",
    categoryImage: categoryThree,
  },
  {
    _id: 3,
    categoryName: "Science and Technology",
    categoryDescription: "Quizzes based on History",
    categoryImage: categoryTwo,
  },
  {
    _id: 4,
    categoryName: "Sports",
    categoryDescription: "Quizzes based on Sports",
    categoryImage: categoryFour,
  },
];
