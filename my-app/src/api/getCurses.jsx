import axios from "axios";

const getCurses = async () => {
  const responce = await axios.get(
    "https://www.cbr-xml-daily.ru/daily_json.js"
  );

  return responce.data;
};

export default getCurses;
