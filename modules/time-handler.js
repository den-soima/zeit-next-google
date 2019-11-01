export default class TimeHandler {
    
    static attempts(runHistory) {
        return runHistory.length ? runHistory.length : 0;
    }

    static lasttime(runHistory) {
        let lasttime = {
            seconds: 0,
            nanoseconds: 0,
        };
        if (Array.isArray(runHistory) && runHistory.length) {
            lasttime = runHistory[runHistory.length - 1]
        }
        return lasttime
    }

    static mintime(runHistory) {
        let mintime = {
            seconds: 0,
            nanoseconds: 0,
        };

        if (Array.isArray(runHistory) && runHistory.length) {
            mintime = runHistory[0];
            runHistory.forEach(attempt => {
                if (attempt.second < mintime.seconds)
                    mintime = attempt;
                else if (attempt.nanoseconds < mintime.nanoseconds) {
                    mintime = attempt;
                }
            });
        }

        return mintime;
    }

    static maxtime(runHistory) {
        let maxtime = {
            seconds: 0,
            nanoseconds: 0,
        };
        if (Array.isArray(runHistory) && runHistory.length) {
            runHistory.forEach(attempts => {
                if (attempts.second > maxtime.seconds)
                    maxtime = attempts;
                else if (attempts.nanoseconds > maxtime.nanoseconds) {
                    maxtime = attempts;
                }
            });
        }
        return maxtime;
    }

    static averagetime(runHistory) {
        let averagetime = {
            seconds: 0,
            nanoseconds: 0,
        };

        if (Array.isArray(runHistory) && runHistory.length) {
            let sum = runHistory.reduce((sum, attempt) => {
                    return {
                        seconds: sum.seconds + attempt.seconds,
                        nanoseconds: sum.nanoseconds + attempt.nanoseconds,
                    }
                }
            );

            const attemptsCount = runHistory.length;
            const NS_PER_SEC = 1e9;
            const timeInNanoseconds = sum.seconds * NS_PER_SEC + sum.nanoseconds;
            const average = timeInNanoseconds / attemptsCount;
            const averageSeconds = Math.trunc(average / NS_PER_SEC);
            const averageNanoseconds = Math.round(average - averageSeconds * NS_PER_SEC);

            averagetime = {seconds: averageSeconds, nanoseconds: averageNanoseconds}
        }
        return averagetime;
    }
}