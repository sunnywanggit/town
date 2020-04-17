const formatTime = date => {
    date = new Date(date)
    const year = date.getFullYear()
    let month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    const switchMonth={
        1:'一月',
        2:'二月',
        3:'三月',
        4:'四月',
        5:'五月',
        6:'六月',
        7:'七月',
        8:'八月',
        9:'九月',
        10:'十月',
        11:'十一月',
        12:'十二月',
    }

    return {'year': year, 'month':switchMonth[month], 'day': day}
    // return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

module.exports = {
    formatTime: formatTime
}
