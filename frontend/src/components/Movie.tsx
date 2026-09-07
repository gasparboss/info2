interface Props {
  title: string;
  genre: string;
  year: number;
  description: string;
  rating: number;
  onClick: () => void;
}

export default function Movie({
  title,
  genre,
  year,
  description,
  rating,
  onClick,
}: Props) {
  return (
    <article>
      <div>
        <h3>Film címe: {title}</h3>
        <p>{genre}</p>
        <p>{description}</p>
        <p>Értékelése: {rating}</p>
        <p>{year}</p>
      </div>
      <button type="button" onClick={onClick}>
        Kedvenc
      </button>
    </article>
  );
}
