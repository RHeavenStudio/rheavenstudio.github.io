export async function load({ params }){
    const post = await import(`../${params.slug}.md`)
    const { title, date, authors } = post.metadata
    const content = post.default
  
    return {
      content,
      title,
      date,
      authors
    }
  }