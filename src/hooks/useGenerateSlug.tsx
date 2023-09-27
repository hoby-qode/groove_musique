const useGenerateSlug = (inputString: string): string => {
  return inputString
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
}
export default useGenerateSlug
