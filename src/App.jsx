import "./app.css";
import RightBar from "./components/rightBar/RightBar";
import TopBar from "./components/topBar/TopBar";
import Main from "./components/main/Content";
import Loader from "./components/ui/loader/Loader";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {searchResult} from "./components/store/resultsApiSlice";
import {fetchPodcasts} from "./components/store/resultsApiSlice";
import axios from "axios";

let cancelAxios = null;




const App = () => {

  const isLoading = useSelector((state) => state.results.isLoading);
  const dispatch = useDispatch();
  
  // const results = useSelector((state) => {
  //   console.log("the state is", state);
  //   return state.results;
  // });

  useEffect(() => {
    console.log("dispatching");
    dispatch(fetchPodcasts());
  }, []);

  return (
    <div className="app" dir="rtl">
      <RightBar />
      <div className="main-content">
        <TopBar />
        {isLoading && <Loader />}
        <Main />
      </div>
    </div>
  );
};

export default App;
