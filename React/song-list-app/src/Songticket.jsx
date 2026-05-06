function SongTicket({ songObj }) {
  function onLikeBtnClick() {
    alert(`Me gusta la canción ${songObj.title}!`)
  }

  return (
    <div className="song-ticket">
      <strong>Title:</strong> {songObj.title} <br />
      <strong>Autor:</strong> {songObj.autor} <br />
      <strong>Year:</strong> {songObj.year} <br />
      <a href={songObj.videoUrl} target="_blank">
        Ver video
      </a>
      <br />
      <button onClick={onLikeBtnClick}>Me gusta!</button>
    </div>
  )
}

// function SongTicket(props) {
//   return (
//     <div className="song-ticket">
//       Title: {props.title} <br />
//       Author: {props.author} <br />
//       Year: {props.year} <br />
//       Video Url: {props.videoUrl} <br />
//     </div>
//   )
// }

export default SongTicket