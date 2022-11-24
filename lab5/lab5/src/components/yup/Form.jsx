import {useForm, FormProvider} from "react-hook-form";
import {Box} from "@mui/material";
import {useState} from "react";
import * as yup from "yup";
import Spot from "./Spot";
import Selector from "./Selector";

const schema = yup.object().shape({
    start_city: yup.string().required("Оберіть Місто відправлення").label("Місто відправлення"),
    finish_city: yup.string().required("Оберіть Місто прибуття").label("Місто прибуття"),
    type: yup.string().required("Оберіть Вид вантажу").label("Вид вантажу"),
    spots: yup.array().when("type", {
        is: "palette",
        then: yup.array().of(
            yup.object().shape({
                paletteType: yup.string().required("Оберіть тип палетів").test(
                    'not-empty',
                    'Оберіть тип палетів',
                    (value) => value !== ""
                ).label("Тип палети"),
                cost: yup.string()
                    .test(
                        "if-positive",
                        "Вкажіть число > 0",
                        (value) => value > 0
                    ).required("Вкажіть Вартість").label("Вартість").typeError("Вкажіть вартість"),
                count: yup.number().min(1, "Кількість не може бути < 1").required("Вкажіть Кількість").label("Кількість").typeError("Вкажіть кількість"),
                
            })
        )
    }).when("type", {
        is: "loads",
        then: yup.array().of(
            yup.object().shape({
                count: yup.number().min(1, "Кількість не може бути < 1")
                    .required("Вкажіть кількість").label("Кількість").typeError("Вкажіть кількість"),
                cost: yup.string()
                    .test(
                    "if-positive",
                    "Вкажіть число > 0",
                    (value) => value > 0
                ).required("Вкажіть Вартість").label("Вартість").typeError("Вкажіть вартість"),
                weight: yup.string().test(
                    "if-positive",
                    "Вкажіть число > 0",
                    (value) => value > 0
                ).required("Вкажіть Вагу").label("Вага").typeError("Вкажіть вагу"),
                length: yup.number().min(0, "Довжина має бути >= 0").required("Вкажіть Довжину").label("Довжина").typeError("Вкажіть довжину"),
                width: yup.number().min(0, "Ширина має бути >= 0").required("Вкажіть Ширину").label("Ширина").typeError("Вкажіть ширину"),
                height: yup.number().min(0, "Висота має бути >= 0").required("Вкажіть висоту").label("Висота").typeError("Вкажіть висоту"),
            })
        )
    }),
    packaging: yup.boolean().label("Тип упаковки").default(false),
    packagingType: yup.string().when("packaging", {
        is: true,
        then: yup.string()
            .test(
                'not-empty',
                'Оберіть тип упаковки',
                (value) => value !== ""
            ).required("Оберіть тип упаковки")
    }),
    liftUp: yup.boolean().label("Підйом на поверх").default(false),
    liftUpFloors: yup.number().when("liftUp", {
        is: true,
        then: yup.number().min(1, "Кількість поверхів має бути > 1").typeError("Вкажіть кількість поверхів")
    }),
    lifUpElevator: yup.boolean().label("Ліфт").default(false),
    return: yup.boolean().label("Зворотня доставка").default(false),
    returnType: yup.string().when("return", {
        is: true,
        then: yup.string().required("Оберіть тип зворотньої доставки")
    }),
    palletizing: yup.boolean().label("Палетування").default(false),
});

const useYupValidationResolver = (schema) => {
    return async (data) => {
        try {
            await schema.validate(data, {abortEarly: false});
            return {values: data, errors: {}};
        } catch (e) {
            console.log({
                values: {},
                errors: e.inner.reduce((allErrors, currentError) => {
                    return {
                        ...allErrors,
                        [currentError.path]: {
                            type: currentError.type,
                            message: currentError.message,
                        },
                    };
                }, {}),
            });

            return {
                values: {},
                errors: e.inner.reduce((allErrors, currentError) => {
                    return {
                        ...allErrors,
                        [currentError.path]: {
                            type: currentError.type,
                            message: currentError.message,
                        },
                    };
                }, {}),
            };
        }
    };
}

