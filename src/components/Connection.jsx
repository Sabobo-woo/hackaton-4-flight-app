export default function Connection({ connection }) {
    return (
        <div>{connection.cityFrom}({connection.flyFrom})-{connection.cityTo}({connection.flyTo})</div>
    )
}