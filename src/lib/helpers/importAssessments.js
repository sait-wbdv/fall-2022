
const metaContent = Object.entries(import.meta.glob('$lib/content/assessments/**/*.md'));

export const assessments = await Promise.all(
  metaContent.map(async ([path, resolver]) => {
    const { metadata } = await resolver()

    const pathArray = path.split('/')
    const slug = pathArray.pop().slice(0,-3);
    const code = pathArray.pop();

    return { ...metadata, path, slug, code }
  })
)