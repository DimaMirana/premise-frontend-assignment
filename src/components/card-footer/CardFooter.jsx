import React from 'react';

import './CardFooter.styles.scss';

const CardFooter = ({ dateUpdated}) => {
    function timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var ampm = hour >= 12 ? 'pm' : 'am';
        hour = hour % 12;
        hour = hour ? hour : 12;
        min = min < 10 ? '0' + min : min;
        var time = month + ' ' + date + ' , ' + year + ' @ ' + hour + ':' + min + ' ' + ampm;
        return time;
    }

    console.log(dateUpdated);
    return <div className="card-footer">{'Last Updated: ' + timeConverter(dateUpdated)}</div>;
}


export default CardFooter;