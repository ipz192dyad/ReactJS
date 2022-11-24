import {useFormContext} from "react-hook-form";


export default function Spot(props) {
    const {register, errors} = useFormContext();
    const {index, type, removeSpot, palettes} = props;

    return(
        <div>
            {type === "palette" && (
                <>
                    <div>
                        <label htmlFor={`spots[${index}].paletteType`}>Тип палети</label>
                        <select defaultValue="" id={`spots[${index}].paletteType`} {...register(`spots[${index}].paletteType`)}>
                            <option value="" disabled hidden>Оберіть тип палетів</option>
                            {palettes.map(palette => <option key={palette.id} value={palette.value}>{palette.label}</option>)}
                        </select>
                        <span>{errors[`spots[${index}].paletteType`]?.message}</span>
                    </div>

                    <div>
                        <label htmlFor={`spots[${index}].cost`}>Оголошена вартість, грн</label>
                        <input id={`spots[${index}].cost`} {...register(`spots[${index}].cost`)}/>
                        <span>{errors[`spots[${index}].cost`]?.message}</span>
                    </div>

                    <div>
                        <label htmlFor={`spots[${index}].count`}>Кількість палет</label>
                        <input type="number" id={`spots[${index}].count`} {...register(`spots[${index}].count`)}/>
                        <span>{errors[`spots[${index}].count`]?.message}</span>
                    </div>
                </>
            )}

            {type === "loads" && (
                <>
                    <div>
                        <label htmlFor={`spots[${index}].count`}>Кількість</label>
                        <input type="number" id={`spots[${index}].count`} {...register(`spots[${index}].count`)}/>
                        <span>{errors[`spots[${index}].count`]?.message}</span>
                    </div>

                    <div>
                        <label htmlFor={`spots[${index}].cost`}>Оголошена вартість, грн</label>
                        <input id={`spots[${index}].cost`} {...register(`spots[${index}].cost`)}/>
                        <span>{errors[`spots[${index}].cost`]?.message}</span>
                    </div>

                    <div>
                        <label htmlFor={`spots[${index}].weight`}>Вага, кг</label>
                        <input id={`spots[${index}].weight`} {...register(`spots[${index}].weight`)}/>
                        <span>{errors[`spots[${index}].weight`]?.message}</span>
                    </div>

                    <div>
                        <label htmlFor={`spots[${index}].length`}>Довжина</label>
                        <input type="number" id={`spots[${index}].length`} {...register(`spots[${index}].length`)}/>
                        <span>{errors[`spots[${index}].length`]?.message}</span>
                    </div>

                    <div>
                        <label htmlFor={`spots[${index}].width`}>Ширина</label>
                        <input type="number" id={`spots[${index}].width`} {...register(`spots[${index}].width`)}/>
                        <span>{errors[`spots[${index}].width`]?.message}</span>
                    </div>

                    <div>
                        <label htmlFor={`spots[${index}].height`}>Висота, см</label>
                        <input type="number" id={`spots[${index}].height`} {...register(`spots[${index}].height`)}/>
                        <span>{errors[`spots[${index}].height`]?.message}</span>
                    </div>
                </>
            )}
            {index > 0 && (<button onClick={() => removeSpot(index)}>remove</button>)}
        </div>
    )
}