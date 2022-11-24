import {useFormContext} from "react-hook-form";

export default function Selector(props) {
    const {register, errors} = useFormContext();
    const {cities, type} = props;

    return(
        <div>
            <label htmlFor="start_city">{type === "from" ? "Місто відправлення" : "Місто прибуття"}</label>
            <select defaultValue="" id="start_city" {...register(type === "from" ? "start_city" : "finish_city")}>
                <option value="" disabled hidden>Оберіть місто</option>
                {cities.map(city => <option key={city.id} value={city.name}>{city.name}</option>)}
            </select>
            <span>{errors[type === "from" ? "start_city" : "finish_city"]?.message}</span>
        </div>
    )
}