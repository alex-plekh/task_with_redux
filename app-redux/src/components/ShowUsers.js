import {useDispatch, useSelector} from 'react-redux';
import {useState} from "react";

export const ShowUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const [GetUsersBtn, setGetUsersBtn] = useState(false);

    const btnOn = () => {
        setGetUsersBtn(true);
    }
    if (!GetUsersBtn){
        return (
            <button className='mainBtn' onClick={btnOn}>Get users</button>
        )
    }return (
            <div className='wrapper'>
                {users.map((item) => {
                    return (
                        <div key={item.id} className={'cardUser'}>

                            <h3 className={'name'}>{item.name}</h3>
                            <p>
                                <span className={'boldTitle'}>username:</span>{item.username}
                            </p>
                            <p>
                                <span className={'boldTitle'}>email:</span> {item.email}
                            </p>
                            <p>
                            <span
                                className={'boldTitle'}>address:</span> {item.address.street} - {item.address.suite} - {item.address.city}
                            </p>
                            <p>
                                <span className={'boldTitle'}>phone:</span> {item.phone}
                            </p>
                            <p>
                                <span className={'boldTitle'}>website:</span>{item.website}
                            </p>
                            <p>
                                <span className={'boldTitle'}>company name:</span>{item.company.name}
                            </p>
                        </div>

                    )
                })
                }
            </div>
        );
    }
export default ShowUsers;