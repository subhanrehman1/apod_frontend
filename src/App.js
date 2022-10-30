import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CalendarComp from "./components/calendar/CalendarComp";
function App() {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, [date]);
  useEffect(() => {
    console.log(date);
    axios(
      `/apod/planetary/v1/${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`
    )
      .then((res) => {
        if (res) {
          setLoading(false);
        }
        console.log(res.data.planetaryData);
        setData(res.data.planetaryData);
      })
      .catch((err) => console.log(err));
  }, [date]);

  return (
    <>
      <div>
        <div className="top-comp">
          {loading ? (
            <></>
          ) : (
            <div className="apod-title">{`Title : ${data?.title}`}</div>
          )}
          <div className="cal-box">
            <CalendarComp
              date={date}
              setDate={setDate}
              setLoading={setLoading}
            />
          </div>
        </div>
        {loading ? (
          <div className="load">Loading...</div>
        ) : (
          <div>
            <img className="apod-image" alt="Planetary Image" src={data?.url} />
          </div>
        )}
        {!loading && <div className="apod-explain">{data?.explanation}</div>}
      </div>
      )
    </>
  );
}

export default App;
