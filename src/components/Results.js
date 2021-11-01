import "./Results.css";
import Card from "./Card";

const Results = (props) => {
  console.log(props.data);
  return (
    <div className="results">
      {props?.data?.map((event, i) => {
        return (
          <Card
            key={i}
            eventName={event.name}
            eventDate={event.date}
            image={event.image}
            changeEventsData={props.changeEventsData}
            data={props.data}
          />
        );
      })}
    </div>
  );
};

export default Results;
