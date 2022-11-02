export type DataStreamListener<T> = (item: T) => void;

export interface DataStream<T> {
    listen(listener: DataStreamListener<T>): void;
    close(): void;
}

export class DataStreamProducer<T> implements DataStream<T> {
    private isClosed = false;
    private readonly listeners = new Set<DataStreamListener<T>>();

    constructor(readonly onClose: () => void) { }

    next(item: T): void {
        if (this.isClosed) return;
        this.listeners.forEach(listener => listener(item));
    }

    listen(listener: DataStreamListener<T>): void {
        this.listeners.add(listener); 
    }

    close(): void {
        if (this.isClosed) return;
        this.onClose();
    }
}
