export function Task3 (name, birth_date) {
    return (
        <div>
            <h2>Task3</h2>
            <div>Hello, {name.firstname} {name.lastname}. You were born on {birth_date.date}/{birth_date.month}/{birth_date.year}</div>
        </div>
    )
}