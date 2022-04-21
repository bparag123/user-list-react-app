import React, { useEffect, useState } from 'react';
import Useritem from './UserItem';
import classes from "./UserList.module.css"
import DisplayUserDetails from './DisplayUserDetails';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import getUsers from '../../store/custom-actions/get-user-data';
import Pagination from '../UI/Pagination';
import { createPortal } from "react-dom"

const Userlist = () => {
    const userData = useSelector(state => state.user);
    const [displayCard, setDisplayCard] = useState(null);
    //State for Current Page Data
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useDispatch()

    //This effect will fetch data from the server when the current page state changes
    useEffect(() => {
        dispatch(getUsers(currentPage))
    }, [dispatch, currentPage])

    //Changing the state current Page
    const changePageHandler = (e) => {
        if (e.target.value !== currentPage) {
            setCurrentPage(e.target.value)
        }
    }
    const showCard = (data) => {
        setDisplayCard(data)
    }
    return (
        <div>
            <div className={classes['list-wrapper']}>
                <div className={classes['listHeader']}>
                    <div className={classes['name']}>Name</div>
                    <div className={classes['status']}>Status</div>
                    <div className={classes['access']}>Access</div>
                </div>
                <div className={classes["user-list"]}>
                    {userData.users.map(ele => {
                        return (<Useritem key={ele.id} showCard={showCard} data={ele} />)
                    })}
                </div>

            </div>
            <div>
                {displayCard !== null && <DisplayUserDetails data={displayCard} />}
            </div>
            {/* This is a Portal Which wil render the component at given element */}
            {createPortal(<Pagination itemPerPage={6} totalItem={userData.totalUsers} changePageHandler={changePageHandler} />, document.getElementById("pagination"))}
        </div>
    )
}

export default Userlist;
