import "./ThemesLayer.css"

export const ThemesLayer = ({
	setShowThemes,
	changeTheme
}) => {
	return(
		<div className="ThemesButtons" onClick={setShowThemes}>
			<button className="btn btn-fantasy" onClick={() => changeTheme("fantasy")}>
				Bosque
			</button>

			<div style={{height:"10px"}}/>

			<button className="btn btn-paper" onClick={() => changeTheme("paper")}>
				Manga
			</button>

			<div style={{height:"10px"}}/>
			
			<button className="btn btn-sakura" onClick={() => changeTheme("sakura")}>
				Sakura
			</button>
			
			<div style={{height:"10px"}}/>
			
			<button className="btn btn-night" onClick={() => changeTheme("night")}>
				Noche
			</button>
		</div>
	)
}