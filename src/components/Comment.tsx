export const Comment = (props: {
  comment: string;
  rating: number;
  date: string;
  userName: string;
}) => {
  const { comment, rating, date, userName } = props;
  return (
    <div className="text-sm mb-2">
      <p className=" overflow-hidden line-clamp-3">{comment}</p>
      <div className="flex gap-2">
        <p>{rating}</p>
        <p>{userName}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};
