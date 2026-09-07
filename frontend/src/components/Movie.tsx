interface Props {
    title: string;
    genre: string;
    year: number;
    description: string;
    rating: number;
}

export default function Movie({ title, genre, year, description, rating }: Props) {
 return <article>
    <h3>Film címe: {title}</h3>
    <p>{genre}</p>
    <p>{description}</p>
    <p>Értékelése: {rating}</p>
    <p>{year}</p>
 </article>
}