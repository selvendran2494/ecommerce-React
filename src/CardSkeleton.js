import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ cards }) => {
  console.log(cards);
  return (
    Array(cards).fill(0).map((obj,id)=> 
    <div style={{ width: "18rem" }} key={id}>
      <Skeleton height={150} />
      <Skeleton height={30} count={1} />
      <Skeleton height={50} />
      <Skeleton />
  </div>
  )
  );

};

export default CardSkeleton;
