import useTrailers from "../hooks/useTrailers";
interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);
  if (isLoading) return null;
  if (error || !data) throw error;
  console.log(data);
  return (
    <video
      src={data.results[0]?.data[480]}
      poster={data.results[0]?.preview}
      controls
    ></video>
  );
};

export default GameTrailer;
