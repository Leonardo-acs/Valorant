export default function SearchResults({ results }) {
    return (
        <div className="search-results">
            {results.map((match) => (
                <div key={match.id}>
                    <p>{match.date}</p>
                    <p>{match.map}</p>
                    <p>{match.mode}</p>
                </div>
            ))}
        </div>
    );
}

