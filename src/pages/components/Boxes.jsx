
import "./Boxes.css";

//! On this case use "children" word to detect HTML content
export const CustomMarginBox = ({
	children
}) => {
	return(
		<div className="margin-out">
			<div className="margin-in">
				<div className="section">
					{children}
				</div>
			</div>
		</div>
	)
}

export const CustomColorBox = ({
	children
}) => {
	return(
		<div className="color-box">
			<div className="color-bkg-left"/>
			<div className="color-bkg-right"/>
			{children}
		</div>
	)
}

export const CustomColorBox_NoBkg = ({
	children
}) => {
	return(
		<div className="color-box" style={{backgroundColor: "#000"}}>
			{children}
		</div>
	)
}

export const AnimatedBox_Main = ({
	children
}) => {
	return(
		<div>
			{children}
		</div>
	)
}