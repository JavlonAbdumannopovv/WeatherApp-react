import { useEffect, useState } from "react";
// const api = {
//   url:"https://api.openweathermap.org/data/2.5/",
//   key:"5d1b8e4553f42a9a93552809e75b6bdd",
//   fetch:`${api.url}weather?q=${location}&units=metric&APPID=${api.key}`,
// }

const initialState = {
  data: null,
  loading: true,
}

function useFeach(location) {
  const [state, setState] = useState(initialState);


  useEffect(() => {
    setState({ data: null, loading: true })
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=5d1b8e4553f42a9a93552809e75b6bdd`)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(()=>{
          setState({ data: data, loading: false });
        },2000);
      })
  }, [location]);

  return state;
}

export default useFeach;



