import Image from 'next/image';

// Function to fetch posts from a specific category
async function fetchCategory(category) {
  try {
    const res = await fetch(`https://api-berita-indonesia.vercel.app/cnn/${category}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${category}`);
    }
    const data = await res.json();
    // Ensure that data.data and data.data.posts exist
    return data?.data?.posts || [];
  } catch (error) {
    console.error(error);
    return []; // Return an empty array if there's an error
  }
}

export default async function Page() {
  // Fetch data for each category
  const [terbaru, nasional, internasional, ekonomi, olahraga, teknologi, hiburan, gayaHidup] = await Promise.all([
    fetchCategory('terbaru'),
    fetchCategory('nasional'),
    fetchCategory('internasional'),
    fetchCategory('ekonomi'),
    fetchCategory('olahraga'),
    fetchCategory('teknologi'),
    fetchCategory('hiburan'),
    fetchCategory('gaya%20hidup'),
  ]);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Featured News */}
      <section className="mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <div className="w-1/2 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Featured News Title</h2>
            <p className="text-gray-600">Brief description of the featured news article goes here.</p>
          </div>
          <div className="w-1/2 pr-4">
            <Image
              src="/hero.jpg"
              alt="Featured News"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">News Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Terbaru Category */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Image
              src={terbaru[0]?.thumbnail || 'path/to/category-image.jpg'}
              alt="Terbaru"
              width={360}
              height={200}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Terbaru</h3>
            <p className="text-gray-600">{terbaru[0]?.description || 'Brief description of this category.'}</p>
          </div>

          {/* Nasional Category */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Image
              src={nasional[0]?.thumbnail || 'path/to/category-image.jpg'}
              alt="Nasional"
              width={360}
              height={200}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Nasional</h3>
            <p className="text-gray-600">{nasional[0]?.description || 'Brief description of this category.'}</p>
          </div>

          {/* Internasional Category */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Image
              src={internasional[0]?.thumbnail || 'path/to/category-image.jpg'}
              alt="Internasional"
              width={360}
              height={200}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Internasional</h3>
            <p className="text-gray-600">{internasional[0]?.description || 'Brief description of this category.'}</p>
          </div>

          {/* Ekonomi Category */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Image
              src={ekonomi[0]?.thumbnail || 'path/to/category-image.jpg'}
              alt="Ekonomi"
              width={360}
              height={200}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Ekonomi</h3>
            <p className="text-gray-600">{ekonomi[0]?.description || 'Brief description of this category.'}</p>
          </div>

          {/* Olahraga Category */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Image
              src={olahraga[0]?.thumbnail || 'path/to/category-image.jpg'}
              alt="Olahraga"
              width={360}
              height={200}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Olahraga</h3>
            <p className="text-gray-600">{olahraga[0]?.description || 'Brief description of this category.'}</p>
          </div>

          {/* teknologi Category */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Image
              src={teknologi[0]?.thumbnail || 'path/to/category-image.jpg'}
              alt="Teknologi"
              width={360}
              height={200}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Teknologi</h3>
            <p className="text-gray-600">{teknologi[0]?.description || 'Brief description of this category.'}</p>
          </div>

          {/* hiburan Category */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Image
              src={hiburan[0]?.thumbnail || 'path/to/category-image.jpg'}
              alt="Hiburan"
              width={360}
              height={200}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Hiburan</h3>
            <p className="text-gray-600">{hiburan[0]?.description || 'Brief description of this category.'}</p>
          </div>
        </div>
      </section>

      {/* Recommended for You */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {terbaru.map((post) => (
            <div key={post.link} className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={360}
                height={200}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
              <p className="text-gray-600">{post.description}</p>
              <a href={post.link} className="text-blue-600 hover:underline mt-2 block">Read more</a>
            </div>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <div className="flex justify-center">
        <nav className="inline-flex shadow-sm">
          <a href="#" className="px-4 py-2 bg-white border rounded-l-lg text-gray-600 hover:bg-gray-100">Previous</a>
          <a href="#" className="px-4 py-2 bg-white border-t border-b text-gray-600 hover:bg-gray-100">1</a>
          <a href="#" className="px-4 py-2 bg-white border-t border-b text-gray-600 hover:bg-gray-100">2</a>
          <a href="#" className="px-4 py-2 bg-white border-t border-b text-gray-600 hover:bg-gray-100">3</a>
          <a href="#" className="px-4 py-2 bg-white border rounded-r-lg text-gray-600 hover:bg-gray-100">Next</a>
        </nav>
      </div>
    </main>
  );
}
