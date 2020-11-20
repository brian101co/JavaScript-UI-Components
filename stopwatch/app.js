class StopWatch {
    constructor() {
        this._startTime = null;
        this._endTime = null;
        this._duration = 0;
        this._started = false;
    }

    get duration() {
        return this._duration / 1000;
    }

    start() {
        if (!this._started) {
            this._started = true;
            this._startTime = Date.now();
        } else {
            throw new Error("Cannot call start. Stopwatch has already started.");
        }
    }

    stop() {
        if (this._started) {
            this._started = false;
            this._endTime = Date.now();
            this._duration = this._endTime - this._startTime;
        } else {
            throw new Error("Cannot call stop. Stopwatch has not been started.");
        }
    }

    reset() {
        this._startTime = null;
        this._endTime = null;
        this._duration = 0;
    }
}