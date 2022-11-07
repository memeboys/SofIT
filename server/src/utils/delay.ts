export async function delay(timeout: number): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, timeout));
}
