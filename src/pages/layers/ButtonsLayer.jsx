import "./ButtonsLayer.css"

export const ButtonsLayer = ({
	setShowThemes,
	isPlaying,
	toggleAudio
}) => {
	return(
		<div className="Buttons">
			<div style={{height:"10px"}}/>
			<button className="button-circle" onClick={setShowThemes}>
				🎨
			</button>
			
			<div style={{height:"10px"}}/>
			<button className="button-circle" onClick={toggleAudio}>
				{isPlaying ? "🎵" : "🔇"}
			</button>
		</div>
	)
}
