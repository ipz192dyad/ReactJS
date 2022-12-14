import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/actions/users";
import { increaseCounterAction, decreaseCounterAction } from "../store/reducers/counterReducer"
import { addUserAction, removeUserAction } from "../store/reducers/usersReducer";

const Lesson10 = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const topic = useSelector(state => state.counter.lesson.topic);
    const users = useSelector(state => state.users.array);

    const increase = () => {
        dispatch(increaseCounterAction());
    }
    const decrease = () => {
        dispatch(decreaseCounterAction());
    }

    const addUser = () => {
        const random = Math.floor(Math.random() * (100 - 1) + 1)
        const user = {
            name: `Petya ${Date.now() + random}`,
            id: Date.now() + random
        }
        dispatch(addUserAction(user));
    }

    const removeUser = (id) => {
        dispatch(removeUserAction(id));
    }

    return (
        <div>
            <div>
                Lesson: {topic}
                
                <br/>
                Counter: {counter}
                <button onClick={increase}>Increase counter</button>
                <button onClick={decrease}>Decrease counter</button>
            </div>
            
            <div>
                <button onClick={addUser}>Add user</button>
                <button onClick={() => dispatch(fetchUsers())}>Add users from fakeAPI</button>
    
                {users.length ? 
                <div>
                    <h3>Users</h3>
                    {users.map(user => 
                        <div id={user.id} onClick={() => removeUser(user.id)}>{user.name}</div>)}
                </div>
                : 
                <div>Нікого немає вдома</div>
                }
            </div>
        </div>
    )
}
export { Lesson10 }