import Audio from './audio'

export default function BlockSong({ block }) {
  return (
    <div>
      <Audio src={block.audio.url} />
      {
        block.caption &&
        <div className="mt-2 text-xs text-center italic text-gray-500">
          {block.caption}
        </div>
      }
      {
        block.album &&
        <div className="mt-2 text-xs text-center italic text-gray-500">
          Album: <a href={`/song-albums/${block.album.slug}`}>{block.album.name}</a>
        </div>
      }
    </div>
  )
}
