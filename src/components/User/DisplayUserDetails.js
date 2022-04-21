import React from 'react';
import classes from "./DisplayUser.module.css"
import Card from '../UI/Card';

const DisplayUserDetails = ({ data }) => {
    return (
        <Card>
            <div className={classes['display-user']}>
                <div className={classes["basic-detail"]}>
                    <img src={data.avatar} alt="" />
                    <div className={classes["name"]}>
                        <div>{data.first_name} {data.last_name}</div>

                        <div className={data.status === "Active" ? classes['active-user'] : classes['inactive-user']}></div>
                    </div>
                    <div className={classes['email']}>{data.email}</div>

                    <div className={classes["plan-name"]}>Your Plan : Standard</div>
                    <button>{data.status} User</button>
                </div>
                <div className={classes["plan-detail"]}>
                    <div>Plan Uses</div>
                    <meter value="40" max="100">
                        40%
                    </meter>
                    <div className={classes['clicks-div']}>
                        <div>
                            <div className={classes["count"]}>
                                2450
                            </div>
                            <div>
                                <p>Clicks Reviewed</p>
                            </div>
                        </div>
                        <div className={classes["middle-line"]}>
                        </div>
                        <div>
                            <div className={classes["count"]}>
                                5000
                            </div>
                            <div>
                                <p>Monthly Clicks</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Card>
    );
}

export default DisplayUserDetails;
