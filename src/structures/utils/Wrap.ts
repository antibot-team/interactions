export async function Wrap<T>(promise: Promise<T>): Promise<Awaited<T>> {
  const wrapped = await promise;
  return wrapped;
}
