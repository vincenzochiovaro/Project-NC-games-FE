import axios from "axios";

export const fetchReviews = () => {
  return axios.get(
    "https://vincenzos-back-end-project.onrender.com/api/reviews"
  );
};
