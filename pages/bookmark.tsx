import { useContext } from 'react'

import Layout from 'components/Layout'
import Booklist from 'components/Book/Booklist'
import { BookmarkContext } from 'context/bookmark'

const Bookmark = () => {
  const { bookmark } = useContext(BookmarkContext)

  return (
    <Layout title="Bookmarks">
      <h1 className="text-2xl font-bold">Bookmarks</h1>
      {bookmark.length === 0 ? (
        <p className="mt-8 font-medium text-center">No bookmarks yet!</p>
      ) : (
        <Booklist books={bookmark} />
      )}
    </Layout>
  )
}

export default Bookmark
