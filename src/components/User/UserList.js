import React, { Fragment, useState } from 'react';
import Useritem from './UserItem';
import classes from "./UserList.module.css"
import DisplayUserDetails from './DisplayUserDetails';
import { useSelector } from 'react-redux';

const Userlist = () => {
    console.log("re-rendered");
    const userData = useSelector(state => state.user.users);
    const [displayCard, setDisplayCard] = useState(null);

    const showCard = (data) => {
        setDisplayCard(data)
    }
    return (
        <Fragment>
            <div className={classes['list-wrapper']}>
                <div className={classes['listHeader']}>
                    <div className={classes['name']}>Name</div>
                    <div className={classes['status']}>Status</div>
                    <div className={classes['access']}>Access</div>
                </div>
                <div className={classes["user-list"]}>
                    {userData.map(ele => {
                        return (<Useritem key={ele.id} showCard={showCard} data={ele} />)
                    })}
                </div>

            </div>
            <div>
                {displayCard !== null && <DisplayUserDetails data={displayCard} />}
            </div>
        </Fragment>
    )
}

export default Userlist;
