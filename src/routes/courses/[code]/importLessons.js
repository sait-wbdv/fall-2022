const imports = Object.entries(import.meta.glob('../../../lib/content/courses/**/*.md'));

export const posts = await Promise.all(
  imports.map(async ([path, resolver]) => {
    const { metadata } = await resolver()

    // .slice(11, -3) removes the date (ex. 2022-06-12) and the file extension
    const pathArray = path.split('/')
    const fileName = pathArray.pop().slice(0,-3);
    const day = fileName.slice(0,2);
    const code = pathArray.pop();

    return { ...metadata, path, fileName, day, code }
  })
)