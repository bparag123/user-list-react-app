import React, { useCallback } from 'react';
import classes from "./UserItem.module.css"
import { useDispatch } from "react-redux"
import { RiDeleteBin6Line, RiLock2Line } from "react-icons/ri"
import userSlice from '../../store/slices/User-Slice';

const Useritem = ({ data, showCard }) => {
    const dispatch = useDispatch()

    const onHover = useCallback(() => {
        showCard(data)
    }, [data, showCard])

    const onHoverOut = useCallback(() => {
        showCard(null)
    }, [showCard])

    const deleteHandler = () => {
        dispatch(userSlice.actions.delete({ id: data.id }))
    }

    return (
        <div className={classes['user-item']}>
            <div onMouseLeave={onHoverOut} onMouseEnter={onHover} className={classes["img-name-email"]}>
                <img src={data.avatar} alt="" />
                <div className={classes['name-email']}>
                    <div>{data.first_name} {data.last_name}</div>
                    <div className={classes["email"]}>{data.email}</div>
                </div>
            </div>
            <div className={classes["status"]}>
                {
                    data.status === "Active" ? <div className={classes['active-user']}>Active</div> :
                        <select name="" id="">
                            <option value="Read">In Active</option>
                            <option value="Read">Active</option>
                        </select>
                }
            </div>
            <div className={classes["access"]}>
                {
                    data.status === "Active" ? "Owner" :
                        <select name="" id="">
                            <option value="Read">Read</option>
                            <option value="Read">Manager</option>
                        </select>
                }
            </div>

            <div className={classes['action-btn']}>
                {
                    data.status === "Active" ? <RiLock2Line /> : <RiDeleteBin6Line height={2} onClick={deleteHandler} />
                }
            </div>
        </div >
    );
}

export default Useritem;
