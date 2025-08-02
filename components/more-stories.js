import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="grid gap-8 md:gap-12">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
      
      {/* Portfolio Context */}
      <div className="mt-12 p-6 bg-slate-50 rounded-lg">
        <h3 className="text-lg font-bold mb-3">Portfolio Notes</h3>
        <p className="text-sm text-slate-600">
          These projects represent a curated selection of my product management work. While confidentiality agreements 
          prevent sharing many commercial details, these examples demonstrate my approach to data-driven product strategy, 
          user engagement optimization, and cross-functional team leadership. Each case study highlights measurable business 
          impact and the methodologies I use to drive product success.
        </p>
      </div>
    </section>
  )
}
