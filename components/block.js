import BlockBlockquote from './block_blockquote'
import BlockLink from './block_link'
import BlockParagraph from './block_paragraph'
import BlockPhoto from './block_photo'
import BlockSong from './block_song'

export default function Block({ block }) {
  const renderBlock = () => {
    switch (block.component) {
      case 'blockquote':
        return <BlockBlockquote block={block} />
      case 'link':
        return <BlockLink block={block} />
      case 'paragraph':
        return <BlockParagraph block={block} />
      case 'photo':
        return <BlockPhoto block={block} />
      case 'song':
        return <BlockSong block={block} />
      default:
        return <div className="text-gray-500">[block: {block.component}]</div>
    }
  }

  return (
    <div className="mb-8">
      {renderBlock()}
    </div>
  )
}
