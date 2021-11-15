import React, {useEffect, useState} from "react";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {actionGetUsers} from "./actions/action";
import ShowUsers from "./components/ShowUsers";
import {USERS_URL} from "./constants";

function App() {

    const dispatch = useDispatch();
    const users = useSelector((state => state.users));
    console.log(users)

    const getUsers = (data) =>{
        dispatch(actionGetUsers(data))
    }

    useEffect (() => {
        fetch(USERS_URL)
            .then(response => response.json())
            .then(data => {
                getUsers(data);
            })
    },[getUsers])

    return (
    <div className="App">
        <ShowUsers/>
    </div>
  );
}

export default App;
