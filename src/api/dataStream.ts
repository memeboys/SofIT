export type DataListener<T> = (item: T) => void;
export interface DataStream<T> {
    onData(listener: (item: T) => void): void;
    close(): void;
}

export class DataStreamProducer<T> implements DataStream<T> {
    private isClosed = false;
    private readonly dataListeners = new Set<DataListener<T>>();

    constructor(readonly onClose: () => void) { }

    next(item: T): void {
        if (this.isClosed) return;
        this.dataListeners.forEach(listener => listener(item));
    }

    onData(listener: DataListener<T>): void {
        this.dataListeners.add(listener); 
    }

    close(): void {
        if (this.isClosed) return;
        this.onClose();
    }
}