export default function Form(props) {
    const resolver = useYupValidationResolver(schema);

    const {cities, palettes, packages, returnTypes} = props;
    const {register, handleSubmit, formState: {errors}} = useForm({resolver});

    const [type, setType] = useState("");
    const [spots, setSpots] = useState([]);
    const [isPackaging, setIsPackaging] = useState(false);
    const [isReturn, setIsReturn] = useState(false);
    const [isLiftUp, setIsLiftUp] = useState(false);
    const [count, setCount] = useState(0);

    const addSpot = (spot={}) => {
        spot["type"] = type;
        setSpots([...spots, spot]);
        setCount(count + 1);
    }
    const removeSpot = (index) => {
        setSpots(spots.filter((_, i) => i !== index));
        setCount(count - 1);
    }

    const handleTypeChange = (e) => {
        setType(e.target.value);

        if (e.target.value === "loads") {
            setSpots([{count: 1, cost: 0, weight: 0, length: 0, width: 0, height: 0}]);
        }
        else if (e.target.value === "palette") {
            setSpots([{count: 1, cost: 0, paletteType: ""}]);
        }
        setCount(1);
    }
    const onSubmit = (data) => {
        console.log(data);
    }
    const onReset = () => {
        setType("");
        setSpots([]);
    }

    return (
        <Box>
          
            <FormProvider {...{register, handleSubmit, errors}}>
                <form onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
                    <div>
                        <Selector cities={cities} type="from"/>
                        <Selector cities={cities} type="to"/>
                    </div>

                    <div>
                        <label htmlFor="type">Вид відправлення</label>
                        <select defaultValue="" id="type" {...register("type")} onChange={handleTypeChange}>
                               <option value="" disabled hidden>Оберіть вид відправлення</option>
                               <option value="palette">Палети</option>
                            <option value="loads">Вантажі</option>
                        </select>
                        <span>{errors.type?.message}</span>
                    </div>

                    {spots.length > 0 &&
                    <div>
                        {spots.map((spot, index) => (
                            <Spot key={"spot"+index.toString()} index={index} type={type} removeSpot={removeSpot} palettes={palettes} />
                        ))}
                        <button type="button" onClick={addSpot} disabled={spots.length===2 ? true : false}>Додати місце</button>
                    </div>
                    }

                    <div>
                        <input id="packaging" type="checkbox" {...register(`packaging`)} onChange={() => setIsPackaging(!isPackaging)}/>
                        <label htmlFor="packaging">Упаковка</label>
                    </div>
                    {isPackaging && (
                        <>
                            <div>
                                <select defaultValue="" id="packagingType" {...register(`packagingType`)}>
                                    <option value="" disabled hidden>Оберіть тип упаковки</option>
                                    {packages.map((item, index) => (
                                        <option key={"package"+index.toString()} value={item.id}>{item.label}</option>
                                    ))}
                                </select>
                                <span>{errors.packagingType?.message}</span>
                            </div>
                            <span>Кількість: {count}</span>
                        </>
                        )}

                    <div>
                        <input id="liftUp" type="checkbox" {...register(`liftUp`)} onChange={() => setIsLiftUp(!isLiftUp)}/>
                        <label htmlFor="liftUp">Підйом на поверх</label>
                    </div>
                    {isLiftUp && (
                        <>
                            <div>
                                <label htmlFor="liftUpFloors">Поверх</label>
                                <input id="liftUpFloors" type="number" {...register(`liftUpFloors`)}/>
                                <span>{errors.liftUpFloors?.message}</span>
                            </div>
                            <div>
                                <input id="liftUpElevator" type="checkbox" {...register(`liftUpElevator`)}/>
                                <label htmlFor="liftUpElevator">Ліфт</label>
                            </div>
                        </>
                    )}

                    <div>
                        <input id="return" type="checkbox" {...register(`return`)} onChange={() => setIsReturn(!isReturn)}/>
                        <label htmlFor="return">Повернення</label>
                    </div>

                    {isReturn &&
                        <div>
                            <label htmlFor="returnType">Тип повернення</label>
                            <select defaultValue="" id="returnType" {...register(`returnType`)}>
                                <option value="" disabled hidden>Оберіть тип повернення</option>
                                {returnTypes.map((type, index) => (
                                    <option key={"returnType"+index.toString()} value={type.id}>{type.label}</option>
                                ))}
                            </select>
                            <span>{errors.returnType?.message}</span>
                        </div>
                    }

                    <div>
                        <input id="palletizing" type="checkbox" {...register(`palletizing`)}/>
                        <label htmlFor="palletizing">Палетування</label>
                    </div>

                    <div>
                        <input type="submit"/>
                        <input type="reset"/>
                    </div>
                </form>
            </FormProvider>
        </Box>
    );
}