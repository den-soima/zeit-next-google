const NS_PER_SEC = 1e9;

class ProcessTime {
    static formatTime(time, precision = 3) {
        const convertedNanoseconds = Math.round(time.nanoseconds / NS_PER_SEC * Math.pow(10, precision));
        return `${time.seconds} s : ${convertedNanoseconds} ms`
    }
}

export default ProcessTime;