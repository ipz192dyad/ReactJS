export function CityOption(props) {
    let { id, name } = props;
    return (
        <option value={id}>{name}</option>
    )
}